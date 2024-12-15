"use client";
import { Input } from "@/components/Input";
import { Paragraph } from "@/components/Paragraph";
import { Text } from "@/components/Text";
import { COLORS } from "@/constants/colors";
import useDeviceScreen from "@/hooks/useDeviceScreen";
import { ChatService } from "@/services/ChatService";
import { Divider, Flex, Image, Space } from "antd";
import axios from "axios";
import { useState, useEffect, useRef, useMemo } from "react";

type Message = {
  role: "system" | "assistant" | "user";
  content: string;
};

const UserReply = ({ message }: { message: Message }) => (
  <Flex style={{ alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
    <Text style={{ color: COLORS.COOL_GRAY, fontWeight: "bold" }}>
      {message.content}
    </Text>
  </Flex>
);

const AssistantReply = ({ message }: { message: Message }) => (
  <Flex style={{ gap: 8, alignItems: "flex-start" }}>
    <Image
      src="https://avatars.githubusercontent.com/u/50161346?v=5"
      preview={false}
      style={{
        borderRadius: 8,
        height: 30,
        width: 30,
      }}
    />
    <Text style={{ color: COLORS.COOL_GRAY, fontWeight: "bold" }}>
      {message.content}
    </Text>
  </Flex>
);

const renderChat = (messages: Message[]) => {
  return messages.map((message, index) => {
    switch (message.role) {
      case "assistant":
        return <AssistantReply key={index} message={message} />;
      case "user":
        return <UserReply key={index} message={message} />;
      default:
        return undefined;
    }
  });
};

export const About = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "system",
      content: `
            You must act as a person named Jeromy Kho Chung Ming.
            Everything about him will be inside the context block.
            `,
    },
    {
      role: "assistant",
      content: "I am Jeromy Bot, I will answer on behalf of Jeromy Kho",
    },
  ]);
  const [message, setMessage] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isSmall, isMedium, isLarge } = useDeviceScreen();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputValue = e.currentTarget.value;
      setMessage("");
      const newMessages: Message[] = [
        ...messages,
        { role: "user", content: inputValue },
      ];
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: inputValue },
      ]);
      const context = await ChatService.getMetadata(inputValue);

      newMessages.push({
        role: "system",
        content: `
        # Start Context Block
        ${context}
        # End Context Block`,
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "system",
          content: `
        # Start Context Block
        ${context}
        # End Context Block`,
        },
      ]);

      setIsBotTyping(true);
      ChatService.sendMessage(newMessages)
        .then((reply) => {
          setMessages((prevMessages) => {
            const updatedMessages: Message[] = [
              ...prevMessages,
              {
                role: "assistant",
                content: reply,
              },
            ];
            return updatedMessages.length > 5
              ? updatedMessages.slice(updatedMessages.length - 5)
              : updatedMessages;
          });
        })
        .finally(() => {
          setIsBotTyping(false);
        });
    }
  };

  const chatWidth = useMemo(() => {
    console.log({
      isSmall,
      isMedium,
      isLarge,
    });
    if (isSmall) return "80%";
    if (isMedium) return "60%";
    if (isLarge) return "60%";
  }, [isSmall, isMedium, isLarge]);

  return (
    <Flex
      vertical
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 20,
      }}
    >
      <Flex style={{ alignItems: "center", width: chatWidth, gap: 8 }}>
        <Text
          code={true}
          style={{
            color: COLORS.TURQUOISE,
            fontSize: 18,
            fontWeight: "bold",
            alignSelf: "end",
          }}
        >
          01.
        </Text>
        <Text
          code={true}
          style={{
            color: COLORS.WHITE,
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: -4,
          }}
        >
          About
        </Text>
      </Flex>
      <Flex
        vertical
        style={{
          width: chatWidth,
          marginTop: 20,
        }}
      >
        <Paragraph
          style={{
            color: COLORS.COOL_GRAY,
            fontSize: 16,
            fontFamily: "Roboto",
            textAlign: "left",
          }}
        >
          Wanna find out more about me? Ask Jeromy Bot!
        </Paragraph>
      </Flex>
      <Flex
        style={{
          width: chatWidth,
        }}
      >
        <Divider
          type="horizontal"
          variant="solid"
          style={{
            background: COLORS.TURQUOISE,
            opacity: 0.1,
          }}
        />
      </Flex>
      <Flex
        vertical
        style={{
          width: chatWidth,
          height: "100%",
          marginTop: 18,
          justifyContent: "space-between",
        }}
      >
        <Flex
          vertical
          gap={18}
          style={{
            overflowY: "auto",
            paddingRight: 20,
            paddingBottom: 20,
            height: 400,
          }}
        >
          {renderChat(messages)}
          <div ref={messagesEndRef} />
        </Flex>
        <Flex vertical gap={4}>
          <Text
            style={{
              color: COLORS.LAVENDER_BLUE,
              fontWeight: "bold",
              fontSize: 12,
              marginLeft: 20,
              display: isBotTyping ? "flex" : "none",
            }}
          >
            Bot is typing...
          </Text>
          <Input
            style={{
              alignSelf: "flex-end",
              color: COLORS.WHITE,
              borderRadius: "1.5rem",
              width: "100%",
              height: 50,
              backgroundColor: "#112240",
              paddingInline: 20,
              borderStyle: "none",
            }}
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            placeholder="Message Jeromy Bot"
            onKeyDown={handleKeyDown}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

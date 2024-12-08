"use client";
import { Paragraph } from "@/components/Paragraph";
import { Text } from "@/components/Text";
import { COLORS } from "@/constants/colors";
import { Flex, Image } from "antd";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const FlexMotion = motion(Flex);

export default function Home() {
  return (
    <Flex
      style={{
        height: "100dvh",
        width: "100dvw",
        boxSizing: "border-box",
        paddingTop: 72,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex
        vertical={true}
        style={{
          width: "65%",
          gap: 16,
          boxSizing: "border-box",
        }}
      >
        <Flex
          gap={12}
          style={{
            justifyContent: "flex-start",
          }}
        >
          <motion.div
            initial={{
              x: "-100vw",
              display: "none",
            }}
            animate={{
              x: 0,
              display: "flex",
            }}
            transition={{
              delay: 4.5,
              duration: 0.1,
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/50161346?v=5"
              preview={false}
              style={{
                height: 135,
              }}
            />
          </motion.div>
          <FlexMotion
            vertical={true}
            initial={{ x: 0 }}
            animate={{
              x: [0, 150, 0],
            }}
            transition={{
              duration: 1,
              delay: 4.5,
            }}
          >
            <Text
              code={true}
              style={{
                color: COLORS.TURQUOISE,
                fontSize: 16,
              }}
            >
              <TypeAnimation
                sequence={[1000, "Hi, my name is"]}
                cursor={false}
              />
            </Text>
            <Text
              code={true}
              style={{
                color: COLORS.PERIWINKLE,
                marginLeft: -6,
                fontSize: 48,
              }}
            >
              <TypeAnimation sequence={[2000, "Jeromy Kho."]} cursor={false} />
            </Text>
            <Text
              code={true}
              style={{
                color: COLORS.COOL_GRAY,
                fontSize: 24,
                marginLeft: -2,
              }}
            >
              <TypeAnimation sequence={[3000, "Software Engineer."]} />
            </Text>
          </FlexMotion>
        </Flex>

        <FlexMotion
          vertical={true}
          initial={{
            y: "100dvh",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            delay: 5,
            duration: 1,
          }}
        >
          <Paragraph
            style={{
              color: COLORS.COOL_GRAY,
              fontSize: 16,
              fontFamily: "Roboto",
            }}
          >
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building my knowledge and experience at{" "}
            <span
              style={{
                color: COLORS.TURQUOISE,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              RYT Digital Bank
            </span>
          </Paragraph>
        </FlexMotion>
      </Flex>
    </Flex>
  );
}

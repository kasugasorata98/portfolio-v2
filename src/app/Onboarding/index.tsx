import { Title } from "@/components/Title";
import { COLORS } from "@/constants/colors";
import { Button, Flex } from "antd";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const ButtonMotion = motion(Button);

export const Onboarding = ({ onClick }: { onClick: VoidFunction }) => {
  return (
    <Flex
      vertical={true}
      style={{
        width: "100dvw",
        height: "100dvh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title
        code={true}
        style={{
          color: COLORS.PERIWINKLE,
        }}
      >
        <TypeAnimation sequence={[1000, "Are you ready?"]} />
      </Title>
      <Flex gap={12}>
        <ButtonMotion
          onClick={onClick}
          initial={{
            x: "-60dvw",
          }}
          animate={{
            x: 0,
            transition: { delay: 1, duration: 1 },
          }}
          size="large"
          style={{
            flex: 1,
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.TURQUOISE,
            backgroundColor: COLORS.HOVER_DARK,
          }}
        >
          Let's go!
        </ButtonMotion>
        <ButtonMotion
          onClick={onClick}
          initial={{
            x: "60dvw",
          }}
          animate={{
            x: 0,
            transition: { delay: 1, duration: 1 },
          }}
          size="large"
          style={{
            flex: 1,
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.TURQUOISE,
            backgroundColor: COLORS.HOVER_DARK,
          }}
        >
          I'm ready!
        </ButtonMotion>
      </Flex>
    </Flex>
  );
};

import { Divider, Flex } from "antd";
import { COLORS } from "@/constants/colors";
import { Text } from "../Text";
import styled from "styled-components";
import { motion } from "framer-motion";

const FlexMotion = motion(Flex);

const Email = styled(Text)`
  transform: rotate(90deg);
  color: ${COLORS.PERIWINKLE};
  letter-spacing: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    letter-spacing: 3.5px;
    color: ${COLORS.TURQUOISE};
  }
`;

export const RightSidePanel = () => {
  return (
    <FlexMotion
      initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 6,
      }}
      vertical={true}
      gap={115}
      style={{
        position: "fixed",
        right: -75,
        bottom: 0,
        alignItems: "center",
      }}
    >
      <Email>jeromykho98@gmail.com</Email>
      <Divider
        type="vertical"
        style={{
          height: 50,
          backgroundColor: COLORS.COOL_GRAY,
          width: 2,
        }}
      />
    </FlexMotion>
  );
};

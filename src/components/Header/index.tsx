import React, { useState } from "react";
import { Flex, Image, Space } from "antd";
import { COLORS } from "@/constants/colors";
import styled from "styled-components";
import { Text } from "../Text";
import Lottie from "lottie-react";
import MusicAnimation from "../../../public/lotties/music.json";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const FlexMotion = motion(Flex);
const SpaceMotion = motion(Space);
const SpaceMotionStyled = styled(SpaceMotion)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: ${COLORS.HOVER_DARK};
  }
`;

const NavTextNum = styled(Text)`
  color: ${COLORS.TURQUOISE};
  transition: all 0.3s ease;
  &:hover {
    font-size: 1.2em;
  }
`;

const NavTextValue = styled(Text)`
  color: ${COLORS.WHITE};
  transition: all 0.3s ease;
  &:hover {
    color: ${COLORS.TURQUOISE};
    font-size: 1.2em;
  }
`;

type NavLinkProps = {
  num: string;
  value: string;
};

const navLinks: NavLinkProps[] = [
  {
    num: "01.",
    value: "About",
  },
  {
    num: "02.",
    value: "Work",
  },
  {
    num: "03.",
    value: "Skills",
  },
  {
    num: "04.",
    value: "Projects",
  },
  {
    num: "05.",
    value: "Contact",
  },
];

const NavLink = (props: NavLinkProps) => {
  return (
    <Flex
      vertical={false}
      style={{
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      <NavTextNum code={true}>{props.num}</NavTextNum>
      <NavTextValue code={true}>{props.value}</NavTextValue>
    </Flex>
  );
};

const AppHeader: React.FC = () => {
  const [playing, setPlaying] = useState(true);
  return (
    <Flex
      style={{
        width: "100vw",
        justifyContent: "space-between",
        paddingInline: 20,
        paddingBlock: 10,
        position: "absolute",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <ReactPlayer
        style={{
          display: "none",
        }}
        url="./music/TevaBoss.mp3"
        playing={playing}
        loop={true}
      />

      <SpaceMotionStyled
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 6,
        }}
        style={{
          border: `2px solid ${COLORS.TURQUOISE}`,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src="./logo.png" width={30} height={30} preview={false} />
      </SpaceMotionStyled>

      <FlexMotion
        initial={{
          x: "100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          delay: 6,
        }}
        style={{
          alignItems: "center",
          gap: 12,
        }}
      >
        {navLinks.map((link) => (
          <NavLink key={link.num} num={link.num} value={link.value} />
        ))}
        <Space
          style={{
            width: 60,
          }}
        >
          <Lottie
            style={{
              cursor: "pointer",
            }}
            animationData={MusicAnimation}
            loop={!!playing}
            autoplay={!!playing}
            disabled={!playing}
            onClick={() => {
              console.log("hi");
              setPlaying(!playing);
            }}
          />
        </Space>
      </FlexMotion>
    </Flex>
  );
};

export default AppHeader;

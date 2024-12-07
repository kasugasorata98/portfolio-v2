import React from "react";
import { Flex, Image, Space } from "antd";
import { COLORS } from "@/constants/colors";
import { Paragraph } from "../Paragraph";
import styled from "styled-components";

// const { Title, Paragraph, Text, Link } = Typography;

const NavTextNum = styled(Paragraph)`
  color: ${COLORS.TURQUOISE};
  transition: all 0.3s ease;
  &:hover {
    font-size: 1.2em;
  }
`;

const NavTextValue = styled(Paragraph)`
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
      }}
    >
      <NavTextNum code={true}>{props.num}</NavTextNum>
      <NavTextValue code={true}>{props.value}</NavTextValue>
    </Flex>
  );
};

const AppHeader: React.FC = () => {
  return (
    <Flex
      style={{
        height: 50,
        justifyContent: "space-between",
        paddingInline: 20,
        paddingBlock: 10,
      }}
    >
      <Space
        style={{
          border: `2px solid ${COLORS.TURQUOISE}`,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src="./logo.png" width={30} height={30} />
      </Space>
      <Flex
        style={{
          alignItems: "center",
          gap: 12,
        }}
      >
        {navLinks.map((link) => (
          <NavLink key={link.num} num={link.num} value={link.value} />
        ))}
      </Flex>
    </Flex>
  );
};

export default AppHeader;

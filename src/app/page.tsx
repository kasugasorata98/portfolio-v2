"use client";
import { Flex } from "antd";
import Home from "./Home";
import { About } from "./About";
import Snowfall from "react-snowfall";

export default function Page() {
  return (
    <Flex
      vertical={true}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        snowflakeCount={25}
      />
      <Home />
      <About />
    </Flex>
  );
}

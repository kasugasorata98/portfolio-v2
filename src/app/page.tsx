import { Flex } from "antd";
import Home from "./Home";
import { About } from "./About";

export default function Page() {
  return (
    <Flex
      vertical={true}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Home />
      <About />
    </Flex>
  );
}

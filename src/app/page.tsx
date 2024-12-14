import { Flex } from "antd";
import Home from "./Home";

export default function Page() {
  return (
    <Flex vertical={true}>
      <Home />
      <Home />
    </Flex>
  );
}

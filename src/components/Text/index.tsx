import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";

const { Text: AntText } = Typography;

export const Text = (props: TextProps) => {
  return (
    <AntText
      style={{
        fontFamily: "Roboto",
      }}
      {...props}
    />
  );
};

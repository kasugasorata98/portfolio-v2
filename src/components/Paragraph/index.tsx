import { Typography } from "antd";
import { ParagraphProps } from "antd/es/typography/Paragraph";

const { Paragraph: AntParagraph } = Typography;

export const Paragraph = (props: ParagraphProps) => {
  return (
    <AntParagraph
      style={{
        fontFamily: "Roboto",
      }}
      {...props}
    />
  );
};

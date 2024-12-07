import { COLORS } from "@/constants/colors";
import { Typography } from "antd";
import { ParagraphProps } from "antd/es/typography/Paragraph";

const { Paragraph: AntParagraph } = Typography;

export const Paragraph = (props: ParagraphProps) => {
  return <AntParagraph {...props} />;
};

import { COLORS } from "@/constants/colors";
import { Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";

const { Title: AntTitle } = Typography;

export const Title = (props: TitleProps) => {
  return <AntTitle {...props} />;
};

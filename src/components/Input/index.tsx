"use client";
import { COLORS } from "@/constants/colors";
import { Input as AntInput, ConfigProvider, InputProps } from "antd";

export const Input = (props: InputProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: COLORS.COOL_GRAY,
        },
      }}
    >
      {" "}
      <AntInput
        style={{
          fontFamily: "Roboto",
        }}
        {...props}
      />
    </ConfigProvider>
  );
};

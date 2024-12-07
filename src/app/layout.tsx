"use client";
import { COLORS } from "@/constants/colors";
import Snowfall from "react-snowfall";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AppHeader from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      style={{
        backgroundColor: COLORS.BACKGROUND,
      }}
    >
      <title>Jeromy's Portfolio</title>
      <meta
        name="description"
        content="Explore Jeromy's web development projects and skills."
      />
      <body>
        <AntdRegistry>
          <Snowfall
            style={{
              height: "100%",
              width: "100vw",
              zIndex: 1,
              position: "absolute",
            }}
            snowflakeCount={25}
          />

          <AppHeader />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}

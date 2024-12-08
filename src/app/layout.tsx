"use client";
import { COLORS } from "@/constants/colors";
import Snowfall from "react-snowfall";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AppHeader from "@/components/Header";
import { LeftSidePanel } from "@/components/LeftSidePanel";
import { RightSidePanel } from "@/components/RightSidePanel";
import { Onboarding } from "./Onboarding";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOnboarding, setIsOnboarding] = useState(true);
  return (
    <html
      suppressHydrationWarning
      lang="en"
      style={{
        backgroundColor: COLORS.BACKGROUND,
      }}
    >
      <head>
        <title>Jeromy's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Explore Jeromy's web development projects and skills."
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <AntdRegistry>
          {isOnboarding && (
            <Onboarding
              onClick={() => {
                setIsOnboarding(false);
              }}
            />
          )}
          {!isOnboarding && (
            <>
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
              <LeftSidePanel />
              {children}
              <RightSidePanel />
            </>
          )}
        </AntdRegistry>
      </body>
    </html>
  );
}

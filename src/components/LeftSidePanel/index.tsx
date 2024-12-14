import { Divider, Flex } from "antd";
import WhatsAppAnimation from "../../../public/lotties/whatsapp.json";
import FacebookAnimation from "../../../public/lotties/facebook.json";
import LinkedinAnimation from "../../../public/lotties/linkedin.json";
import GithubAnimation from "../../../public/lotties/github.json";
import InstagramAnimation from "../../../public/lotties/instagram.json";
import Lottie from "lottie-react";
import { COLORS } from "@/constants/colors";
import { motion } from "framer-motion";
import useDeviceScreen from "@/hooks/useDeviceScreen";

const FlexMotion = motion(Flex);

export const LeftSidePanel = () => {
  const { currentBreakpoint } = useDeviceScreen();
  const socialButtons: Array<{
    animation: any;
    href: string;
  }> = [
    {
      animation: WhatsAppAnimation,
      href: "https://api.whatsapp.com/send?phone=60127816203",
    },
    {
      animation: FacebookAnimation,
      href: "https://www.facebook.com/jeromy.kho/",
    },
    {
      animation: LinkedinAnimation,
      href: "https://www.linkedin.com/in/jeromy-kho-b06052212/",
    },
    {
      animation: GithubAnimation,
      href: "https://github.com/kasugasorata98",
    },
    {
      animation: InstagramAnimation,
      href: "https://www.instagram.com/jeromy_kho/?hl=en",
    },
  ];
  return (
    <FlexMotion
      initial={{
        y: "100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 6,
      }}
      vertical={true}
      gap={10}
      style={{
        display: currentBreakpoint.sm ? "none" : "flex",
        width: 45,
        position: "fixed",
        left: 0,
        bottom: 0,
        marginLeft: 20,
        alignItems: "center",
      }}
    >
      {socialButtons.map((socialButton) => {
        return (
          <Lottie
            onClick={() => {
              window.open(socialButton.href, "_blank");
            }}
            style={{
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            key={socialButton.href}
            animationData={socialButton.animation}
            loop={true}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          />
        );
      })}
      <Divider
        type="vertical"
        style={{
          height: 50,
          backgroundColor: COLORS.COOL_GRAY,
          width: 2,
        }}
      />
    </FlexMotion>
  );
};

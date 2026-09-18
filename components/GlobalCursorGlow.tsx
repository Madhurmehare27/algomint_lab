"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function GlobalCursorGlow() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 28,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    const updateDeviceType = () => {
      setIsTouchDevice(mediaQuery.matches);
    };

    updateDeviceType();

    mediaQuery.addEventListener("change", updateDeviceType);

    return () => {
      mediaQuery.removeEventListener("change", updateDeviceType);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [isTouchDevice, mouseX, mouseY]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Large soft spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.14) 0%, rgba(34,211,238,0.07) 25%, rgba(34,211,238,0.025) 48%, transparent 72%)",
          filter: "blur(8px)",
        }}
        transition={{
          opacity: {
            duration: 0.3,
          },
        }}
      />

      {/* Brighter cursor focus */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(34,211,238,0.12) 30%, transparent 72%)",
          filter: "blur(4px)",
        }}
        transition={{
          opacity: {
            duration: 0.2,
          },
        }}
      />

      {/* Small glowing pointer ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
          boxShadow:
            "0 0 20px rgba(34,211,238,0.65), inset 0 0 12px rgba(34,211,238,0.25)",
        }}
        transition={{
          opacity: {
            duration: 0.2,
          },
        }}
      />
    </>
  );
}
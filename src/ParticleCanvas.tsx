import React, { useEffect, useRef, ReactNode } from "react";
import ParticlesCanvas from "./particle-canvas";
import "./index.css";

interface ParticleCanvasProps {
  children?: ReactNode;
}

export default function ParticleCanvas({ children }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const particleCanvas = new ParticlesCanvas(canvasRef.current);
      particleCanvas.start();
    }
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      ></canvas>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

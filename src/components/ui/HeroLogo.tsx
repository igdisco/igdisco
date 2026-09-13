"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Pause, Play, Cloud, Infinity as InfinityIcon, Server, Settings2, ShieldCheck } from "lucide-react";
import styles from "../sections/Hero.module.css";

const pillars = [
  { letter: "D", name: "DevOps", Icon: InfinityIcon },
  { letter: "I", name: "Infrastructure", Icon: Server },
  { letter: "S", name: "Security", Icon: ShieldCheck },
  { letter: "C", name: "Cloud", Icon: Cloud },
  { letter: "O", name: "Operations", Icon: Settings2 },
];

export default function HeroLogo() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labels = useRef<(HTMLAnchorElement | null)[]>([]);
  const interacting = useRef({ hover: false, focus: false });
  const pointer = useRef({ x: 0, y: 0 });
  const rotationRef = useRef(0.3);
  const pitchRef = useRef(0);
  const redraw = useRef<(() => void) | null>(null);
  const drag = useRef({ id: -1, x: 0, y: 0, moved: false });
  const logoFocused = useRef(false);
  const hintId = useId();
  const [dragging, setDragging] = useState(false);
  const turn = (horizontal: number, vertical = 0) => {
    rotationRef.current += horizontal;
    pitchRef.current = Math.max(-1.1, Math.min(1.1, pitchRef.current + vertical));
    redraw.current?.();
  };
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const logo = new Image();
    logo.src = isDark ? "/assets/images/logo-dark.png" : "/assets/images/logo-light.png";
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let width = 0;
    let height = 0;
    let lastTime = 0;
    let visible = true;
    let tiltX = 0;
    let tiltY = 0;

    function render(time: number) {
      if (!ctx || !canvas) return;
      const delta = Math.min(time - lastTime, 40);
      lastTime = time;
      const animate = !paused && !motion.matches;
      let rotation = rotationRef.current;
      if (animate && drag.current.id === -1 && !logoFocused.current && !interacting.current.hover && !interacting.current.focus) rotation += delta * 0.00009;
      rotationRef.current = rotation;
      tiltX += ((animate ? pointer.current.x : 0) - tiltX) * 0.045;
      tiltY += ((animate ? pointer.current.y : 0) - tiltY) * 0.045;
      ctx.clearRect(0, 0, width, height);
      const radius = width * (width < 420 ? 0.22 : 0.255);
      const cx = width * 0.5;
      const cy = height * 0.46 + (animate ? Math.sin(rotation * 2) * 5 : 0);
      // The logo and service labels share the same rotation.
      const orbit = (front: boolean) => {
        ctx!.beginPath();
        for (let i = 0; i <= 160; i++) {
          const t = Math.PI * i / 160 + (front ? 0 : Math.PI);
          const x = Math.cos(t) * radius * 1.47;
          const y = Math.sin(t) * radius * 1.05;
          const px = cx + x * 0.93 - y * 0.37;
          const py = cy + x * 0.37 + y * 0.93;
          if (i === 0) ctx!.moveTo(px, py); else ctx!.lineTo(px, py);
        }
        ctx!.strokeStyle = isDark
          ? (front ? "rgba(176,165,255,.7)" : "rgba(131,146,232,.3)")
          : (front ? "rgba(113,91,186,.65)" : "rgba(100,127,197,.3)");
        ctx!.lineWidth = front ? 1.5 : 1;
        ctx!.shadowColor = "#9984d9";
        ctx!.shadowBlur = front ? 12 : 0;
        ctx!.stroke();
        ctx!.shadowBlur = 0;
      };
      orbit(false);
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.65, cx, cy, radius * 1.3);
      glow.addColorStop(0, "#667bff20");
      glow.addColorStop(1, "#667bff00");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      if (logo.complete && logo.naturalWidth > 0) {
        const yaw = rotation + tiltX * 0.25;
        const pitch = -0.12 + pitchRef.current + tiltY * 0.16;
        // A two-sided logo with a shallow extrusion. Flip the reverse face
        // so the company name remains readable through a full rotation.
        const face = Math.cos(yaw) >= 0 ? 1 : -1;
        const logoWidth = radius * 2.5;
        const logoHeight = logoWidth * logo.naturalHeight / logo.naturalWidth;
        for (let layer = 8; layer >= 0; layer--) {
          ctx.save();
          ctx.transform(
            face * Math.cos(yaw), face * Math.sin(yaw) * Math.sin(pitch),
            0, Math.cos(pitch),
            cx + Math.sin(yaw) * layer * face,
            cy - Math.sin(pitch) * Math.cos(yaw) * layer * face,
          );
          if (layer > 0) {
            ctx.filter = isDark ? "brightness(0.45)" : "brightness(0.65)";
          }
          ctx.drawImage(logo, -logoWidth / 2, -logoHeight / 2, logoWidth, logoHeight);
          ctx.restore();
        }
      }
      orbit(true);
      labels.current.forEach((label, index) => {
        if (!label) return;
        const angle = rotation * 0.65 + index * Math.PI * 2 / pillars.length;
        const depth = Math.sin(angle);
        const x = Math.cos(angle) * radius * 1.47;
        const y = depth * radius * 1.05;
        const scale = 0.9 + (depth + 1) * 0.07;
        label.style.transform = `translate(${cx + x * 0.93 - y * 0.37}px, ${cy + x * 0.37 + y * 0.93}px) translate(-50%, -50%) scale(${scale})`;
        label.style.zIndex = depth < 0 ? "0" : "2";
      });
      if (animate && visible && !document.hidden) frame = requestAnimationFrame(render);
    }
    const restart = () => {
      cancelAnimationFrame(frame);
      lastTime = performance.now();
      if (visible && !document.hidden) frame = requestAnimationFrame(render);
    };
    logo.onload = restart;
    redraw.current = restart;
    const resize = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width; height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      restart();
    });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
    resize.observe(canvas);
    observer.observe(canvas);
    motion.addEventListener("change", restart);
    document.addEventListener("visibilitychange", restart);
    return () => {
      cancelAnimationFrame(frame);
      logo.onload = null;
      redraw.current = null;
      resize.disconnect(); observer.disconnect();
      motion.removeEventListener("change", restart);
      document.removeEventListener("visibilitychange", restart);
    };
  }, [paused, isDark]);

  return (
    <div className={styles.scene} onPointerMove={(event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      pointer.current = { x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 };
    }} onPointerLeave={() => { pointer.current = { x: 0, y: 0 }; }}>
      <div className={styles.sceneGrid} aria-hidden="true" />
      <div className={styles.sceneTop}><span>THE D.I.S.C.O. EFFECT</span><span>01 — 05</span></div>
      <canvas ref={canvasRef} className={styles.canvas} role="img" aria-label="The IGDISCO company logo rotating in 3D, surrounded by five orbiting service labels" />
      <button type="button" className={styles.spinControl}
        aria-label="Spin company logo" aria-describedby={hintId}
        data-dragging={dragging}
        onFocus={() => { logoFocused.current = true; }}
        onBlur={() => { logoFocused.current = false; }}
        onPointerDown={event => {
          if (!event.isPrimary || event.button !== 0 || drag.current.id !== -1) return;
          drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false };
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
        }}
        onPointerMove={event => {
          if (drag.current.id !== event.pointerId) return;
          const dx = event.clientX - drag.current.x;
          const dy = event.clientY - drag.current.y;
          if (Math.abs(dx) + Math.abs(dy) > 2) drag.current.moved = true;
          const sensitivity = Math.PI * 2 / event.currentTarget.getBoundingClientRect().width;
          turn(dx * sensitivity, event.pointerType === "touch" ? 0 : dy * sensitivity * 0.5);
          drag.current.x = event.clientX;
          drag.current.y = event.clientY;
        }}
        onPointerUp={event => {
          if (drag.current.id !== event.pointerId) return;
          drag.current.id = -1;
          event.currentTarget.releasePointerCapture(event.pointerId);
          setDragging(false);
        }}
        onPointerCancel={() => { drag.current.id = -1; drag.current.moved = true; setDragging(false); }}
        onLostPointerCapture={() => { drag.current.id = -1; setDragging(false); }}
        onClick={event => { if (event.detail === 0 || !drag.current.moved) turn(Math.PI / 4); }}
        onKeyDown={event => {
          if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(event.key)) return;
          event.preventDefault();
          if (event.key === "Home") { rotationRef.current = 0.3; pitchRef.current = 0; redraw.current?.(); }
          else turn(event.key === "ArrowLeft" ? -0.2 : event.key === "ArrowRight" ? 0.2 : 0,
            event.key === "ArrowUp" ? -0.15 : event.key === "ArrowDown" ? 0.15 : 0);
        }}
      />
      <p id={hintId} className={styles.spinHint}>Drag the logo to spin <span>· Use arrow keys when focused</span></p>
      {pillars.map(({ letter, name, Icon }, index) => (
        <a key={letter} ref={element => { labels.current[index] = element; }}
          href="#services" className={styles.orbitLabel}
          onPointerEnter={() => { interacting.current.hover = true; }}
          onPointerLeave={() => { interacting.current.hover = false; }}
          onFocus={() => { interacting.current.focus = true; }}
          onBlur={() => { interacting.current.focus = false; }}>
          <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
          <span><small>{letter} / IGDISCO</small>{name}</span>
        </a>
      ))}
      <div className={styles.sceneBottom}>
        <span>Everything in sync.<br /><strong>You, switched off.</strong></span>
        <button className={styles.motionButton} onClick={() => setPaused(!paused)} aria-label={paused ? "Play animation" : "Pause animation"} aria-pressed={paused}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
    </div>
  );
}

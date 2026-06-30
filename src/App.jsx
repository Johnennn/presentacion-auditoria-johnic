import { useState, useEffect, useRef } from "react";
import "./App.css";

import Portada from "./slides/01_Portada";
import Empresa from "./slides/02_Empresa";
import Portal from "./slides/03_Portal";
import Objetivo from "./slides/04_Objetivo";
import Alcance from "./slides/05_Alcance";
import SQLiDesc from "./slides/06_SQLiDesc";
import SQLiEvidencia from "./slides/07_SQLiEvidencia";
import XSSDesc from "./slides/08_XSSDesc";
import XSSEvidencia from "./slides/09_XSSEvidencia";
import CmdDesc from "./slides/10_CmdDesc";
import CmdEvidencia from "./slides/11_CmdEvidencia";
import Activos from "./slides/12_Activos";
import Matriz from "./slides/13_Matriz";
import Controles from "./slides/14_Controles";
import Recuperacion from "./slides/15_Recuperacion";
import Cierre from "./slides/16_Cierre";

const SLIDES = [
  { component: Portada,       title: "Portada" },
  { component: Empresa,       title: "Empresa Auditada" },
  { component: Portal,        title: "Portal de Clientes" },
  { component: Objetivo,      title: "Objetivo" },
  { component: Alcance,       title: "Alcance" },
  { component: SQLiDesc,      title: "SQL Injection" },
  { component: SQLiEvidencia, title: "SQLi — Evidencia" },
  { component: XSSDesc,       title: "XSS Reflected" },
  { component: XSSEvidencia,  title: "XSS — Evidencia" },
  { component: CmdDesc,       title: "Command Injection" },
  { component: CmdEvidencia,  title: "Cmd — Evidencia" },
  { component: Activos,       title: "Activos & Riesgos" },
  { component: Matriz,        title: "Matriz de Riesgo" },
  { component: Controles,     title: "Controles ISO 27001" },
  { component: Recuperacion,  title: "Plan de Recuperacion" },
  { component: Cierre,        title: "Conclusiones" },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  // --- Swipe state ---
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const SWIPE_THRESHOLD = 50;

  function goNext() {
    setCurrent(function(c) { return c < total - 1 ? c + 1 : c; });
  }
  function goPrev() {
    setCurrent(function(c) { return c > 0 ? c - 1 : c; });
  }

  function handlePointerDown(e) {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
  }

  function handlePointerUp(e) {
    if (touchStartX.current === null) return;

    const dx = e.clientX - touchStartX.current;
    const dy = e.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) goNext();
    else goPrev();
  }

  useEffect(function() {
    function handler(e) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    }
    window.addEventListener("keydown", handler);
    return function() { window.removeEventListener("keydown", handler); };
  }, []);

  var SlideComponent = SLIDES[current].component;

  return (
    <div className="presentation">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: ((current + 1) / total * 100) + "%" }} />
      </div>

      <div
        className="slide-area"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        style={{ touchAction: "pan-y" }}
      >
        <SlideComponent />
      </div>

      <div className="controls" style={{ position: "relative", zIndex: 10 }}>
        <button
          type="button"
          className="ctrl-btn"
          onClick={goPrev}
          disabled={current === 0}
        >←</button>

        <div className="slide-counter">
          <span className="counter-current">{String(current + 1).padStart(2, "0")}</span>
          <span className="counter-sep"> / </span>
          <span className="counter-total">{String(total).padStart(2, "0")}</span>
          <span className="counter-title">{SLIDES[current].title}</span>
        </div>

        <button
          type="button"
          className="ctrl-btn"
          onClick={goNext}
          disabled={current === total - 1}
        >→</button>
      </div>

      <div className="dots" style={{ position: "relative", zIndex: 10 }}>
        {SLIDES.map(function(_, i) {
          return (
            <button
              key={i}
              type="button"
              className={"dot" + (i === current ? " dot--active" : "")}
              onClick={function() { setCurrent(i); }}
              title={SLIDES[i].title}
            />
          );
        })}
      </div>
    </div>
  );
}
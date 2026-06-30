import xssImg from "../img_johnic/xss_johnic.png";

export default function XSSEvidencia() {
  return (
    <div className="slide slide--content" style={{justifyContent:"center"}}>
      <span className="eyebrow">09 — EVIDENCIA</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>XSS Reflected — Resultado</h2>
      <div className="divider" style={{marginBottom:"20px"}} />
      <div className="screenshot-frame">
        <div className="screenshot-bar">xss_johnic.png — Script ejecutado en el navegador de la víctima</div>
        <img src={xssImg} alt="Evidencia XSS Reflected" />
      </div>
      <div style={{marginTop:"16px",display:"flex",gap:"16px",flexWrap:"wrap"}}>
        <div style={{background:"var(--red-light)",border:"1px solid var(--red-mid)",borderRadius:"6px",padding:"12px 18px",flex:1}}>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--red)",letterSpacing:"2px",marginBottom:"6px"}}>RESULTADO</p>
          <p style={{fontSize:"13px",color:"var(--carbon)"}}>El script fue reflejado en el HTML y ejecutado por el navegador, mostrando una alerta con el texto "johnen". Confirma ejecución arbitraria de código.</p>
        </div>
        <div style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"6px",padding:"12px 18px",flex:1}}>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)",letterSpacing:"2px",marginBottom:"6px"}}>MÓDULO DVWA</p>
          <p style={{fontSize:"13px",color:"var(--carbon)"}}>XSS (Reflected) · Nivel Low · URL manipulada con payload en parámetro name</p>
        </div>
      </div>
    </div>
  );
}

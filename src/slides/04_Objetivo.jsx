export default function Objetivo() {
  return (
    <div className="slide slide--cover" style={{background:"var(--white)",color:"var(--carbon)"}}>
      <div style={{maxWidth:"680px",textAlign:"center"}}>
        <span className="eyebrow" style={{marginBottom:"24px",display:"block"}}>04 — OBJETIVO</span>
        <h2 className="slide-title" style={{fontSize:"38px",marginBottom:"24px"}}>
          Objetivo de la Auditoría
        </h2>
        <div className="divider divider--center" />
        <p style={{fontSize:"17px",color:"var(--gray)",lineHeight:"1.8",marginBottom:"40px",maxWidth:"580px",margin:"0 auto 40px"}}>
          Identificar y documentar vulnerabilidades de seguridad presentes en el portal web mediante pruebas de penetración controladas sobre un entorno simulado, evaluando el nivel de exposición al riesgo y proponiendo controles de mitigación adecuados.
        </p>
        <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
          <span className="tag tag--red">DVWA — ENTORNO SIMULADO</span>
          <span className="tag tag--gray">NIVEL LOW</span>
          <span className="tag tag--gray">CAJA NEGRA PARCIAL</span>
          <span className="tag tag--gray">OWASP TOP 10</span>
        </div>
      </div>
    </div>
  );
}
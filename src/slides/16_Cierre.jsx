export default function Cierre() {
  const conclusiones = [
    { num:"01", texto:"Se identificaron 3 vulnerabilidades críticas: SQLi (9.8), Command Injection (10.0) y XSS Reflected (6.1), todas en nivel Low de DVWA." },
    { num:"02", texto:"Los activos más expuestos son la base de datos de clientes, los documentos notariales y el servidor web, con valoración máxima CID = 9." },
    { num:"03", texto:"El riesgo más crítico es R-01 (Score 12): acceso no autorizado a documentos mediante inyección SQL." },
    { num:"04", texto:"Se propusieron 24 controles de mitigación alineados con ISO/IEC 27001, priorizando prepared statements, output encoding y eliminación de shell_exec()." },
    { num:"05", texto:"El plan de recuperación establece RTO de 4 horas y RPO de 24 horas, con 5 fases claras y responsables definidos." },
  ];

  return (
    <div className="slide slide--cover" style={{background:"var(--carbon)"}}>
      <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.02) 39px,rgba(255,255,255,0.02) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.02) 39px,rgba(255,255,255,0.02) 40px)"}} />
      <div style={{position:"relative",zIndex:1,maxWidth:"780px",width:"100%",textAlign:"left"}}>
        <span className="eyebrow eyebrow--light" style={{marginBottom:"16px",display:"block"}}>16 — CONCLUSIONES</span>
        <h2 className="slide-title slide-title--light" style={{fontSize:"36px",marginBottom:"8px"}}>Resumen de la Auditoría</h2>
        <div className="divider" style={{marginBottom:"28px"}} />
        <div style={{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"36px"}}>
          {conclusiones.map(c => (
            <div key={c.num} style={{display:"flex",gap:"16px",alignItems:"flex-start",padding:"14px 18px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"6px"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"10px",color:"#C0001A",letterSpacing:"1px",width:"24px",flexShrink:0,paddingTop:"2px"}}>{c.num}</span>
              <p style={{fontSize:"13px",color:"rgba(255,255,255,0.75)",lineHeight:"1.6"}}>{c.texto}</p>
            </div>
          ))}
        </div>
        <div style={{width:"1px",height:"32px",background:"rgba(255,255,255,0.1)",margin:"0 0 24px"}} />
        <p style={{fontFamily:"var(--mono)",fontSize:"11px",color:"rgba(255,255,255,0.3)",letterSpacing:"2px"}}>NICOLÁS JOHNEN · INACAP · 2026</p>
      </div>
    </div>
  );
}
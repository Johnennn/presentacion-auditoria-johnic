export default function Portada() {
  return (
    <div className="slide slide--cover">
      <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.03) 39px,rgba(255,255,255,0.03) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.03) 39px,rgba(255,255,255,0.03) 40px)"}} />
      <div style={{position:"relative",zIndex:1,maxWidth:"700px"}}>
        <span className="eyebrow eyebrow--light" style={{marginBottom:"24px",display:"block"}}>INACAP · BASES DE DATOS NO ESTRUCTURADAS</span>
        <div style={{width:"56px",height:"3px",background:"#C0001A",borderRadius:"2px",margin:"0 auto 28px"}} />
        <h1 className="slide-title slide-title--light" style={{fontSize:"52px",marginBottom:"20px"}}>
          Auditoría de<br/>Seguridad Web
        </h1>
        <p style={{fontSize:"16px",color:"rgba(255,255,255,0.55)",marginBottom:"40px",lineHeight:"1.7"}}>
          Notaría Central Digital Servicios Legales<br/>
          Entorno simulado DVWA — Nivel de seguridad Low
        </p>
        <div style={{width:"1px",height:"40px",background:"rgba(255,255,255,0.15)",margin:"0 auto 32px"}} />
        <p style={{fontFamily:"var(--mono)",fontSize:"12px",color:"rgba(255,255,255,0.4)",letterSpacing:"2px"}}>NICOLÁS JOHNEN · 2026</p>
      </div>
    </div>
  );
}
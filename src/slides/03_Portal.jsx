export default function Portal() {
  return (
    <div className="slide slide--two-col">
      <div className="col-accent">
        <span className="eyebrow eyebrow--light">03 — PORTAL</span>
        <h2 className="slide-title slide-title--light slide-title--sm">Portal de Clientes</h2>
        <div className="divider divider--light" />
        <p style={{fontSize:"13px",color:"rgba(255,255,255,0.55)",lineHeight:"1.7"}}>
          Plataforma web principal de interacción entre clientes y la notaría.
        </p>
      </div>
      <div className="col-main">
        <span className="eyebrow">Funcionalidades principales</span>
        <div style={{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"28px"}}>
          {[
            {icon:"🔐", label:"Autenticación de usuarios con credenciales personales"},
            {icon:"📄", label:"Gestión y firma electrónica de documentos legales"},
            {icon:"🔍", label:"Consulta del estado de trámites en línea"},
            {icon:"📋", label:"Acceso al historial de operaciones notariales"},
          ].map((item, i) => (
            <div key={i} style={{display:"flex",gap:"14px",alignItems:"flex-start",padding:"14px",background:"var(--bg)",borderRadius:"6px",border:"1px solid var(--border)"}}>
              <span style={{fontSize:"20px"}}>{item.icon}</span>
              <span style={{fontSize:"14px",color:"var(--carbon)",lineHeight:"1.5"}}>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={{background:"var(--red-light)",border:"1px solid var(--red-mid)",borderRadius:"6px",padding:"14px 18px"}}>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--red)",letterSpacing:"2px",marginBottom:"6px"}}>DATOS SENSIBLES EN JUEGO</p>
          <p style={{fontSize:"13px",color:"var(--carbon)"}}>RUT · Datos de identidad · Documentos legales firmados · Información financiera · Certificados digitales</p>
        </div>
      </div>
    </div>
  );
}
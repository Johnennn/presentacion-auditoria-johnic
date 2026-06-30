import cmdImg from "../img_johnic/comandos_johnic.png";

export default function CmdEvidencia() {
  return (
    <div className="slide slide--content" style={{justifyContent:"center"}}>
      <span className="eyebrow">11 — EVIDENCIA</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>Command Injection — Resultado</h2>
      <div className="divider" style={{marginBottom:"20px"}} />
      <div className="screenshot-frame">
        <div className="screenshot-bar">comandos_johnic.png — Contenido de /etc/passwd expuesto desde el servidor</div>
        <img src={cmdImg} alt="Evidencia Command Injection" />
      </div>
      <div style={{marginTop:"16px",display:"flex",gap:"16px",flexWrap:"wrap"}}>
        <div style={{background:"var(--red-light)",border:"1px solid var(--red-mid)",borderRadius:"6px",padding:"12px 18px",flex:1}}>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--red)",letterSpacing:"2px",marginBottom:"6px"}}>RESULTADO</p>
          <p style={{fontSize:"13px",color:"var(--carbon)"}}>Se expuso el archivo /etc/passwd completo, revelando usuarios del sistema: root, daemon, mysql y otros, con acceso total al servidor.</p>
        </div>
        <div style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"6px",padding:"12px 18px",flex:1}}>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)",letterSpacing:"2px",marginBottom:"6px"}}>MÓDULO DVWA</p>
          <p style={{fontSize:"13px",color:"var(--carbon)"}}>Command Injection · Nivel Low · Separador ; para encadenar comandos OS</p>
        </div>
      </div>
    </div>
  );
}

import sqliImg from "../img_johnic/sqli_johnic.png";

export default function SQLiEvidencia() {
  return (
    <div className="slide slide--content" style={{justifyContent:"center"}}>
      <span className="eyebrow">07 — EVIDENCIA</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>SQL Injection — Resultado</h2>
      <div className="divider" style={{marginBottom:"20px"}} />
      <div className="screenshot-frame">
        <div className="screenshot-bar">sqli_johnic.png — Todos los registros expuestos sin credenciales</div>
        <img src={sqliImg} alt="Evidencia SQL Injection" />
      </div>
      <div style={{marginTop:"16px",display:"flex",gap:"16px",flexWrap:"wrap"}}>
        <div style={{background:"var(--red-light)",border:"1px solid var(--red-mid)",borderRadius:"6px",padding:"12px 18px",flex:1}}>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--red)",letterSpacing:"2px",marginBottom:"6px"}}>RESULTADO</p>
          <p style={{fontSize:"13px",color:"var(--carbon)"}}>Se obtuvieron 5 registros de usuarios: admin, Gordon Brown, Hack Me, Pablo Picasso y Bob Smith, sin credenciales válidas.</p>
        </div>
        <div style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"6px",padding:"12px 18px",flex:1}}>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)",letterSpacing:"2px",marginBottom:"6px"}}>MÓDULO DVWA</p>
          <p style={{fontSize:"13px",color:"var(--carbon)"}}>SQL Injection · Nivel Low · Usuario: admin</p>
        </div>
      </div>
    </div>
  );
}

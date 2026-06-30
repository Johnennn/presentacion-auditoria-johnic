export default function Alcance() {
  return (
    <div className="slide slide--content">
      <span className="eyebrow">05 — ALCANCE</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>Alcance de la Auditoría</h2>
      <div className="divider" />
      <div className="grid-3" style={{marginBottom:"24px"}}>
        {[
          { num:"01", vuln:"SQL Injection", modulo:"SQL Injection", payload:"' OR '1'='1", cvss:"9.8", nivel:"CRÍTICO", color:"#C0001A" },
          { num:"02", vuln:"XSS Reflected", modulo:"XSS (Reflected)", payload:"<script>alert('Johnen')</script>", cvss:"6.1", nivel:"MEDIO", color:"#b35c00" },
          { num:"03", vuln:"Command Injection", modulo:"Command Injection", payload:"127.0.0.1; cat /etc/passwd", cvss:"10.0", nivel:"CRÍTICO", color:"#C0001A" },
        ].map(a => (
          <div key={a.num} style={{background:"var(--bg)",border:"1px solid var(--border)",borderTop:`3px solid ${a.color}`,borderRadius:"6px",padding:"20px"}}>
            <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)",letterSpacing:"1px",marginBottom:"8px"}}>{a.modulo}</p>
            <p style={{fontWeight:600,fontSize:"15px",color:"var(--carbon)",marginBottom:"12px"}}>{a.vuln}</p>
            <code style={{fontFamily:"var(--mono)",fontSize:"10px",background:"var(--red-light)",color:"var(--red)",border:"1px solid var(--red-mid)",borderRadius:"3px",padding:"4px 8px",display:"block",marginBottom:"12px",wordBreak:"break-all"}}>{a.payload}</code>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"20px",fontWeight:"700",color:a.color}}>{a.cvss}</span>
              <span className={`nivel nivel--${a.cvss >= 9 ? "critical" : "medium"}`}>{a.nivel}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"6px",padding:"16px 20px"}}>
        <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)",letterSpacing:"2px",marginBottom:"8px"}}>FUERA DEL ALCANCE</p>
        <p style={{fontSize:"13px",color:"var(--gray)"}}>Infraestructura de red · Servidores de producción reales · APIs externas · Sistemas de terceros integrados al portal</p>
      </div>
    </div>
  );
}
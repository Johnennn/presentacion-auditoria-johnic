export default function Controles() {
  const controles = [
    { id:"C-01", tipo:"Preventivo",  vuln:"SQLi",  texto:"Consultas preparadas (Prepared Statements) — elimina posibilidad de alterar lógica SQL." },
    { id:"C-03", tipo:"Preventivo",  vuln:"SQLi",  texto:"Validación y sanitización de inputs — rechazar caracteres como \\', ;, --." },
    { id:"C-07", tipo:"Preventivo",  vuln:"XSS",   texto:"Output Encoding — convertir < > \" en entidades HTML antes de insertar en respuesta." },
    { id:"C-10", tipo:"Preventivo",  vuln:"XSS",   texto:"Cookies HttpOnly — impedir acceso a cookies de sesión desde JavaScript." },
    { id:"C-13", tipo:"Preventivo",  vuln:"CMD",   texto:"Eliminar shell_exec(), exec(), system() — nunca pasar input de usuario al sistema operativo." },
    { id:"C-14", tipo:"Preventivo",  vuln:"CMD",   texto:"Validación estricta de IP con regex — formato exacto x.x.x.x antes de procesar." },
    { id:"C-05", tipo:"Detectivo",   vuln:"TODOS", texto:"WAF (Web Application Firewall) — detectar y bloquear patrones de ataque conocidos." },
    { id:"C-24", tipo:"Detectivo",   vuln:"TODOS", texto:"Logging y auditoría centralizada — registrar todas las acciones con alertas automáticas." },
    { id:"C-22", tipo:"Correctivo",  vuln:"TODOS", texto:"Plan de respuesta a incidentes — contención, notificación y recuperación ante brechas." },
  ];

  const tipoCls = { Preventivo:"tag--red", Detectivo:"tag--gray", Correctivo:"tag--carbon" };
  const vulnColor = { SQLi:"#C0001A", XSS:"#b35c00", CMD:"#7a6500", TODOS:"var(--gray)" };

  return (
    <div className="slide slide--content">
      <span className="eyebrow">14 — CONTROLES</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>Controles de Mitigación — ISO/IEC 27001</h2>
      <div className="divider" style={{marginBottom:"16px"}} />
      <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
        {controles.map(c => (
          <div key={c.id} className="control-item">
            <span className="control-num">{c.id}</span>
            <div style={{flex:1}}>
              <div style={{display:"flex",gap:"8px",alignItems:"center",marginBottom:"4px"}}>
                <span className={`tag ${tipoCls[c.tipo]}`} style={{fontSize:"9px"}}>{c.tipo.toUpperCase()}</span>
                <span style={{fontFamily:"var(--mono)",fontSize:"10px",color:vulnColor[c.vuln],letterSpacing:"1px"}}>{c.vuln}</span>
              </div>
              <p className="control-text">{c.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
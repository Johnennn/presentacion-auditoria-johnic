export default function Recuperacion() {
  const fases = [
    { fase:"01", titulo:"Detección e Identificación", desc:"Monitorear alertas WAF/SIEM, clasificar el incidente y notificar al equipo de respuesta.", tiempo:"< 30 min" },
    { fase:"02", titulo:"Contención",                 desc:"Aislar el servidor comprometido, bloquear IPs sospechosas y preservar evidencia.", tiempo:"< 30 min" },
    { fase:"03", titulo:"Erradicación",               desc:"Eliminar el vector de ataque, aplicar parches y restablecer credenciales.", tiempo:"< 4 horas" },
    { fase:"04", titulo:"Recuperación",               desc:"Restaurar desde backup, verificar integridad y reactivar el portal.", tiempo:"< 2 horas" },
    { fase:"05", titulo:"Lecciones Aprendidas",       desc:"Documentar el incidente, analizar causa raíz y actualizar controles.", tiempo:"< 72 horas" },
  ];

  const mejoras = [
    "HTTPS con TLS 1.3", "WAF en producción", "2FA para clientes y funcionarios",
    "SIEM centralizado", "Escaneo automático con OWASP ZAP", "Gestión de secretos (vault)",
  ];

  return (
    <div className="slide slide--content">
      <span className="eyebrow">15 — RECUPERACIÓN</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>Plan de Recuperación (DR)</h2>
      <div className="divider" style={{marginBottom:"16px"}} />
      <div className="grid-2" style={{gap:"24px",alignItems:"start"}}>
        <div>
          <div style={{display:"flex",gap:"20px",marginBottom:"16px"}}>
            {[{label:"RTO",val:"4 horas"},{label:"RPO",val:"24 horas"}].map(m => (
              <div key={m.label} style={{background:"var(--red-light)",border:"1px solid var(--red-mid)",borderRadius:"6px",padding:"12px 18px",flex:1,textAlign:"center"}}>
                <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--red)",letterSpacing:"2px",marginBottom:"4px"}}>{m.label}</p>
                <p style={{fontFamily:"var(--mono)",fontSize:"20px",fontWeight:"700",color:"var(--red)"}}>{m.val}</p>
              </div>
            ))}
          </div>
          <div className="timeline">
            {fases.map(f => (
              <div key={f.fase} className="tl-item">
                <div className="tl-left">
                  <div className="tl-dot" />
                  <div className="tl-line" />
                </div>
                <div className="tl-right">
                  <p className="tl-phase">FASE {f.fase} · {f.tiempo}</p>
                  <p className="tl-title">{f.titulo}</p>
                  <p className="tl-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--red)",letterSpacing:"2px",marginBottom:"12px"}}>MEJORAS TECNOLÓGICAS PROPUESTAS</p>
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            {mejoras.map((m,i) => (
              <div key={i} style={{display:"flex",gap:"12px",alignItems:"center",padding:"10px 14px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"6px"}}>
                <div style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--red)",flexShrink:0}} />
                <span style={{fontSize:"13px",color:"var(--carbon)"}}>{m}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:"16px",background:"var(--bg)",border:"1px solid var(--border)",borderRadius:"6px",padding:"14px"}}>
            <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)",letterSpacing:"2px",marginBottom:"8px"}}>ESTRATEGIA DE BACKUP</p>
            <p style={{fontSize:"12px",color:"var(--carbon)",lineHeight:"1.6"}}>BD completa diaria · Documentos cada 6 hrs · Snapshot semanal del servidor · Código en Git por cada despliegue</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Activos() {
  const activos = [
    { id:"A-01", nombre:"Base de datos de clientes",          tipo:"Dato",            c:3,i:3,d:2 },
    { id:"A-02", nombre:"Documentos notariales digitales",     tipo:"Dato",            c:3,i:3,d:3 },
    { id:"A-03", nombre:"Credenciales de acceso al portal",    tipo:"Dato",            c:3,i:3,d:2 },
    { id:"A-05", nombre:"Certificados de firma electrónica",   tipo:"Dato",            c:3,i:3,d:3 },
    { id:"A-06", nombre:"Portal web de clientes",              tipo:"Sistema",         c:2,i:2,d:3 },
    { id:"A-07", nombre:"Servidor de base de datos",           tipo:"Infraestructura", c:3,i:3,d:3 },
    { id:"A-10", nombre:"Código fuente del portal",            tipo:"Software",        c:3,i:3,d:1 },
  ];

  return (
    <div className="slide slide--content">
      <span className="eyebrow">12 — ACTIVOS</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>Activos de Información</h2>
      <div className="divider" style={{marginBottom:"16px"}} />
      <table className="risk-table">
        <thead>
          <tr>
            <th>ID</th><th>Activo</th><th>Tipo</th>
            <th style={{textAlign:"center"}}>C</th>
            <th style={{textAlign:"center"}}>I</th>
            <th style={{textAlign:"center"}}>D</th>
            <th style={{textAlign:"center"}}>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {activos.map(a => (
            <tr key={a.id}>
              <td style={{fontFamily:"var(--mono)",color:"var(--red)",fontSize:"11px"}}>{a.id}</td>
              <td style={{fontWeight:500}}>{a.nombre}</td>
              <td><span className="tag tag--gray" style={{fontSize:"9px"}}>{a.tipo.toUpperCase()}</span></td>
              <td style={{textAlign:"center",fontFamily:"var(--mono)"}}>{a.c}</td>
              <td style={{textAlign:"center",fontFamily:"var(--mono)"}}>{a.i}</td>
              <td style={{textAlign:"center",fontFamily:"var(--mono)"}}>{a.d}</td>
              <td style={{textAlign:"center",fontFamily:"var(--mono)",fontWeight:700,color:"var(--red)"}}>{a.c+a.i+a.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)",marginTop:"12px",letterSpacing:"1px"}}>C = Confidencialidad · I = Integridad · D = Disponibilidad · Escala 1–3</p>
    </div>
  );
}
export default function Matriz() {
  const riesgos = [
    { id:"R-01", riesgo:"Acceso no autorizado a documentos mediante SQLi", prob:3, impacto:4, resultado:12, nivel:"critical" },
    { id:"R-02", riesgo:"Robo de sesión mediante XSS",                     prob:3, impacto:3, resultado:9,  nivel:"high" },
    { id:"R-03", riesgo:"Ejecución remota de comandos en el servidor",      prob:2, impacto:4, resultado:8,  nivel:"high" },
    { id:"R-04", riesgo:"Suplantación de identidad en trámites",            prob:2, impacto:4, resultado:8,  nivel:"high" },
    { id:"R-05", riesgo:"Filtración de datos personales",                   prob:3, impacto:3, resultado:9,  nivel:"high" },
    { id:"R-06", riesgo:"Alteración de documentos firmados",                prob:1, impacto:4, resultado:4,  nivel:"medium" },
    { id:"R-07", riesgo:"Indisponibilidad del portal",                      prob:2, impacto:3, resultado:6,  nivel:"medium" },
    { id:"R-08", riesgo:"Exposición del código fuente",                     prob:2, impacto:3, resultado:6,  nivel:"medium" },
  ];

  const getCell = (prob, imp) => riesgos.filter(r => r.prob === prob && r.impacto === imp);
  const getCls = (prob, imp) => {
    const s = prob * imp;
    if (s >= 10) return "hm-critical";
    if (s >= 7)  return "hm-high";
    if (s >= 4)  return "hm-medium";
    return "hm-empty";
  };

  return (
    <div className="slide slide--content">
      <span className="eyebrow">13 — MATRIZ</span>
      <h2 className="slide-title slide-title--sm" style={{marginBottom:"8px"}}>Matriz de Riesgo</h2>
      <div className="divider" style={{marginBottom:"16px"}} />
      <div className="grid-2" style={{gap:"24px",alignItems:"start"}}>
        <div>
          <table className="heatmap" style={{marginBottom:"12px"}}>
            <thead>
              <tr>
                <th style={{textAlign:"right"}}>Prob \ Imp</th>
                {["1—Bajo","2—Medio","3—Alto","4—Crítico"].map(l => <th key={l}>{l}</th>)}
              </tr>
            </thead>
            <tbody>
              {[3,2,1].map(prob => (
                <tr key={prob}>
                  <td className="hm-rowlabel">{prob === 3 ? "3—Alta" : prob === 2 ? "2—Media" : "1—Baja"}</td>
                  {[1,2,3,4].map(imp => {
                    const items = getCell(prob, imp);
                    return (
                      <td key={imp} className={items.length > 0 ? getCls(prob, imp) : "hm-empty"}>
                        {items.length > 0 ? items.map(r => r.id).join(", ") : "—"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            {[
              {cls:"hm-critical",label:"Crítico 10–12"},
              {cls:"hm-high",    label:"Alto 7–9"},
              {cls:"hm-medium",  label:"Medio 4–6"},
            ].map(l => (
              <div key={l.cls} style={{display:"flex",alignItems:"center",gap:"6px"}}>
                <div className={l.cls} style={{width:12,height:12,borderRadius:2,border:"1px solid"}} />
                <span style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--gray)"}}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          {[...riesgos].sort((a,b) => b.resultado - a.resultado).map(r => (
            <div key={r.id} style={{display:"flex",alignItems:"center",gap:"10px",padding:"7px 0",borderBottom:"1px solid var(--gray-light)"}}>
              <span style={{fontFamily:"var(--mono)",fontSize:"10px",color:"var(--red)",width:"32px",flexShrink:0}}>{r.id}</span>
              <span style={{flex:1,fontSize:"11px",color:"var(--carbon)"}}>{r.riesgo}</span>
              <div style={{width:"60px",flexShrink:0}}>
                <div style={{height:"4px",background:"var(--gray-light)",borderRadius:"2px"}}>
                  <div style={{width:`${(r.resultado/12)*100}%`,height:"100%",background:"var(--red)",borderRadius:"2px"}} />
                </div>
              </div>
              <span style={{fontFamily:"var(--mono)",fontSize:"12px",fontWeight:700,color:"var(--red)",width:"20px",flexShrink:0}}>{r.resultado}</span>
              <span className={`nivel nivel--${r.nivel}`} style={{fontSize:"9px",width:"56px",textAlign:"center"}}>{r.nivel === "critical" ? "CRÍTICO" : r.nivel === "high" ? "ALTO" : "MEDIO"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
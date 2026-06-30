export default function SQLiDesc() {
  return (
    <div className="slide slide--two-col">
      <div className="col-accent">
        <span className="eyebrow eyebrow--light">06 — VULNERABILIDAD</span>
        <h2 className="slide-title slide-title--light slide-title--sm">SQL Injection</h2>
        <div className="divider divider--light" />
        <div className="cvss-display" style={{background:"rgba(192,0,26,0.2)",border:"1px solid rgba(192,0,26,0.4)"}}>
          <span className="cvss-score" style={{color:"#ff6680"}}>9.8</span>
          <div className="cvss-info">
            <span className="cvss-level" style={{color:"#ff6680"}}>CRÍTICO</span>
            <span className="cvss-vector" style={{color:"rgba(255,255,255,0.4)"}}>AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H</span>
          </div>
        </div>
      </div>
      <div className="col-main">
        <div className="vuln-block">
          <span className="vuln-block__label">PAYLOAD UTILIZADO</span>
          <code className="code-pill">{"' OR '1'='1"}</code>
        </div>
        <div className="vuln-block">
          <span className="vuln-block__label">¿POR QUÉ OCURRE?</span>
          <p className="vuln-block__text">La aplicación construye la consulta SQL concatenando directamente el input del usuario sin sanitización. La condición <code style={{background:"var(--red-light)",color:"var(--red)",padding:"1px 5px",borderRadius:"2px",fontFamily:"var(--mono)",fontSize:"12px"}}>{"'1'='1'"}</code> siempre es verdadera, retornando todos los registros.</p>
          <code className="code-pill" style={{marginTop:"10px"}}>{"SELECT * FROM users WHERE user_id = '' OR '1'='1';"}</code>
        </div>
        <div className="vuln-block">
          <span className="vuln-block__label">DEFENSA</span>
          <p className="vuln-block__text">Prepared statements · ORM · Validación de inputs · Mínimo privilegio en BD · WAF</p>
        </div>
      </div>
    </div>
  );
}
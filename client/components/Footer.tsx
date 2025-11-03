const Footer: React.FC = () => {
  return (
    <section className="footer" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
      <div className="div-block-51">
        <div className="text-block-12">
          <strong>BrandTok</strong>
        </div>
      </div>
      <div className="container top-line">
        <div className="div-block-50">
          <div className="footer-copyright-center">
            © 2024 BrandTok. All rights reserved
          </div>
          <a href="/terms-conditions" className="footer-link">
            Terms & Conditions
          </a>
          <a href="/privacy-policy" className="footer-link">
            Privacy policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
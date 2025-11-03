import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="cta-section" style={{ 
      backgroundColor: '#030a17', 
      padding: '60px 24px', 
      textAlign: 'center' 
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Pre Heading */}
        <div style={{
          color: '#FF0000',
          fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          Transform Your Business
        </div>
        
        {/* Main Heading */}
        <h2 style={{
          color: '#fff',
          fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
          fontSize: '48px',
          fontWeight: 'bold',
          lineHeight: '1.2',
          marginBottom: '20px'
        }}>
          Stop Burning Cash On Ads That Don't Work
        </h2>
        
        {/* Content */}
        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '18px',
          lineHeight: '1.6',
          marginBottom: '40px',
          maxWidth: '700px',
          margin: '0 auto 40px auto'
        }}>
          There's a new way to get customers. One that actually works. One where every view turns into real business results. We've built a system that does all the heavy lifting for you. Let's transform your business together.
        </p>
        
        {/* CTA Button */}
        <a 
          href="#pricing"
          style={{
            background: 'linear-gradient(80deg, rgb(198 2 2), #ff0000)',
            borderRadius: '5px',
            padding: '14px 50px',
            fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'transform .2s',
            boxShadow: '0 0 12px #00000040'
          }}
          onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1)'}
        >
          Get Your Free Strategy Call
        </a>
      </div>
    </section>
  );
};

export default CTA;
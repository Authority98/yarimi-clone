import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, PlayCircle, Shield, Star, Trophy } from "lucide-react";
import Timeline from "@/components/Timeline";
import Curriculum from "@/components/Curriculum";
import Pricing from "@/components/Pricing";
import StudentsWins from "@/components/StudentsWins";
import SuccessStories from "@/components/SuccessStories";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer.tsx";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // Dynamically load Wistia scripts for proper React integration
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/ct3jnmk4vx.jsonp';
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    
    return () => {
      // Clean up scripts when component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="bg-[radial-gradient(80%_60%_at_50%_0%,rgba(37,99,235,0.18),transparent),radial-gradient(40%_30%_at_80%_10%,rgba(6,182,212,0.18),transparent)]">
      {/* HERO */}
      <section className="hero-glow border-b border-white/5 relative" style={{backgroundColor: '#030a17'}}>
        <div className="blur-shape"></div>
        <div className="hero-background"></div>
        <div className="container" style={{paddingLeft: '24px', paddingRight: '24px', paddingTop: '86px', paddingBottom: '72px'}}>
          <div className="grid items-center hero-grid" style={{gridTemplateColumns: '58% 42%', gap: '0rem'}}>
            {/* Hero Content */}
            <div className="hero-content text-left" style={{position: 'relative', zIndex: 10}}>
              <div className="hero-badge mx-0 inline-flex items-center gap-2 rounded-full px-6 py-2 overflow-hidden relative bg-[#00408C] max-w-[280px]" style={{border: '1px solid #70b1ff'}}>
                <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[#00408C] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#00408C] to-transparent z-10 pointer-events-none"></div>
                <div className="animate-marquee-continuous whitespace-nowrap flex" style={{color: '#fff', fontFamily: 'Montserrat-Bold, Montserrat, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '20px'}}>
                  <span>ORGANIC GROWTH - VIRAL RESULTS - REVENUE SYSTEM -CONTENT POWERHOUSE</span>
                </div>
              </div>
              <h1 className="hero-title leading-tight" style={{fontFamily: 'Montserrat-Bold, Montserrat, sans-serif', fontSize: '58px', fontWeight: 'extrabold', marginTop: '15px', lineHeight: '65px'}}>
                There Is A <span style={{background: 'linear-gradient(80deg, var(--blue), var(--light-blue) 90%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>"New Way"</span> To Predictably Get Viral Customers
              </h1>
              <p style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '18px', lineHeight: '28px', color: 'rgba(255, 255, 255, 0.8)', marginTop: '20px', marginBottom: '30px', maxWidth: '90%'}}>
                Get more views and new customers than you could possibly handle — without using paid ads. We do all the heavy lifting for you. Let us build your viral organic customer acquisition system and watch your business scale like never before.
              </p>
              <div className="hero-button-container flex flex-col items-start justify-start gap-4" style={{marginTop: '14px'}}>
                <a 
                  href="#pricing"
                  className="hero-cta-button"
                  style={{
                    backgroundImage: 'linear-gradient(80deg, #70b1ff, #0074ff)',
                    borderRadius: '5px',
                    marginBottom: '0',
                    padding: '14px 70px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1)'}
                >
                  Get Started Today
                </a>
              </div>
              <div className="hero-stats flex items-center gap-3" style={{marginTop: '20px', opacity: '0.8'}}>
                <img 
                  src="/Traders Enrolled.png" 
                  alt="Businesses Transformed" 
                  style={{width: '74px', height: 'auto'}}
                />
                <div className="flex items-center gap-1">
                  <span style={{
                    fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#ffffff'
                  }}>
                    1000+
                  </span>
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#b7b7b7'
                  }}>
                    Businesses Transformed
                  </span>
                </div>
              </div>
            </div>
            {/* Hero Image */}
            <div className="hero-image relative flex justify-end" style={{position: 'relative', zIndex: 10}}>
              <img
                src="/hero-image.png"
                alt="Forex Trading Hero"
                style={{width: '550px', height: 'auto'}}
                className="rounded-2xl"
              />
            </div>
          </div>
          
          {/* FEATURES ROW */}
          <div className="mt-20" style={{position: 'relative', zIndex: 10, marginTop: '85px'}}>
            <div className="footer-divider change2 change3"></div>
            <div className="flex items-center justify-center" style={{gap: '55px'}}>
              <div className="flex items-center gap-3">
                <img src="/Instant Access.png" alt="Custom Viral Strategy" style={{width: '24px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>CUSTOM VIRAL STRATEGY</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Forex Eaducation.png" alt="Organic Growth" style={{width: '30px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>ORGANIC GROWTH</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Community.png" alt="Expert Team Access" style={{width: '30px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>EXPERT TEAM ACCESS</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Secure Payment.png" alt="Revenue Conversion" style={{width: '21px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>REVENUE CONVERSION</span>
              </div>
            </div>
            <div className="footer-divider change2 change3"></div>
          </div>
        </div>
      </section>

      {/* VIDEO TRAINING SECTION */}
      <section id="training" className="video-training-section relative" style={{backgroundColor: '#030a17', paddingLeft: '76px', paddingRight: '76px', paddingTop: '0px', paddingBottom: '72px'}}>
        {/* Arrow positioned at top of white container */}
        <div className="arrow-hero">
          <div className="div-block-35">
            <img src="/Arrow 1.png" loading="lazy" alt="" className="image-25" />
          </div>
        </div>
        
        <div className="relative" style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '20px',
          padding: '40px 28px',
          width: '100%',
          paddingTop: '80px' // Extra space for arrow
        }}>
          {/* Heading */}
          <h1 className="video-training-heading text-center" style={{
            fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#000',
            lineHeight: '44px',
            fontStyle: 'italic',
            marginBottom: '65px'
          }}>
            <strong>BrandTok Presents...</strong>
          </h1>
          
          {/* Video Container */}
          <div className="relative" style={{
            maxWidth: '920px',
            margin: '0 auto 32px auto',
            borderRadius: '13px',
            overflow: 'hidden'
          }}>
            {/* Wistia Video Embed - Using useEffect for proper React integration */}
            <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
              <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
                <div className="wistia_embed wistia_async_ct3jnmk4vx seo=false videoFoam=true" style={{height: '100%', position: 'relative', width: '100%'}}>
                  <div className="wistia_swatch" style={{height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%'}}>
                    <img src="https://fast.wistia.com/embed/medias/ct3jnmk4vx/swatch" style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}} alt="" aria-hidden="true" onLoad={(e) => (e.target as HTMLImageElement).parentElement!.style.opacity = '1'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          {/* Offer text */}
          <div className="text-center">
            <h2 className="video-training-offer" style={{
              fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#000',
              fontStyle: 'italic',
              lineHeight: '44px',
              marginBottom: '50px',
              textAlign: 'center'
            }}>
              <strong>Stop Burning Cash On Ads That Don't Work</strong>
            </h2>
            
            {/* Enroll button */}
            <a 
              href="#pricing"
              className="video-training-button"
              style={{
                backgroundImage: 'linear-gradient(80deg, #70b1ff, #0074ff)',
                borderRadius: '5px',
                padding: '14px 50px',
                fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
                fontSize: '18px',
                fontWeight: '600',
                lineHeight: '20px',
                color: 'white',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'transform .2s',
                boxShadow: '0 0 12px #00000040',
                marginBottom: '40px'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1)'}
            >
              Get Your Free Strategy Call
            </a>
            
            {/* Businesses transformed */}
            <div className="flex items-center justify-center gap-2">
              <img 
                src="/Traders Enrolled.png" 
                alt="Businesses Transformed" 
                style={{width: '74px', height: 'auto'}}
              />
              <div className="flex items-center gap-1">
                <span style={{
                  fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#000',
                  lineHeight: '20px'
                }}>
                  1000+
                </span>
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#030a17',
                  lineHeight: '20px'
                }}>
                  Businesses Transformed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - What is BrandTok */}
      <section className="w-full" style={{ padding: '65px 24px 60px', backgroundColor: '#030a17' }}>
        <div className="mx-auto text-center" style={{ maxWidth: '920px' }}>
          {/* Pre-heading */}
          <p 
            className="font-montserrat uppercase"
            style={{
              backgroundImage: 'linear-gradient(80deg, var(--blue), var(--light-blue))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
              fontSize: '16px',
              lineHeight: '20px',
              marginBottom: '24px'
            }}
          >
            HERE'S WHAT AWAITS YOU...
          </p>
          
          {/* Main Heading */}
          <h2 
            className="main-heading font-montserrat font-bold"
            style={{
              color: '#fff',
              textAlign: 'center',
              WebkitTextStrokeColor: '#fff',
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(#fff, #999)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              fontSize: '48px',
              lineHeight: '55px',
              marginBottom: '40px',
              fontWeight: '700',
              display: 'block',
              width: '100%'
            }}
          >
            What Is BrandTok?
          </h2>
          
          {/* Body Text */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p 
              className="font-montserrat"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              BrandTok is a viral content creation powerhouse. We're not a typical marketing agency. We're a partner for scaling business builders who are tired of burning cash on ads that don't work.
            </p>
            
            <p 
              className="font-montserrat"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              We understand your pain. You've tried Facebook ads. You've tried Google ads. You've probably tried other marketing companies too. And it didn't work to the level you wanted. You were burning your hard-earned cash with no ROI.
            </p>
            
            <p 
              className="font-montserrat"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontStyle: 'normal',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                lineHeight: '24px'
              }}
            >
              Times are changing. There's a new way to get customers — through organic viral content. We've built a system that delivers predictable, organic growth through strategic content creation on TikTok and Instagram. Our clients consistently see 20-30% revenue increases, fresh customer acquisition, and unprecedented reach. All without paid ads. We do all the heavy lifting for you.
            </p>
          </div>
          
          {/* Course Modules Visual */}
          <div className="mt-16 flex justify-center">
            <img 
              src="/Course Module.png" 
              alt="Course Modules" 
              className="h-auto"
              style={{ width: '812px' }}
            />
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION - What's Included */}
      <Timeline />

      {/* CURRICULUM SECTION */}
      <Curriculum />

      {/* PRICING SECTION */}
      <Pricing />

      {/* STUDENTS WINS */}
      <StudentsWins />

      {/* SUCCESS STORIES */}
      <SuccessStories />

      {/* FAQ */}
      <FAQ />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
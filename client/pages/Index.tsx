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

export default function Index() {
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
                  <span>OPPORTUNITY - KNOWLEDGE - NETWORK - OPPORTUNITY - KNOWLEDGE - NETWORK - </span>
                </div>
              </div>
              <h1 className="hero-title leading-tight" style={{fontFamily: 'Montserrat-Bold, Montserrat, sans-serif', fontSize: '58px', fontWeight: 'extrabold', marginTop: '15px', lineHeight: '65px'}}>
                The <span style={{background: 'linear-gradient(80deg, var(--blue), var(--light-blue) 90%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent'}}>#1 Place</span> To Learn
                <br />
                Forex Trading
              </h1>
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
                  Enroll Now
                </a>
              </div>
              <div className="hero-stats flex items-center gap-3" style={{marginTop: '20px', opacity: '0.8'}}>
                <img 
                  src="/Traders Enrolled.png" 
                  alt="Traders Enrolled" 
                  style={{width: '74px', height: 'auto'}}
                />
                <div className="flex items-center gap-1">
                  <span style={{
                    fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#ffffff'
                  }}>
                    12,173+
                  </span>
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#b7b7b7'
                  }}>
                    Traders Enrolled
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
                <img src="/Instant Access.png" alt="Instant Access" style={{width: '24px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>INSTANT ACCESS</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Forex Eaducation.png" alt="Forex Education" style={{width: '30px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>FOREX EDUCATION</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Community.png" alt="Community" style={{width: '30px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>COMMUNITY</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/Secure Payment.png" alt="Secure Payment" style={{width: '21px', height: 'auto'}} />
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>SECURE PAYMENT</span>
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
            <strong>Yarimi University Presents...</strong>
          </h1>
          
          {/* Video Container */}
          <div className="relative" style={{
            maxWidth: '920px',
            margin: '0 auto 32px auto'
          }}>
            {/* Wistia Video Embed - Using iframe method */}
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden'
            }}>
              <iframe 
                src="https://fast.wistia.net/embed/iframe/xhd7zekxtp?videoFoam=true" 
                title="Yarimi University Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '14px'
                }}
              />
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
              <strong>Limited Time Offer: £99 One Time</strong>
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
              Enroll Now
            </a>
            
            {/* Traders enrolled */}
            <div className="flex items-center justify-center gap-2">
              <img 
                src="/Traders Enrolled.png" 
                alt="Traders Enrolled" 
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
                  12,173+
                </span>
                <span style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#030a17',
                  lineHeight: '20px'
                }}>
                  Traders Enrolled
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - What is Yarimi University */}
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
            What is Yarimi University ?
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
              Yarimi University is a forex educational program made by traders, for traders.
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
              It consists of step-by-step training covering EVERY aspect of getting started with forex trading, successful strategies, and how to actually become profitable. You'll be taken from knowing nothing..."zero" to everything..."hero".
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
              Yarimi University has everything covered for you. We even have complementary bonuses, such as FREE quarterly live events where you can meet Yarimi in person, gifted-funded accounts to top performing students, and much much more!
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

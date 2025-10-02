import { Menu } from "lucide-react";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md" style={{backgroundColor: '#030A17', border: '1px solid #70b1ff40'}}>
      <div className="container flex h-16 items-center justify-between" style={{paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px'}}>
        <a href="#top" className="flex items-center gap-2">
          <img src="/Logo.png" alt="Yarimi University Logo" style={{width: '150px'}} />
        </a>
        <nav className="hidden items-center md:flex" style={{gap: '0'}}>
          <a 
            href="#training" 
            className="transition-all duration-200 hover:bg-[#1D232F]" 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
              letterSpacing: '0.25px'
            }}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#70b1ff'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
          >
            Training
          </a>
          <a 
            href="#included" 
            className="transition-all duration-200 hover:bg-[#1D232F]" 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
              letterSpacing: '0.25px'
            }}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#70b1ff'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
          >
            What's Included
          </a>
          <a 
            href="#curriculum" 
            className="transition-all duration-200 hover:bg-[#1D232F]" 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
              letterSpacing: '0.25px'
            }}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#70b1ff'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
          >
            Curriculum
          </a>
          <a 
            href="#Testimonials" 
            className="transition-all duration-200 hover:bg-[#1D232F]" 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
              letterSpacing: '0.25px'
            }}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#70b1ff'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="transition-all duration-200 hover:bg-[#1D232F]" 
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'white',
              padding: '10px',
              borderRadius: '4px',
              letterSpacing: '0.25px'
            }}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#70b1ff'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = 'white'}
          >
            FAQ
          </a>
        </nav>
        <div className="hidden md:block">
          <a 
            href="#pricing"
            style={{
              background: 'linear-gradient(80deg, #70b1ff, #0074ff)',
              padding: '12px 40px',
              borderRadius: '5px',
              fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
              fontWeight: 'bold',
              color: 'rgb(255, 255, 255)',
              fontSize: '12px',
              lineHeight: '20px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1)'}
          >
            <strong>Log In</strong>
          </a>
        </div>
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <Menu className="size-6" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 md:hidden">
          <nav className="container grid gap-2 py-4">
            <a href="#training" className="text-sm text-muted-foreground hover:text-foreground">Training</a>
            <a href="#included" className="text-sm text-muted-foreground hover:text-foreground">What's Included</a>
            <a href="#curriculum" className="text-sm text-muted-foreground hover:text-foreground">Curriculum</a>
            <a href="#Testimonials" className="text-sm text-muted-foreground hover:text-foreground">Testimonials</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a>
            <a 
              href="#pricing"
              className="mt-2"
              style={{
                background: 'linear-gradient(80deg, #70b1ff, #0074ff)',
                padding: '12px 40px',
                borderRadius: '5px',
                fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
                fontWeight: 'bold',
                color: 'rgb(255, 255, 255)',
                fontSize: '12px',
                lineHeight: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.transform = 'scale(1)'}
            >
              <strong>Log In</strong>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
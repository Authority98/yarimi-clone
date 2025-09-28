import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, PlayCircle, Shield, Star, Trophy } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-[radial-gradient(80%_60%_at_50%_0%,rgba(37,99,235,0.18),transparent),radial-gradient(40%_30%_at_80%_10%,rgba(6,182,212,0.18),transparent)]">
      {/* HERO */}
      <section className="hero-glow border-b border-white/5">
        <div className="container pt-16 pb-20" style={{paddingLeft: '24px', paddingRight: '24px'}}>
          <div className="grid items-center" style={{gridTemplateColumns: '65% 35%', gap: '0rem'}}>
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 rounded-full border px-6 py-2 overflow-hidden relative bg-[#00408C] border-[#70B2FF] max-w-[280px]">
                <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-[#00408C] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-[#00408C] to-transparent z-10 pointer-events-none"></div>
                <div className="animate-marquee-continuous whitespace-nowrap flex" style={{color: '#fff', fontFamily: 'Montserrat-Bold, Montserrat, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '20px'}}>
                  <span>OPPORTUNITY - KNOWLEDGE - NETWORK - OPPORTUNITY - KNOWLEDGE - NETWORK - </span>
                </div>
              </div>
              <h1 className="mt-6 leading-tight" style={{fontFamily: 'Montserrat-Bold, Montserrat, sans-serif', fontSize: '58px', fontWeight: 'extrabold'}}>
                The <span className="gradient-text">#1 Place</span> To Learn
                <br />
                Forex Trading
              </h1>
              <div className="mt-8 flex flex-col items-center lg:items-start justify-center lg:justify-start gap-4 sm:flex-row">
                <a 
                  href="#pricing"
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
                >
                  Enroll Now
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3">
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
            <div className="relative flex justify-end">
              <img
                src="/hero-image.png"
                alt="Forex Trading Hero"
                style={{width: '550px', height: 'auto'}}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTS / VIDEO */}
      <section className="border-b border-white/5 bg-card">
        <div className="container grid gap-6 py-12 md:grid-cols-[1fr_420px] md:gap-10">
          <div>
            <p className="text-sm text-muted-foreground">Yarimi University Presents…</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Limited-Time Offer: One-Time Fee</h2>
            <p className="mt-3 max-w-[60ch] text-sm text-muted-foreground">
              Join a structured program that takes you from foundations to
              advanced execution with live mentorship, community support, and
              funding pathways.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <a href="#pricing">Get Access</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#faq">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/40 to-slate-800/40 p-2 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1640340434856-06f3450974b6?q=80&w=1440&auto=format&fit=crop"
                alt="Program preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-white/5">
        <div className="container py-14">
          <h2 className="text-center text-3xl font-bold md:text-4xl">What is Yarimi University?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            A comprehensive program covering psychology, fundamentals, technical
            execution, risk management, and proprietary strategies—everything
            you need to become a consistently profitable trader.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Star className="size-5" />, title: "Proven System",
                desc:
                  "Structured, beginner‑to‑advanced roadmap with clear milestones.",
              },
              {
                icon: <Trophy className="size-5" />, title: "Funding Path",
                desc:
                  "Guidance to pass funded trader evaluations and scale capital.",
              },
              {
                icon: <Shield className="size-5" />, title: "Mentorship",
                desc:
                  "Live calls, community, and feedback to keep you accountable.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="card-gradient rounded-xl p-6 shadow-xl transition hover:shadow-2xl"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" className="border-b border-white/5 bg-card/40">
        <div className="container py-14">
          <h2 className="text-center text-3xl font-bold md:text-4xl">What’s Included</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Complete video curriculum",
              "Weekly live mentorship",
              "Trading psychology training",
              "Backtesting framework",
              "Strategy execution checklists",
              "Private members community",
            ].map((item, i) => (
              <div key={i} className="card-gradient rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-primary" />
                  <p className="text-sm text-foreground/90">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="border-b border-white/5">
        <div className="container py-14">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Yarimi University Curriculum</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4">
            {[
              "Introduction & Orientation",
              "Psychology & Mindset",
              "Trading Fundamentals",
              "In-Depth Forex Execution",
              "In-Person Workshops & Events",
              "Funded Trader Path & Scaling",
              "Over 90 Hours of Recorded Calls",
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-secondary/40 p-4 hover:bg-secondary/60"
              >
                <div className="flex items-center gap-4">
                  <div className="size-12 overflow-hidden rounded-lg border border-white/10">
                    <img
                      src={`https://images.unsplash.com/photo-15${80 + i}-placeholder?q=80&w=300&auto=format&fit=crop`}
                      alt="lesson"
                      className="h-full w-full object-cover"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=300&auto=format&fit=crop")
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Module {i + 1}</p>
                    <h3 className="text-base font-semibold">{t}</h3>
                  </div>
                </div>
                <Button variant="outline" className="hidden sm:inline-flex">
                  View
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-b border-white/5 bg-card">
        <div className="container py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-b from-secondary/60 to-secondary/30 p-8 text-center shadow-2xl">
            <p className="text-sm text-muted-foreground">Start Your Journey As A Forex Trader</p>
            <h3 className="mt-2 text-4xl font-extrabold tracking-tight">£99</h3>
            <p className="mt-1 text-xs text-muted-foreground">one-time access</p>
            <div className="mt-6 grid gap-2 text-sm text-foreground/90">
              <p>Full curriculum access</p>
              <p>Live mentorship</p>
              <p>Community + accountability</p>
            </div>
            <Button size="lg" className="mt-8 w-full sm:w-auto px-10">Enroll Now</Button>
          </div>
        </div>
      </section>

      {/* STUDENTS WINS */}
      <section id="wins" className="border-b border-white/5">
        <div className="container py-14">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Students Wins</h2>
          <div className="mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <img
                  key={i}
                  className="h-36 w-auto rounded-lg border border-white/10 object-cover"
                  src={`https://picsum.photos/seed/win${i}/480/300`}
                  alt={`win-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="stories" className="border-b border-white/5 bg-card/40">
        <div className="container py-14">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Success Stories</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-secondary/40 p-3">
                <div className="aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={`https://picsum.photos/seed/story${i}/600/800`}
                    alt="student success"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-3 px-1">
                  <p className="text-sm font-semibold">From beginner to funded</p>
                  <p className="text-xs text-muted-foreground">Real results from real students</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="">
        <div className="container py-16">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-white/10 bg-secondary/40 p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who is this for?</AccordionTrigger>
                <AccordionContent>
                  Beginners and experienced traders who want a structured path,
                  live mentorship, and a supportive community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long do I have access?</AccordionTrigger>
                <AccordionContent>
                  Lifetime access to all lessons, updates, and recordings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you help with funded accounts?</AccordionTrigger>
                <AccordionContent>
                  Yes. We provide training and guidance to pass evaluations and
                  scale responsibly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is there a community?</AccordionTrigger>
                <AccordionContent>
                  Yes, join our private members area with accountability and
                  support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                <AccordionContent>
                  Due to the digital nature, all sales are final. Reach out to
                  support with any questions before enrolling.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "A - Z Detailed Forex Education",
    description: "The YU program is designed to teach you the strategies and fundamentals to become a profitable trader.",
    image: "/Timeline image 1.png",
    icon: "/Forex Eaducation.png"
  },
  {
    id: 2,
    title: "Community Of Like-Minded People",
    description: "Not only are you receiving the program, but also the YU community. Where you can network with other students and get your questions answered.",
    image: "/Timeline image 2.png",
    icon: "/Community.png"
  },
  {
    id: 3,
    title: "Access To Free Quarterly Events",
    description: "We like to give back to our students as much as we can. That's why we decide to host quarterly events that anyone inside Yarimi University can attend for FREE.",
    image: "/Timeline image 3.png",
    icon: "/Instant Access.png"
  },
  {
    id: 4,
    title: "Bonus #1: Trading Psychology Course",
    description: "Master the mental game of trading with our comprehensive psychology course designed to help you overcome emotional barriers.",
    image: "/Bonus #1.png",
    icon: "/Timeline Mark.png"
  },
  {
    id: 5,
    title: "Bonus #2: Advanced Risk Management",
    description: "Learn advanced risk management techniques to protect your capital and maximize your trading potential.",
    image: "/Bonus #2.png",
    icon: "/Timeline Mark.png"
  },
  {
    id: 6,
    title: "Bonus #3: Live Trading Sessions",
    description: "Join exclusive live trading sessions where you can watch real-time market analysis and decision-making processes.",
    image: "/Bonus #3.jpg",
    icon: "/Timeline Mark.png"
  }
];

export default function Timeline() {
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const [progressActive, setProgressActive] = useState(false);
  const [movingMarkerActive, setMovingMarkerActive] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      const timelineTop = scrollTop + timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Check if timeline section is in view
      const sectionStart = timelineTop - windowHeight * 0.8;
      const sectionEnd = timelineTop + timelineHeight + windowHeight * 0.2;
      const isInSection = scrollTop >= sectionStart && scrollTop <= sectionEnd;
      
      setProgressActive(isInSection);
      setMovingMarkerActive(isInSection);

      // Check which items should be active
      const newActiveItems = new Set<number>();
      
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const itemRect = ref.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const threshold = windowHeight * 0.7;
        
        if (itemCenter < threshold && isInSection) {
          newActiveItems.add(index);
        }
      });

      setActiveItems(newActiveItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="timeline-section">
      <div className="timeline-container" ref={timelineRef}>
        {/* Timeline Progress Line */}
        <div className="timeline_progress-2">
          <div 
            className={`timeline_progress-bar-2 ${progressActive ? 'active' : ''}`}
          />
        </div>

        {/* Moving Timeline Marker */}
        <div className={`timeline-moving-marker ${movingMarkerActive ? 'active' : ''}`}>
          <img src="/Timeline Mark.png" alt="Timeline Marker" />
        </div>

        {/* Section Title */}
        <div className="timeline-title">
          <p>YOUR ROADMAP TO SUCCESS...</p>
          <h2>What's Included</h2>
        </div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`timeline-item ${activeItems.has(index) ? 'active' : ''}`}
          >
            <div className={`timeline-content ${index % 2 === 1 ? 'reverse' : ''}`}>
              {/* Timeline Image */}
              <div className="timeline-image">
                <img src={item.image} alt={item.title} />
              </div>

              {/* Timeline Text Content */}
              <div className="timeline-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              {/* Timeline Icon */}
              <div className="timeline-icon">
                <img src={item.icon} alt="Timeline Icon" />
              </div>
            </div>

            {/* Timeline Marker */}
            <div className="timeline-marker">
              <img src="/Timeline Mark.png" alt="Timeline Marker" />
            </div>
          </div>
        ))}

        {/* Enroll Button */}
        <div className="text-center mt-20">
          <a 
            href="#pricing"
            style={{
              backgroundImage: 'linear-gradient(80deg, #70b1ff, #0074ff)',
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
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
}
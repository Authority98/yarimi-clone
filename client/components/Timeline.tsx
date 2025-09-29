import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "A - Z Detailed Forex Education",
    description: "The YU program is designed to teach you the strategies and fundamentals to become a profitable trader.",
    image: "/Timeline image 1.png"
  },
  {
    id: 2,
    title: "Community Of Like-Minded People",
    description: "Not only are you receiving the program, but also the YU community. Where you can network with other students and get your questions answered.",
    image: "/Timeline image 2.png"
  },
  {
    id: 3,
    title: "Access To Free Quarterly Events",
    description: "We like to give back to our students as much as we can. That's why we decide to host quarterly events that anyone inside Yarimi University can attend for FREE.",
    image: "/Timeline image 3.png"
  }
];

export default function Timeline() {
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const [progressHeight, setProgressHeight] = useState(0);
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

      // Calculate progress bar height based on scroll position
      // Start animation very early when timeline section is approaching
      const timelineStart = timelineTop + 170; // Start from where the line actually begins
      const sectionStart = timelineStart - windowHeight;
      const sectionEnd = timelineStart + (timelineHeight - 320);
      const scrollProgress = Math.max(0, Math.min(1, (scrollTop + windowHeight - sectionStart) / (sectionEnd - sectionStart)));
      setProgressHeight(scrollProgress);

      // Check which items should be active
      const newActiveItems = new Set<number>();
      
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const itemRect = ref.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const threshold = windowHeight * 0.7;
        
        if (itemCenter < threshold) {
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
      {/* Background Image */}
      <div className="timeline-bg-image">
        <img src="/Timeline Section Background.png" alt="Timeline Background" />
      </div>
      
      <div className="timeline-container" ref={timelineRef}>
        {/* Section Title */}
        <div className="timeline-title">
          <h2 
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: '48px',
              lineHeight: '55px',
              marginBottom: '15px',
              fontWeight: '700',
              display: 'flex',
              flexFlow: 'row',
              justifyContent: 'center',
              fontFamily: 'Montserrat-Bold, Montserrat, sans-serif'
            }}
          >
            What's Included
          </h2>
          <p 
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
              marginBottom: '50px'
            }}
          >
            YOUR ROADMAP TO SUCCESS...
          </p>
        </div>

        {/* Timeline Component */}
        <div className="timeline_component">
          {/* Timeline Progress Line */}
          <div className="timeline_progress-2">
            <div 
              className={`timeline_progress-bar-2 ${progressHeight > 0 ? 'active' : ''}`}
              style={{ height: `${progressHeight * 100}%` }}
            />
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`timeline_item-2 ${activeItems.has(index) ? 'active' : ''}`}
            >
              {/* Left Column */}
              <div className={`timeline_left-2 ${index % 2 === 0 ? 'show-image' : 'show-content'}`}>
                {index % 2 === 0 ? (
                  // Show image on left for even items (0, 2, 4...)
                  <div className="timeline_image-wrapper">
                    <img src={item.image} alt={item.title} className="timeline-image" />
                  </div>
                ) : (
                  // Show content on left for odd items (1, 3, 5...)
                  <div className="margin-bottom-xlarge">
                    <h3>{item.title}</h3>
                    <div className="timeline_text">{item.description}</div>
                  </div>
                )}
              </div>

              {/* Center Column - Timeline Marker */}
              <div className="timeline_centre-2">
                <div className="timeline_circle-2">
                  <img src="/Timeline Mark.png" alt="Timeline Marker" />
                </div>
              </div>

              {/* Right Column */}
              <div className={`timeline_right-2 ${index % 2 === 0 ? 'show-content' : 'show-image'}`}>
                {index % 2 === 0 ? (
                  // Show content on right for even items (0, 2, 4...)
                  <div className="margin-bottom-xlarge">
                    <h3>{item.title}</h3>
                    <div className="timeline_text">{item.description}</div>
                  </div>
                ) : (
                  // Show image on right for odd items (1, 3, 5...)
                  <div className="timeline_image-wrapper">
                    <img src={item.image} alt={item.title} className="timeline-image" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enroll Button */}
        <div className="text-center mt-20">
          <a 
            href="#pricing"
            style={{
              backgroundImage: 'linear-gradient(80deg, #70b1ff, #0074ff)',
              borderRadius: '5px',
              padding: '14px 70px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              lineHeight: '20px',
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
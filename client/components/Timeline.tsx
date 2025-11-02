import { useEffect, useRef, useState } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  phase?: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Viral Strategy & Platform Audit",
    description: "We start by understanding your business deeply. We audit your current social presence, identify what's working (and what isn't), and create a custom viral strategy tailored specifically to your niche and audience. This is where we discover your untapped viral potential.",
    image: "/Timeline image 1.png",
    tags: ["Business Analysis", "Platform Audit", "Strategy Blueprint"]
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "High-Performance Content Creation",
    description: "Our award-winning creative team produces viral-worthy content optimized for TikTok and Instagram. We handle everything — filming, editing, scripting, and trending audio integration. No more 36-view Instagram Reels or lonely TikTok accounts. We create content that gets real views and brings real customers.",
    image: "/Timeline image 2.png",
    tags: ["Video Production", "Trend Integration", "Optimization"]
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Strategic Distribution & Organic Growth",
    description: "We don't just create content — we distribute it strategically across multiple platforms. Our system ensures maximum reach and engagement. We optimize posting times, hashtags, and cross-platform promotion to multiply your visibility. Watch as your follower count grows organically.",
    image: "/Timeline image 3.png",
    tags: ["Multi-Platform Distribution", "Timing Optimization", "Growth Hacking"]
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Convert Views Into Revenue",
    description: "More views mean nothing if they don't convert to customers. Our system is built to drive real business results. We track metrics that matter — customer acquisition, revenue per video, ROI. Our clients typically see 20-30% revenue increases within 2-3 months. Some experience up to 80% of new customers from TikTok.",
    image: "/Timeline image 3.png",
    tags: ["Conversion Tracking", "ROI Optimization", "Revenue Growth"]
  },
  {
    id: 5,
    phase: "Bonus #1",
    title: "Detailed Monthly Performance Reports",
    description: "Full transparency every month. We provide comprehensive analytics showing views, engagement, follower growth, and most importantly — how many new customers came from TikTok and Instagram. You'll know exactly what's working and why.",
    image: "/Timeline image 1.png",
    tags: ["Analytics", "Transparency", "Monthly Reporting"]
  },
  {
    id: 6,
    phase: "Bonus #2",
    title: "Direct Access to Creative Team",
    description: "You're not just a number. You get direct access to Sam and his creative team. We work collaboratively to ensure your content reflects your brand authenticity. We listen, we adapt, and we execute based on what's currently working in the market.",
    image: "/Timeline image 2.png",
    tags: ["Direct Access", "Collaboration", "Expert Support"]
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
      
      // Start coloring when timeline section is halfway up the screen
      // This means when the top of the timeline is at 50% of the viewport height
      const triggerPoint = windowHeight * 0.5;
      const scrollProgress = Math.max(0, Math.min(1, (triggerPoint - timelineRect.top) / (timelineRect.height + triggerPoint)));
      
      setProgressHeight(scrollProgress);

      // Check which items should be active based on scroll position
      const newActiveItems = new Set<number>();
      
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const itemRect = ref.getBoundingClientRect();
        // Activate items when they reach the center of the viewport
        // This ensures items activate when the animated line reaches them
        const threshold = windowHeight * 0.5;
        
        if (itemRect.top < threshold) {
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
    <section id="included" className="timeline-section">
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
              className="timeline_progress-bar-2"
              style={{ 
                height: `${progressHeight * 100}%`,
                transition: progressHeight === 0.1 ? 'none' : 'height 0.12s ease-out'
              }}
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
                    {item.phase && (
                      <div style={{
                        fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#70b1ff',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {item.phase}
                      </div>
                    )}
                    <h3>{item.title}</h3>
                    <div className="timeline_text">{item.description}</div>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            style={{
                              backgroundColor: 'rgba(112, 177, 255, 0.1)',
                              border: '1px solid #70b1ff',
                              borderRadius: '20px',
                              padding: '4px 12px',
                              fontSize: '12px',
                              color: '#70b1ff',
                              fontFamily: 'Montserrat, sans-serif'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Center Column - Timeline Marker */}
              <div className="timeline_centre-2">
                <div className={`timeline_circle-2 timeline_circle-${index}`}>
                  <img src="/Timeline Mark.png" alt="Timeline Marker" />
                </div>
              </div>

              {/* Right Column */}
              <div className={`timeline_right-2 ${index % 2 === 0 ? 'show-content' : 'show-image'}`}>
                {index % 2 === 0 ? (
                  // Show content on right for even items (0, 2, 4...)
                  <div className="margin-bottom-xlarge">
                    {item.phase && (
                      <div style={{
                        fontFamily: 'Montserrat-Bold, Montserrat, sans-serif',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#70b1ff',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}>
                        {item.phase}
                      </div>
                    )}
                    <h3>{item.title}</h3>
                    <div className="timeline_text">{item.description}</div>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            style={{
                              backgroundColor: 'rgba(112, 177, 255, 0.1)',
                              border: '1px solid #70b1ff',
                              borderRadius: '20px',
                              padding: '4px 12px',
                              fontSize: '12px',
                              color: '#70b1ff',
                              fontFamily: 'Montserrat, sans-serif'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
import { useEffect, useRef } from 'react';

// Certificate images available in public folder
const topRowImages = [
  '/Certificate 1.png',
  '/Certificate 2.png', 
  '/Certificate 3.png',
  '/Certificate 4.png',
  '/Certificate 5.png',
  '/Certificate 6.png',
  '/Certificate 7.png',
  '/Certificate 8.png',
  '/Certificate 9.png',
  '/Certificate 10.png',
  '/Certificate 11.png',
  '/Certificate 13.png'
];

const bottomRowImages = [
  '/Certificate 14.png',
  '/Certificate 15.png',
  '/Certificate 16.png',
  '/Certificate 17.png',
  '/Certificate 18.png',
  '/Certificate 1.png',
  '/Certificate 2.png',
  '/Certificate 3.png',
  '/Certificate 4.png',
  '/Certificate 5.png',
  '/Certificate 6.png',
  '/Certificate 7.png'
];

export default function StudentsWins() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (!topRow || !bottomRow) return;

    let currentTopX = -1082;
    let currentBottomX = -1051;
    let animationId: number;

    // Animation function for continuous scrolling
    const animateScroll = () => {
      // Top row scrolls left to right (continuously)
      currentTopX += 0.5;
      if (currentTopX > 0) {
        currentTopX = -2000;
      }
      topRow.style.transform = `translate3d(${currentTopX}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      topRow.style.transformStyle = 'preserve-3d';
      topRow.style.willChange = 'transform';

      // Bottom row scrolls right to left (continuously)
      currentBottomX -= 0.5;
      if (currentBottomX < -2000) {
        currentBottomX = 0;
      }
      bottomRow.style.transform = `translate3d(${currentBottomX}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      bottomRow.style.transformStyle = 'preserve-3d';
      bottomRow.style.willChange = 'transform';

      animationId = requestAnimationFrame(animateScroll);
    };

    // Start animation
    animateScroll();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="wins-section">
      <div className="container-7 overflow">
        <h1 className="h1-black-2">Students Wins</h1>
        
        <div className="wins-wrap-wrap">
          {/* Top Row - Scrolling Left to Right */}
          <div ref={topRowRef} className="wins-wrap">
            <div className="wins">
              {topRowImages.map((img, index) => (
                <img
                  key={`top-${index}`}
                  src={img}
                  alt="Student Certificate"
                  className="win-photo"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              ))}
            </div>
            <div className="wins">
              {topRowImages.map((img, index) => (
                <img
                  key={`top-duplicate-${index}`}
                  src={img}
                  alt="Student Certificate"
                  className="win-photo"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Right to Left */}
          <div ref={bottomRowRef} className="wins-wrap">
            <div className="wins wins-bottom">
              {bottomRowImages.map((img, index) => (
                <img
                  key={`bottom-${index}`}
                  src={img}
                  alt="Student Certificate"
                  className="win-photo"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              ))}
            </div>
            <div className="wins wins-bottom">
              {bottomRowImages.map((img, index) => (
                <img
                  key={`bottom-duplicate-${index}`}
                  src={img}
                  alt="Student Certificate"
                  className="win-photo"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
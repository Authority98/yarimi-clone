import { CheckCircle2 } from "lucide-react";

interface CurriculumItem {
  id: number;
  phase: string;
  title: string;
  description: string;
  image: string;
  buttons: string[];
}

const curriculumData: CurriculumItem[] = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Introduction",
    description: "Everything starts off with understanding the basics. Building the foundational knowledge so you're set for the rest of your trading journey.",
    image: "/Phase 1.png",
    buttons: ["Introduction", "Basics", "Roadmap"]
  },
  {
    id: 2,
    phase: "Phase 2", 
    title: "Psychology & Mindset",
    description: "Psychology & mindset are the 2 biggest driving factors when trading the currency markets. We make sure you understand the importance of this so you set yourself up for success.",
    image: "/Phase 2.png",
    buttons: ["Self Mastery", "Mentality", "Habits"]
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Trading Fundamentals", 
    description: "The key to becoming a successful trader starts with understanding the fundamentals. Here, you'll learn the foundational knowledge in order to start off strong on your journey to success.",
    image: "/Phase 3.png",
    buttons: ["Fundamentals", "Trading Concepts", "Principals"]
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "In-Depth Forex Education",
    description: "We'll teach you everything there is to forex trading. Providing you with 27+ video trainings around every topic of forex.",
    image: "/Phase 4.png",
    buttons: ["Forex Education", "Training Modules", "Resources"]
  },
  {
    id: 5,
    phase: "Bonus #1",
    title: "In-Person Trading Workshops & Events",
    description: "We do quarterly events for our students, completely for free. We hire out the venues, gift funded accounts, and even do small in-person workshops.",
    image: "/Bonus 1.png",
    buttons: ["In-Person Events", "Workshops", "Gift Funded Accounts"]
  },
  {
    id: 6,
    phase: "Bonus #2",
    title: "Funded Trader Scholarship Program & Retreats",
    description: "Top students of YU who meet certain requirements get entered into the funded scholarship program along with all expenses paid for trips to certain places around the world.",
    image: "/Bonus 2.png",
    buttons: ["Scholarship Program", "Road To 6 Figures", "Competitions"]
  },
  {
    id: 7,
    phase: "Bonus #3",
    title: "150+ Hours Of Pre-Recorded Calls",
    description: "Get access to 150+ hours of pre-recorded Sunday Market Breakdown calls. You can watch them anywhere, at anytime, and consume all the knowledge we have been dropping since Yarimi University started.",
    image: "/Bonus 3.jpg",
    buttons: ["Pre-Recorded", "150+ Hours", "Market Breakdowns"]
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="curriculum">
      {/* Background Effects */}
      <div className="curriculum-bg-effects">
        <div className="curriculum-blur-effect"></div>
      </div>
      
      <div className="container">
        {/* Section Heading */}
        <h1 className="heading-8">Yarimi University Curriculum</h1>
        
        {/* Curriculum Items */}
        {curriculumData.map((item, index) => (
          <div key={item.id} className="container change1 change2">
            {/* Content Section */}
            <div className="div-block-20">
              {/* Phase Label */}
              <div className="text-block-7">{item.phase}</div>
              
              {/* Title with Verified Tick */}
              <div className="div-block-42">
                <h1 className="heading-12">
                  {item.title}
                  <span className="text-span-6">c</span>
                </h1>
              </div>
              
              {/* Description */}
              <div className="text-block-13">{item.description}</div>
              
              {/* Buttons */}
              <div className="div-block-4">
                {item.buttons.map((buttonText, btnIndex) => (
                  <a key={btnIndex} href="#" className="button-4">
                    {buttonText}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Image Section - Always on Right */}
            <div className="div-block-21">
              <img 
                src={item.image} 
                alt={item.title}
                className="image-18"
                width="344"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
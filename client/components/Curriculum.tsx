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
    phase: "Step 1",
    title: "Custom Viral Strategy",
    description: "We develop a blueprint specifically for your niche and audience. No one-size-fits-all approach. Your strategy is yours alone.",
    image: "/Phase 1.png",
    buttons: ["Analysis", "Planning", "Blueprint"]
  },
  {
    id: 2,
    phase: "Step 2", 
    title: "Professional Content Production",
    description: "Award-winning creative team handles filming, editing, trending audio, and optimization. Quality content that converts.",
    image: "/Phase 2.png",
    buttons: ["Filming", "Editing", "Optimization"]
  },
  {
    id: 3,
    phase: "Step 3",
    title: "Multi-Platform Distribution", 
    description: "We distribute strategically across TikTok, Instagram, and beyond. Maximum reach through strategic timing and optimization.",
    image: "/Phase 3.png",
    buttons: ["TikTok", "Instagram", "Multi-Platform"]
  },
  {
    id: 4,
    phase: "Step 4",
    title: "Revenue Conversion System",
    description: "Views mean nothing without customers. Our system converts viral engagement into actual revenue and new business.",
    image: "/Phase 4.png",
    buttons: ["Conversion", "Revenue", "Growth"]
  },
  {
    id: 5,
    phase: "Bonus",
    title: "Monthly Performance Analytics",
    description: "Complete transparency. Know exactly which videos brought customers, views, engagement, and ROI every single month.",
    image: "/Bonus 1.png",
    buttons: ["Analytics", "Reporting", "Transparency"]
  },
  {
    id: 6,
    phase: "Bonus",
    title: "Direct Creative Team Access",
    description: "Work directly with Sam and the award-winning team. Collaborative approach to ensure your brand authenticity shines.",
    image: "/Bonus 2.png",
    buttons: ["Collaboration", "Expert Support", "Direct Access"]
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
        <h1 className="heading-8">The BrandTok System</h1>
        
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
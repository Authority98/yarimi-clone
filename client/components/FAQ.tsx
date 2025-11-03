import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What kind of businesses do you work with?",
      answer: "We partner with scaling business builders who are tired of burning cash on ads that don't work. Our system is perfect for restaurants, e-commerce brands, local businesses, and service providers who want a predictable system for acquiring new customers organically through platforms like TikTok and Instagram."
    },
    {
      question: "How long does it take to see results?",
      answer: "While some content can gain traction very quickly, our system is about building a sustainable asset, not just chasing one-hit wonders. Many of our clients start seeing a consistent flow of new customers and significant revenue increases (20-30%) within 2-3 months of launching the system."
    },
    {
      question: "Do I have to film the content myself?",
      answer: "No. \"We do all the heavy lifting\" is our promise to you. Our award-winning creative team handles the entire process, including strategy, platform audits, scripting, professional filming, and editing. We work with you to capture your brand's voice, but you can be completely hands-off."
    },
    {
      question: "What makes this different from a regular marketing agency?",
      answer: "Most agencies focus on running paid ads, which means you're constantly spending money to get in front of people. We are a viral content powerhouse. We build a system that gets you organic reach, meaning you get views and new customers without paying for ads. We focus on turning views into measurable revenue and ROI, not just vanity metrics."
    },
    {
      question: "How much does the \"Full Service Viral Partnership\" cost?",
      answer: "Because every business is different, we don't offer one-size-fits-all pricing. Our partnership is custom-tailored to your specific niche, goals, and content needs. The best way to get a clear quote is to schedule a free, no-obligation strategy call so we can build a custom viral strategy for your business."
    }
  ];

  return (
    <section id="faq" className="faq-s">
      <div className="container-4 faq-container">
        <h1 className="h1-white">Frequently Asked Questions</h1>
        <div className="w-layout-grid faq-s-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-div">
              <div className="accordion">
                <div className="div-block-12"></div>
                <div 
                  className="accordionheader"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="question-text">
                    <strong>{faq.question}</strong>
                  </div>
                  <div 
                    className="accordioniconwrap"
                    style={{
                      transform: openAccordion === index 
                        ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(180deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' 
                        : 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <img 
                      src="/Down Arrow.png" 
                      loading="lazy" 
                      width="47" 
                      alt="" 
                      className="down-arrow"
                    />
                  </div>
                </div>
                <div 
                  className="accordionpanel"
                  style={{
                    height: openAccordion === index ? 'auto' : '0px',
                    padding: openAccordion === index ? '16px 0px' : '0px'
                  }}
                >
                  <p className="faq-text">
                    {faq.answer.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < faq.answer.split('\n').length - 1 && <><br /><br /></>}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
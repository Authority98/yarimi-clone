import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What Is Yarimi University",
      answer: "Yarimi University is an online educational program that teaches forex/currency trading. Made by traders for traders. We offer A-Z detailed forex education, community, and special events."
    },
    {
      question: "How Long Will I Have Access To Yarimi University",
      answer: "You'll have lifetime access to Yarimi University, all the video modules, resources, events, etc."
    },
    {
      question: "I Don't Have Any Experience Or Results. Is This For Me?",
      answer: "Not a problem at all. We have students joining Yarimi University as complete beginners with no previous knowledge or experience.\n\nWe provide you with all the information you need to succeed with forex trading, whether you're starting off today or if you already have some knowledge about the forex trading space."
    },
    {
      question: "What If I Have Questions Or Get Stuck Throughout The Program?",
      answer: "No problem. We have 24/7 support. Discord moderators inside the community. Weekly calls on Sunday where every question asked gets answered.\n\nIf you need any specific questions answered, email yarimi@yarimiuniversity.com"
    },
    {
      question: "Is There A Guarantee?",
      answer: "No. We don't offer any guarantees. Simply because we can't guarantee any results. But we do offer the guidance and information for you to go from an absolute beginner to a funded trader."
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
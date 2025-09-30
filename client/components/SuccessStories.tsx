import React from 'react';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      id: '0hz7dm834l',
      embedCode: `<iframe src="https://fast.wistia.net/embed/iframe/0hz7dm834l?videoFoam=true" title="Student Success Story" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"></iframe>`,
      testimonial: "Thanks to you, I'm now $200K funded. One month later... And I was $250K+ funded on top of that.",
      name: "Asim",
      title: "Funded Trader"
    },
    {
      id: 'zrex34rj3h',
      embedCode: `<iframe src="https://fast.wistia.net/embed/iframe/zrex34rj3h?videoFoam=true" title="Student Success Story" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"></iframe>`,
      testimonial: "In 4 months, I've managed to get the strategy right, get my psychology in place and make a withdrawal.",
      name: "Sadia",
      title: "Successful Trader"
    },
    {
      id: 'dro6dt8f29',
      embedCode: `<iframe src="https://fast.wistia.net/embed/iframe/dro6dt8f29?videoFoam=true" title="Student Success Story" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"></iframe>`,
      testimonial: "My student Eranio got funded a $100K account and I flew him out.",
      name: "Eranio",
      title: "$100K Funded Trader"
    },
    {
      id: 'fiflicslh8',
      embedCode: `<iframe src="https://fast.wistia.net/embed/iframe/fiflicslh8?videoFoam=true" title="Student Success Story" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"></iframe>`,
      testimonial: "Developed good habits. Provide for my family. I quit my job. Last event I became funded, now I've made $15,000 in withdrawals.",
      name: "Yarimi University Event",
      title: "Event Attendee"
    },
    {
      id: 'akal1tbdsf',
      embedCode: `<iframe src="https://fast.wistia.net/embed/iframe/akal1tbdsf?videoFoam=true" title="Student Success Story" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"></iframe>`,
      testimonial: "The discord helped me a lot. Seeing other members doing their analysis. I entered a real account and made $18K profit.",
      name: "Linda",
      title: "Real Account Trader"
    },
    {
      id: '5n1il9434l',
      embedCode: `<iframe src="https://fast.wistia.net/embed/iframe/5n1il9434l?videoFoam=true" title="Student Success Story" allow="autoplay; fullscreen" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"></iframe>`,
      testimonial: "This is not the first time the course has made me pass a funded challenge, I've passed a few times now",
      name: "Hamad",
      title: "Multiple Challenge Passer"
    }
  ];

  return (
    <section id="Testimonials" className="succes-stories">
      <div className="container-3 center">
        <h1 className="h1-white">Success Stories</h1>
        <div data-current="Tab 2" data-easing="ease" data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
          <div className="tabs-content w-tab-content">
            <div data-w-tab="Tab 2" className="tab-pane-tab-2 w-tab-pane w--tab-active">
              <div className="w-layout-grid shotr-form-grid">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="placeholder _2">
                    <div 
                      className="html-embed-4 w-embed w-script"
                      dangerouslySetInnerHTML={{ __html: testimonial.embedCode }}
                    />
                    <div className="testimonial-content">
                      <p className="testimonial-text">{testimonial.testimonial}</p>
                      <p className="testimonial-name">{testimonial.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
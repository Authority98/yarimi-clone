import React from 'react';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      videoId: "nzcftmm46w",
      stat: "30%",
      testimonial: "increase in revenue and it's consistent monthly. We started to do numbers we've not seen before. Just one video brought us both revenue and reach.",
      name: "Chef Gero DiMaria",
      title: "Founder of Kucina"
    },
    {
      id: 2,
      videoId: "zz8c7lzku4",
      stat: "600K",
      testimonial: "views and brought in nearly 4,000 new followers. Working with BrandTok has been a game-changer. I'm very, very satisfied. This is the only platform we use that brings us so many customers.",
      name: "Abdullah",
      title: "Royal Fragrances"
    },
    {
      id: 3,
      videoId: "nusik7g4p8",
      stat: "80%",
      testimonial: "of our new customers came from TikTok. My advice to anyone watching – just go for it. We would have made so much more money had we worked with BrandTok earlier.",
      name: "Nor & Amir",
      title: "Owners of Salt n Bake"
    },
    {
      id: 4,
      videoId: "29709myyaw",
      stat: "200K+",
      testimonial: "views in 2 weeks. We had customers coming in even on the slower days. It's really good for us. The content has impacted our business positively.",
      name: "Samsuddin",
      title: "Owner of Kampong Chai Chee Restaurant"
    },
    {
      id: 5,
      videoId: "ipe02t12l6",
      stat: "40K+",
      testimonial: "organic views. You really amaze us from the results – we are very amazed by the viewership. By seeing new customers, new faces – it makes us feel motivated and excited.",
      name: "AJ Delights",
      title: "Viral Within 15 Days"
    },
    {
      id: 6,
      videoId: "kni3xu5kxu",
      stat: "20-25%",
      testimonial: "increase in fresh customers. Before BrandTok, 90% of our customers were regulars. Now we have fresh customers constantly coming in. Most of our customers are from TikTok and I'm very happy.",
      name: "Jackeline & Wee Seng",
      title: "Owners of Chice & Chickata"
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
                    <div className="html-embed-4 w-embed w-script">
                      {/* Wistia Video Embed - Using the same approach as the main video */}
                      <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                        <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
                          <div className={`wistia_embed wistia_async_${testimonial.videoId} seo=false videoFoam=true`} style={{height: '100%', position: 'relative', width: '100%'}}>
                            <div className="wistia_swatch" style={{height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%'}}>
                              <img 
                                src={`https://fast.wistia.com/embed/medias/${testimonial.videoId}/swatch`} 
                                style={{filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%'}} 
                                alt="" 
                                aria-hidden="true" 
                                onLoad={(e) => (e.target as HTMLImageElement).parentElement!.style.opacity = '1'} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-text">
                        <span style={{ 
                          fontSize: '30px', 
                          fontWeight: 700, 
                          display: 'block', 
                          marginBottom: '10px',
                          color: '#70b1ff'
                        }}>
                          {testimonial.stat}
                        </span>
                        {testimonial.testimonial}
                      </p>
                      <p className="testimonial-name">{testimonial.name}</p>
                      <p className="testimonial-title">{testimonial.title}</p>
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
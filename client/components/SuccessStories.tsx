import React, { useEffect } from 'react';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      stat: "20-25%",
      testimonial: "increase in revenue. I didn't expect to get so many customers coming in. 5 years of Facebook & Instagram – incomparable to 1 year of marketing using TikTok. It just works",
      name: "Chef Gero DiMaria",
      title: "Founder of Kucina",
      videoId: "nzcftmm46w"
    },
    {
      id: 2,
      stat: "600K",
      testimonial: "views and brought in nearly 4,000 new followers. Working with BrandTok has been a game-changer. I'm very, very satisfied. This is the only platform we use that brings us so many customers.",
      name: "Abdullah",
      title: "Royal Fragrances",
      videoId: "zz8c7lzku4"
    },
    {
      id: 3,
      stat: "80%",
      testimonial: "of our new customers came from TikTok. My advice to anyone watching – just go for it. We would have made so much more money had we worked with BrandTok earlier.",
      name: "Nor & Amir",
      title: "Owners of Salt n Bake",
      videoId: "nusik7g4p8"
    },
    {
      id: 4,
      stat: "200K+",
      testimonial: "views in 2 weeks. We had customers coming in even on the slower days. It's really good for us. The content has impacted our business positively.",
      name: "Samsuddin",
      title: "Owner of Kampong Chai Chee Restaurant",
      videoId: "29709myyaw"
    },
    {
      id: 5,
      stat: "40K+",
      testimonial: "organic views. You really amaze us from the results – we are very amazed by the viewership. By seeing new customers, new faces – it makes us feel motivated and excited.",
      name: "AJ Delights",
      title: "Viral Within 15 Days",
      videoId: "ipe02t12l6"
    },
    {
      id: 6,
      stat: "20-25%",
      testimonial: "increase in fresh customers. Before BrandTok, 90% of our customers were regulars. Now we have fresh customers constantly coming in. Most of our customers are from TikTok and I'm very happy.",
      name: "Jackeline & Wee Seng",
      title: "Owners of Chice & Chickata",
      videoId: "kni3xu5kxu"
    },
    {
      id: 7,
      stat: "",
      testimonial: "This was the best decision I've ever made in my 7 years of running Kucina – it's unmatched in terms of the scale",
      name: "Chef Gero DiMaria",
      title: "Founder of Kucina",
      videoId: "r5q6po0jie"
    },
    {
      id: 8,
      stat: "700K",
      testimonial: "organic views on Instagram — and now I'm growing on TikTok too. I've never run ads in my life — everything I do is organic. But in just one week after working with BrandTok, I saw a 70% jump in leads… and 70% of those converted into actual sales. One of my first videos hit 200,000 views. The best part? All real. Real followers, real comments, real clients. This is the most successful organic marketing I've done in 6 years. Thank you, BrandTok.",
      name: "Shahirah",
      title: "Founder",
      videoId: "vf66rx9l1y"
    },
    {
      id: 9,
      stat: "20-30%",
      testimonial: "New customers coming into our shop. We are looking at 20-30% of NEW CUSTOMERS coming in to our shop. This is the only platform we use and this is the only platform that brings us so many customers.",
      name: "Sheikh Abdullah",
      title: "Owner of RoyalFragrances.co",
      videoId: "a0ht5n52fy"
    },
    {
      id: 10,
      stat: "",
      testimonial: "New Customers. I was very skeptical, because we wasted lots of money in the past with marketing. But he proved me wrong. Most of our customers are from Tiktok and I'm very happy.",
      name: "Hadi & NoorAfizah",
      title: "Owner of Istimewa Nasi Padang",
      videoId: "szf5ozjd4i"
    },
    {
      id: 11,
      stat: "",
      testimonial: "Organic Virality. I couldn't believe it actually – how viral some of the videos are. No promotions, no paid ads. Sam has a very good style conceptualizing the ideas which makes a lot of difference to a niched business like mine. He nailed it baby!",
      name: "Alfred Khan",
      title: "Founder of Designer Bengal Cats",
      videoId: "qaejz9uynp"
    },
    {
      id: 12,
      stat: "",
      testimonial: "Our Sales Picked Up Again. It has improved our sales since we engaged BrandTok 2-3 Months ago. I was so surprised to see customers coming in and telling me I saw you on TikTok. I found Sam and his Team to be very professional.",
      name: "Jenny",
      title: "Woody Family Cafe",
      videoId: "ek6mipy35j"
    },
    {
      id: 13,
      stat: "",
      testimonial: "15-20% Increase In Revenue. In terms of the turnover, we saw a year to year growth with 15-20% increase in revenue. Just be original and authentic in your content – don't try to oversell.",
      name: "Sheikh Abdullah",
      title: "Owner of Royal Fragrances",
      videoId: "qtz5q1761f"
    },
    {
      id: 14,
      stat: "",
      testimonial: "30% Increase In Revenue. Some months we saw 30% increase in revenue, and it's not up and down – it was consistent monthly. We started to do numbers we've not seen before.",
      name: "Chef Gero DiMaria",
      title: "Founder of Kucina",
      videoId: "gkfo3i36vn"
    },
    {
      id: 15,
      stat: "",
      testimonial: "It's an investment For Me. We have More awareness. Thanks to TikTok, especially BrandTok – we have awareness from people living very far now and definitely it's worth it so they are coming. So the digital marketing helped us a lot especially BrandTok. It's not a cost for me, it's just an investment to go.",
      name: "Alex",
      title: "Founder of Braseiro",
      videoId: "dpxesx41mk"
    },
    {
      id: 16,
      stat: "",
      testimonial: "633,000 views in the last 45 days organically. We have got 633,000 post views in the last 45 days. With you guys being around – we have been able to execute our ideas. Yes, you can do this by yourself with your own team, it may seem good for you, but not for the industry. We feel confident as we have direct access to what's currently working by working with your team.",
      name: "Hasan",
      title: "Owner of Pondok Abang",
      videoId: "7rngrgibaz"
    },
    {
      id: 17,
      stat: "",
      testimonial: "Massive Increase in TikTok Views. 我们开始从 TikTok 获取客户了。这是我们以前从未想过要锁定的细分市场，所以，是的，这很令人兴奋！问题是，我们的 TikTok 视频表现不佳；我们能有 150 次观看就已经很幸运了。所以，30,000 这个数字是我们从未想过能达到的。",
      name: "",
      title: "",
      videoId: "2t4lbz8u7v"
    },
    {
      id: 18,
      stat: "",
      testimonial: "Massive Increase in TikTok Views. Increase in revenue. We start getting customers from tiktok this is a segment we've never even thought to target before, so yeah its exciting the thing our TikTok videos aren't doing that well maybe we will be lucky to get 150 views so 30,000 is a number what we never thought we will hit there.",
      name: "",
      title: "",
      videoId: "rv8iv7qit2"
    }
  ];

  useEffect(() => {


    const loadedScripts = new Set<string>();
    const scriptsToLoad: HTMLScriptElement[] = [];

    // Load E-v1.js once
    const ev1ScriptSrc = 'https://fast.wistia.com/assets/external/E-v1.js';
    if (!loadedScripts.has(ev1ScriptSrc)) {
      const ev1Script = document.createElement('script');
      ev1Script.src = ev1ScriptSrc;
      ev1Script.async = true;
      scriptsToLoad.push(ev1Script);
      loadedScripts.add(ev1ScriptSrc);
    }

    testimonials.forEach(testimonial => {
      const videoId = testimonial.videoId;
      const jsonpScriptSrc = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
      
      if (!loadedScripts.has(jsonpScriptSrc)) {
        const jsonpScript = document.createElement('script');
        jsonpScript.src = jsonpScriptSrc;
        jsonpScript.async = true;
        scriptsToLoad.push(jsonpScript);
        loadedScripts.add(jsonpScriptSrc);
      }
    });

    scriptsToLoad.forEach(script => {
      document.body.appendChild(script);
    });

    return () => {
      scriptsToLoad.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  // Function to render the appropriate video embed markup based on video ID
  const renderVideoEmbedMarkup = (videoId: string) => {
    if (videoId === "zz8c7lzku4" || videoId === "vf66rx9l1y" || videoId === "szf5ozjd4i" ||
        videoId === "dpxesx41mk" || videoId === "7rngrgibaz" || videoId === "2t4lbz8u7v" || videoId === "rv8iv7qit2") {
      // Different aspect ratios for some videos
      let aspectStyle = "1.0";
      if (videoId === "dpxesx41mk" || videoId === "2t4lbz8u7v" || videoId === "rv8iv7qit2") {
        aspectStyle = "0.5625";
      } else if (videoId === "7rngrgibaz") {
        aspectStyle = "0.5660377358490566";
      }
      
      return `
        <style>wistia-player[media-id='${videoId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch'); display: block; filter: blur(5px); padding-top:100.0%; }</style>
        <wistia-player media-id="${videoId}" aspect="${aspectStyle}"></wistia-player>
      `;
    } else {
      return `
        <div class="wistia_responsive_padding" style="padding:100.0% 0 0 0;position:relative;">
          <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
            <div class="wistia_embed wistia_async_${videoId} seo=false videoFoam=true" style="height:100%;position:relative;width:100%">
              <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                <img src="https://fast.wistia.com/embed/medias/${videoId}/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
              </div>
            </div>
          </div>
        </div>
      `;
    }
  };

  return (
    <section id="Testimonials" className="succes-stories">
      <div className="container-3 center">
        <h1 className="h1-white">Our Growth Partners</h1>
        <div data-current="Tab 2" data-easing="ease" data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
          <div className="tabs-content w-tab-content">
            <div data-w-tab="Tab 2" className="tab-pane-tab-2 w-tab-pane w--tab-active">
              <div className="w-layout-grid shotr-form-grid">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="placeholder _2">
                    {/* Video Embed */}
                    <div className="html-embed-4 w-embed w-script" 
                         dangerouslySetInnerHTML={{__html: renderVideoEmbedMarkup(testimonial.videoId)}} />
                    <div className="testimonial-content">
                      <p className="testimonial-text">
                        {testimonial.stat && (
                          <span style={{ 
                            fontSize: '30px', 
                            fontWeight: 700, 
                            display: 'block', 
                            marginBottom: '10px',
                            color: '#FF0000'
                          }}>
                            {testimonial.stat}
                          </span>
                        )}
                        {testimonial.testimonial}
                      </p>
                      {(testimonial.name || testimonial.title) && (
                        <>
                          <p className="testimonial-name">{testimonial.name}</p>
                          <p className="testimonial-title">{testimonial.title}</p>
                        </>
                      )}
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
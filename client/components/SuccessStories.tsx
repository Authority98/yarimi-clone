import React, { useEffect } from 'react';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      stat: "30%",
      testimonial: "increase in revenue and it's consistent monthly. We started to do numbers we've not seen before. Just one video brought us both revenue and reach.",
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
    }
  ];

  // Load all Wistia scripts when component mounts
  useEffect(() => {
    // Create a set to track loaded scripts and avoid duplicates
    const loadedScripts = new Set<string>();
    const scriptsToLoad: HTMLScriptElement[] = [];

    testimonials.forEach(testimonial => {
      const videoId = testimonial.videoId;
      
      // For the special case video (zz8c7lzku4), load different scripts
      if (videoId === "zz8c7lzku4") {
        const playerScriptSrc = "https://fast.wistia.com/player.js";
        const embedScriptSrc = `https://fast.wistia.com/embed/${videoId}.js`;
        
        if (!loadedScripts.has(playerScriptSrc)) {
          const playerScript = document.createElement('script');
          playerScript.src = playerScriptSrc;
          playerScript.async = true;
          scriptsToLoad.push(playerScript);
          loadedScripts.add(playerScriptSrc);
        }
        
        if (!loadedScripts.has(embedScriptSrc)) {
          const embedScript = document.createElement('script');
          embedScript.src = embedScriptSrc;
          embedScript.async = true;
          embedScript.type = "module";
          scriptsToLoad.push(embedScript);
          loadedScripts.add(embedScriptSrc);
        }
      } else {
        // For standard videos, load the standard scripts
        const jsonpScriptSrc = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
        const externalScriptSrc = "https://fast.wistia.com/assets/external/E-v1.js";
        
        if (!loadedScripts.has(jsonpScriptSrc)) {
          const jsonpScript = document.createElement('script');
          jsonpScript.src = jsonpScriptSrc;
          jsonpScript.async = true;
          scriptsToLoad.push(jsonpScript);
          loadedScripts.add(jsonpScriptSrc);
        }
        
        if (!loadedScripts.has(externalScriptSrc)) {
          const externalScript = document.createElement('script');
          externalScript.src = externalScriptSrc;
          externalScript.async = true;
          scriptsToLoad.push(externalScript);
          loadedScripts.add(externalScriptSrc);
        }
      }
    });

    // Add all scripts to the document
    scriptsToLoad.forEach(script => {
      document.body.appendChild(script);
    });

    // Cleanup function to remove scripts when component unmounts
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
    if (videoId === "zz8c7lzku4") {
      return `
        <style>wistia-player[media-id='${videoId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch'); display: block; filter: blur(5px); padding-top:100.0%; }</style>
        <wistia-player media-id="${videoId}" aspect="1.0"></wistia-player>
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
        <h1 className="h1-white">Success Stories</h1>
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
                        <span style={{ 
                          fontSize: '30px', 
                          fontWeight: 700, 
                          display: 'block', 
                          marginBottom: '10px',
                          color: '#FF0000'
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
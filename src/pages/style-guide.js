// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';

import PageLayout from '../templates/Page/Page';

import featuredImage from '../images/placeholder-18.jpg';

// ----------------------------------------------
// Style Guide
// ----------------------------------------------
export default () => (
  <PageLayout 
    title="Style Guide" 
    description=""
    featuredImage={featuredImage}
    pathname="/style-guide">
    <p>My name is Thomas Vaeth and this is Barber. <span role="img" aria-label="barber">💈</span> Barber is a minimal blog theme with a masonry grid layout and infinite scroll. <a href="http://samesies.io" target="_blank" rel="noopener noreferrer">Samesies</a> builds themes for Ghost, WordPress, and Jekyll and they are only available through ThemeForest.</p>

    <hr/>

    <h1>Artisan cray pickled whatever</h1>
    <h2>Artisan cray pickled whatever</h2>
    <h3>Artisan cray pickled whatever</h3>
    <h4>Artisan cray pickled whatever</h4>
    <h5>Artisan cray pickled whatever</h5>
    <h6>Artisan cray pickled whatever</h6>

    <hr/>

    <ol>
      <li>Wes anderson cliche cosby sweater brooklyn vegan organic.</li>
      <li>Synth ennui semiotics mustache pickled.</li>
      <li>Food truck freegan vinyl thundercats, post-ironic ennui wes anderson banh mi four loko synth photo booth authentic 3 wolf moon.</li>
    </ol>

    <hr/>

    <ul>
      <li>Wes anderson cliche cosby sweater brooklyn vegan organic.</li>
      <li>Synth ennui semiotics mustache pickled.</li>
      <li>Food truck freegan vinyl thundercats, post-ironic ennui wes anderson banh mi four loko synth photo booth authentic 3 wolf moon.</li>
    </ul>

    <hr/>

    <blockquote>
      <p>“Bicycle rights mustache artisan, keytar lo-fi sustainable fap stumptown vegan salvia freegan four loko terry richardson.”</p>
      <cite>Wolf Moon Cred</cite>
    </blockquote>

    <hr/>

    <pre>
      <code>
{`code {
  padding: 0.25em 0.5em;

  color: $color-black;
  background: $color-lightgrey;
}`}
      </code>
    </pre>

    <hr/>

    <img src={featuredImage} alt="Grid"/>
    <p>You can <code>use inline code</code> and append <code>#full</code> to the end of an image URL for full width images.</p>

    <img src={`${featuredImage}#full`} alt="Full"/>

    <hr/>

    <div className="flex-vid">
      <iframe width="560" height="315" title="The Shape of Water Trailer" src="https://www.youtube.com/embed/XFYWazblaUA" frameBorder="0" allowFullScreen />
    </div>

    <hr/>

    <div className="flex-vid">
      <iframe width="640" height="640" title="Unsatisfying" src="https://player.vimeo.com/video/189919038?title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen />
    </div>

    <hr/>

    <div className="flex-vid">
      <iframe height="400" scrolling="no" title="Flexbox Flex-Grow Mast" src="//codepen.io/thomasvaeth/embed/qmbKVq/?height=265&theme-id=0&default-tab=result&embed-version=2" frameBorder="no" allowFullScreen style={{ width: '100%' }} />
    </div>

    <hr/>

    <p>American apparel jean shorts terry richardson squid. Letterpress tattooed cray beard pinterest. Jean shorts tofu wayfarers, fap PBR swag banh mi. Organic chillwave scenester wayfarers semiotics salvia messenger bag, vice odd future.</p>
  </PageLayout>
);

import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {

  const searchBook = () => {
    const bookInput = document.getElementById('bookInput').value.trim();
    if (bookInput !== '') {
      window.location.href = `https://library.sgctn.org/search?title=${bookInput}`;
    }
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>SGC</title>
        <meta property="og:title" content="SGC" />
        <link rel="icon" type="image/png" href="https://publix.vitly.xyz/images/sgc/sgc_logo.PNG"/>
      </Helmet>
      <header data-role="Header" className="home-navbar-interactive">
        <a
          href="https://sgctn.org"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link"
        >
          <img
            alt="logo"
            src="https://public.vitly.xyz/images/sgc/sgc_logo.PNG"
            className="home-image"
          />
        </a>
        <div className="home-nav">
          <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container1">
              <img
                alt="image"
                src="https://public.vitly.xyz/images/sgc/sgc_logo.PNG"
                className="home-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container2 headMainDesc">
            <h1 className="home-hero-heading heading1">Slavic Gospel Church</h1>
            <span className="home-hero-sub-heading">
              The Church of God fosters faith, unity, and compassion in its
              vibrant community.
            </span>
            <div className="home-btn-group">
              <a href="#mission" className="home-hero-button1 button">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container3">
        <div className="home-container4">
          <Script
            html={`<svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`}
          ></Script>
        </div>
      </div>
      <div id="mission" className="home-mission">
        <div className="home-container5">
          <div className="home-container6">
            <Script
              html={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="45" height="auto" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 48.95 90 h -7.616 c -1.982 0 -3.588 -1.606 -3.588 -3.588 V 3.588 C 37.746 1.606 39.352 0 41.334 0 h 7.616 c 1.982 0 3.588 1.606 3.588 3.588 v 82.824 C 52.538 88.394 50.931 90 48.95 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 76.823 26.136 v 7.616 c 0 1.982 -1.606 3.588 -3.588 3.588 h -56.47 c -1.982 0 -3.588 -1.606 -3.588 -3.588 v -7.616 c 0 -1.982 1.606 -3.588 3.588 -3.588 h 56.47 C 75.217 22.548 76.823 24.154 76.823 26.136 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>`}
            ></Script>
          </div>
        </div>
        <h2 className="home-text">Our Mission</h2>
        <span className="home-text1">
          We are a vibrant Russian Orthodox community comprising 1,000 devoted
          members. Our church places a strong emphasis on the divine structure
          envisioned by God. Through the guiding framework of our church, we
          aspire to instill joy and a sense of liberation into your life,
          facilitating transformative changes one step at a time.
        </span>
      </div>
      <div id="youth" className="home-youth">
        <svg viewBox="0 0 1024 1024" className="home-icon4">
          <path d="M704 278q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM704 512q-62 0-106-44t-44-106 44-105 106-43 106 43 44 105-44 106-106 44zM320 278q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM320 512q-62 0-106-44t-44-106 44-105 106-43 106 43 44 105-44 106-106 44zM918 746v-52q0-20-71-48t-143-28q-52 0-128 24 22 26 22 52v52h320zM534 746v-52q0-20-71-48t-143-28-143 28-71 48v52h428zM704 554q86 0 182 39t96 101v116h-940v-116q0-62 96-101t182-39q94 0 192 44 98-44 192-44z"></path>
        </svg>
        <h2 className="home-text2">Youth</h2>
        <span className="home-text3">
          Our Youth actively engages in serving God through various means,
          encompassing enlightening discussions about God&apos;s teachings,
          embarking on meaningful journeys to different countries to broaden
          their spiritual horizons, and participating in a myriad of other
          impactful activities dedicated to fostering a deeper connection with
          the divine.
        </span>
      </div>
      <div id="search" className="home-library">
        <svg viewBox="0 0 1024 1024" className="home-icon6">
          <path d="M896 790v-492q-66-20-150-20-130 0-234 64v490q104-64 234-64 78 0 150 22zM746 192q152 0 236 64v622q0 8-7 15t-15 7q-6 0-10-2-82-44-204-44-130 0-234 64-86-64-234-64-108 0-204 46-2 0-5 1t-5 1q-8 0-15-6t-7-14v-626q86-64 236-64 148 0 234 64 86-64 234-64z"></path>
        </svg>
        <h2 className="home-text4">Library</h2>
        <span className="home-text5">
          Explore the diverse collection of books available in our extensive
          library catalog, where you can discover a wide range of literary
          treasures spanning various genres and subjects.
        </span>
        <div className="home-container7">
          <input type="text" required className="home-textinput input" id="bookInput"/>
          <button type="button" className="home-button button" onClick={searchBook}>
            Search
          </button>
        </div>
      </div>
      <footer id="footer" className="home-footer">
        <div className="home-container8">
          <span className="home-text6">
            © 2023 Slavic Gospel Church, All Rights Reserved.
          </span>
          <a
            href="https://youtube.com/@slavicgospelchurchtn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>YouTube</span>
            <br></br>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home

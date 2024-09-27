import React from 'react'

export default function ExpandedHeader() {
  return (
    <>
    <div className="menu-wrap">
      <div className="menu-inner">
        <a href="index.html" className="menu-logo">
          <img src="images/logo2.png" alt="" />
        </a>
        <div id="hid-men">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
              <ul>
                <li>
                  <a href="index.html">Slider</a>
                </li>
                <li>
                  <a href="index2.html">Impulse image</a>
                </li>
                <li>
                  <a href="index3.html">Image</a>
                </li>
                <li>
                  <a href="index4.html">Slideshow</a>
                </li>
                <li>
                  <a href="index5.html">Carousel</a>
                </li>
                <li>
                  <a href="index6.html">Video</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Portfolio</a>
              <ul>
                <li>
                  <a href="portfolio.html">Style 1</a>
                </li>
                <li>
                  <a href="portfolio2.html">Style 2</a>
                </li>
                <li>
                  <a href="portfolio3.html">Style 3</a>
                </li>
                <li>
                  <a href="portfolio4.html">Style 4</a>
                </li>
                <li>
                  <a href="#">Portfolio single</a>
                  <ul>
                    <li>
                      <a href="portfolio-single.html">Style 1</a>
                    </li>
                    <li>
                      <a href="portfolio-single2.html">Style 2</a>
                    </li>
                    <li>
                      <a href="portfolio-single3.html">Style 3</a>
                    </li>
                    <li>
                      <a href="portfolio-single4.html">Style 4</a>
                    </li>
                    <li>
                      <a href="portfolio-single5.html">Style 5</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
                <li>
                  <a href="contact2.html">Contact 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      className="morph-shape"
      id="morph-shape"
      data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 800"
        preserveAspectRatio="none"
      >
        <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z" />
      </svg>
    </div>
  </>
  
  )
}

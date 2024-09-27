import React from 'react'

const Banner = () => {
    return (
        <div className="hero-wrap fl-wrap full-height">
            <div className="hero-item">
                <div className="overlay" />
                <div className="bg" data-bg="images/bg/8.jpg" />
            </div>
            <div className="single-carousel-holder fl-wrap full-height">
                <div className="single-carousel">
                    {/* item    */}
                    <div className="item">
                        <div className="overlay" />
                        <div className="bg" data-bg="images/bg/long/10.jpg" />
                        <div className="carousel-item alt">
                            <h3>
                                <a href="#sec2" className="custom-scroll-link">
                                    Let's Start
                                </a>
                            </h3>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                    {/* item end   */}
                    {/* item    */}
                    <div className="item">
                        <div className="overlay" />
                        <div className="bg" data-bg="images/bg/long/9.jpg" />
                        <div className="carousel-item alt">
                            <h3>
                                <a href="portfolio.html">My Work</a>
                            </h3>
                            <p>Allamco laboris nisi ut aliquip</p>
                        </div>
                    </div>
                    {/* item end   */}
                    {/* item    */}
                    <div className="item">
                        <div className="overlay" />
                        <div className="bg" data-bg="images/bg/long/11.jpg" />
                        <div className="carousel-item alt">
                            <h3>
                                <a href="portfolio-single.html">Last Project</a>
                            </h3>
                            <p>Aser velit esse cillum dolore eu fugiat</p>
                        </div>
                    </div>
                    {/* item end   */}
                    {/* item    */}
                    <div className="item">
                        <div className="overlay" />
                        <div className="bg" data-bg="images/bg/long/3.jpg" />
                        <div className="carousel-item alt">
                            <h3>
                                <a href="contact.html">Get In Touch</a>
                            </h3>
                            <p>Excepteur sint occaecat </p>
                        </div>
                    </div>
                    {/* item end   */}
                </div>
                <div className="customNavigation gals">
                    <a className="next-slide transition">
                        <i className="fa fa-angle-right" />
                    </a>
                    <a className="prev-slide transition">
                        <i className="fa fa-angle-left" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Banner
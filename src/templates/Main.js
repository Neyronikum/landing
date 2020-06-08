import React from 'react'

export default function Main (){

    return (
        <div className="Main">
            <div className="preloader">
                <div className="center">
                    <div className="spinner">
                        <div className="blob top"/>
                        <div className="blob bottom"/>
                        <div className="blob left"/>
                        <div className="blob move-blob"/>
                    </div>
                </div>
            </div>
            <header id="home" className="cursor-light">
                <div className="inner-header nav-icon">
                    <div className="main-navigation">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 col-lg-3">
                                    <a className="navbar-brand link" href="#">
                                        <img src="/images/logo.png" className="logo-simple" alt="logo"/>
                                        <img src="/images/logo-white-small.png" className="logo-fixed"
                                             alt="logo"/>
                                    </a>
                                </div>
                                <div
                                    className="col-8 col-lg-9 simple-navbar d-flex align-items-center justify-content-end">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <div className="navbar-nav ml-auto">
                                                <a className="nav-link home active link"
                                                   href="##">HOME</a>
                                                <a className="nav-link scroll link"
                                                   href="##stats-sec">ABOUT</a>
                                                <a className="nav-link scroll link"
                                                   href="##portfolio-sec">WORK</a>
                                                <a className="nav-link scroll link"
                                                   href="##pricing-sec">PRICING</a>
                                                <a className="nav-link scroll link"
                                                   href="##contact-sec">CONTACT</a>
                                                <span className="menu-line"><i aria-hidden="true"
                                                                               className="fa fa-angle-down"/></span>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" className="sidemenu_btn link" id="sidemenu_toggle">
                        <span/>
                        <span/>
                        <span/>
                    </a>
                </div>
                <div className="side-menu hidden side-menu-opacity">
                    <div className="bg-overlay"/>
                    <div className="inner-wrapper">
                        <span className="btn-close" id="btn_sideNavClose"><i/><i/></span>
                        <div className="container">
                            <div className="row w-100 side-menu-inner-content">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <a href="#" className="navbar-brand"><img
                                        src="/images/logo-white.png" alt="logo"/></a>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <nav className="side-nav w-100">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link scroll"
                                                   href="#">HOME</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll"
                                                   href="#">ABOUT</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll"
                                                   href="#">WORK</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll"
                                                   href="#">PRICING</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link scroll"
                                                   href="#">CONTACT</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-12 col-lg-4 d-flex align-items-center">
                                    <div className="side-footer text-white w-100">
                                        <div className="menu-company-details">
                                            <span>+1 631 123 4567</span>
                                            <span>email@website.com</span>
                                        </div>
                                        <ul className="social-icons-simple">
                                            <li><a className="facebook-text-hvr" href="javascript:void(0)"><i
                                                className="fab fa-facebook-f"/> </a></li>
                                            <li><a className="instagram-text-hvr" href="javascript:void(0)"><i
                                                className="fab fa-twitter"/> </a></li>
                                            <li><a className="instagram-text-hvr" href="javascript:void(0)"><i
                                                className="fab fa-youtube"/> </a></li>
                                            <li><a className="instagram-text-hvr" href="javascript:void(0)"><i
                                                className="fab fa-instagram"/> </a></li>
                                        </ul>
                                        <p className="text-white">© 2020 MegaOne. Made With Love by Themesindustry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a id="close_side_menu" href="javascript:void(0);"/>
            </header>
            <section className="banner-slider padding-bottom position-relative cursor-light" id="banner-slider">
                <div className="container">
                    <div className="row banner-slider-row">
                        <div className="col-12 col-lg-6 d-flex align-items-center text-center text-lg-left">
                            <div className="slider-banner-content wow slideInLeft" data-wow-delay=".8s">
                                <h4 className="heading">DIGITAL &amp; SEO <span>AGENCY</span></h4>
                                <p className="text">
                                    Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has
                                    been the industry’s standard dummy. Lorem Ipsum has been the industry’s standard
                                    dummy.
                                </p>
                                <a className="btn pink-btn rounded-pill">LEARN MORE
                                    <span/><span/><span/><span/>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-center">
                            <div className="slider-img-area wow slideInRight" data-wow-delay=".8s" data-depth="0.1">
                                <img src="/slider-img.png" alt="plant" id="slider-inner-img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="svg-div svg-anim">
                    <svg data-depth="0.05" id="banner-main-svg" viewBox="0 0 220 100"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"
                                            gradientTransform="rotate(120)">
                                <stop offset="0%" style={{stopcolor: 'rgb(98,37,181)', stopOpacity: 1}}/>
                                <stop offset="40%" style={{stopcolor: 'rgb(128,33,181)', stopOpacity: 1}}/>
                            </linearGradient>
                        </defs>
                        <rect width={100} height={100} rx={8} fill="url(#grad1)"/>
                    </svg>
                </div>
                <div className="slider-icons">
                    <ul className="slider-social banner-social">
                        <li className="animated-wrap"><a className="animated-element" href="javascript:void(0);"><i
                            className="fab fa-facebook-f"/> </a></li>
                        <li className="animated-wrap"><a className="animated-element" href="javascript:void(0);"><i
                            className="fab fa-twitter"/></a></li>
                        <li className="animated-wrap"><a className="animated-element" href="javascript:void(0);"><i
                            className="fab fa-linkedin-in"/> </a></li>
                        <li className="animated-wrap"><a className="animated-element" href="javascript:void(0);"><i
                            className="lab la-instagram"/> </a></li>
                    </ul>
                </div>
            </section>
            <section className="stats-sec padding-top padding-bottom" id="stats-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 stats-heading-area text-center">
                            <span className="sub-heading">Lorem ipsum is simply dummy text </span>
                            <h4 className="heading">DIGITAL MARKETING <span> &amp; <span
                                className="color">SEO EXPERTS</span></span></h4>
                            <p className="text">
                                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been
                                the industry’s standard dummy. Lorem Ipsum has been the industry’s standard dummy.
                            </p>
                        </div>
                    </div>
                    <div className="row circular-wrap text-center">
                        <div className="col-12 col-lg-4 wow bounceIn">
                            <div id="circle" className="circle" data-value="0.77">
                                <h6 className="counter-num">257%</h6>
                            </div>
                            <h4 className="darkcolor">Increase in Sales year on year</h4>
                        </div>
                        <div className="col-12 col-lg-4 wow bounceIn">
                            <div id="circletwo" className="circle" data-value="0.96">
                                <h6 className="counter-num">96%</h6>
                            </div>
                            <h4 className="darkcolor">Recommendation rate over the year</h4>
                        </div>
                        <div className="col-12 col-lg-4 wow bounceIn">
                            <div id="circlethree" className="circle" data-value="0.75">
                                <h6 className="counter-num">317%</h6>
                            </div>
                            <h4 className="darkcolor">New ventures we became part of</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio-sec padding-top padding-bottom" id="portfolio-sec">
                <div className="container">
                    <div className="row portfolio-heading-area text-center text-lg-left">
                        <div className="col-12 col-lg-6">
                            <h4 className="heading wow fadeInLeft">OUR RECENT WORK <span>&amp; <span
                                className="color">PROJECTS</span></span></h4>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1">
                            <p className="text wow fadeInRight">
                                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been
                                the industry’s standard dummy. Lorem Ipsum has been the industry’s standard dummy.
                            </p>
                        </div>
                    </div>
                    <div className="row position-relative">
                        <div className="col-12">
                            <div className="portfolio-carousel owl-carousel owl-item">
                                <div className="item">
                                    <div className="portfolio-image">
                                        <img src="/images/p1.jpg"/>
                                    </div>
                                    <div className="row no-gutters portfolio-footer padding-top">
                                        <div
                                            className="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">Coco Oil</h4>
                                                <p className="text">Client</p>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-4 d-flex justify-content-center">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">June 2020</h4>
                                                <p className="text">Date</p>
                                            </div>
                                        </div>
                                        <div
                                            className="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">Website SEO</h4>
                                                <p className="text">Services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="portfolio-image">
                                        <img src="/images/p2.jpg"/>
                                    </div>
                                    <div className="row no-gutters portfolio-footer padding-top">
                                        <div
                                            className="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">Wax Beans</h4>
                                                <p className="text">Client</p>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-4 d-flex justify-content-center">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">June 2020</h4>
                                                <p className="text">Date</p>
                                            </div>
                                        </div>
                                        <div
                                            className="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">Website SEO</h4>
                                                <p className="text">Services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="portfolio-image">
                                        <img src="/images/p3.jpg"/>
                                    </div>
                                    <div className="row no-gutters portfolio-footer padding-top">
                                        <div
                                            className="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">Coco Tans</h4>
                                                <p className="text">Client</p>
                                            </div>
                                        </div>
                                        <div className="col-4 col-lg-4 d-flex justify-content-center">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">June 2020</h4>
                                                <p className="text">Date</p>
                                            </div>
                                        </div>
                                        <div
                                            className="col-4 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                                            <div className="portfolio-mini-detail">
                                                <h4 className="portfolio-mini-heading">Website SEO</h4>
                                                <p className="text">Services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="portfolio-links" id="portfolio-arr-left"><i className="fas fa-angle-left"/> </a>
                        <a className="portfolio-links" id="portfolio-arr-right"><i className="fas fa-angle-right"/> </a>
                    </div>
                </div>
            </section>
            <section className="pricing-sec padding-top padding-bottom" id="pricing-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 pricing-heading-area text-center">
                            <span className="sub-heading">Lorem ipsum is simply dummy text </span>
                            <h4 className="heading">CHOOSE YOUR <span className="color">PLAN</span></h4>
                            <p className="text">
                                Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been
                                the industry’s standard dummy. Lorem Ipsum has been the industry’s standard dummy.
                            </p>
                        </div>
                    </div>
                    <div className="row pricing-cards">
                        <div className="col-12 col-md-6 col-lg-3 pricing-card">
                            <div className="pricing-box wow fadeInUp">
                                <div className="pricing-box-header position-relative">
                                    <div className="pricing-header-overlay"/>
                                    <div className="header-content">
                                        <h4 className="pricing-price">4.99</h4>
                                        <i className="lni lni-dollar dollar"/>
                                        <p className="sub-text">Monthly Billing</p>
                                    </div>
                                </div>
                                <div className="pricing-box-detail position-relative">
                                    <div className="pricing-detail-overlay"/>
                                    <ul>
                                        <li>Full access</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>Email Accounts</li>
                                        <li>4 Free Forks Every Months</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 pricing-card active">
                            <div className="pricing-box wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-box-header position-relative">
                                    <div className="pricing-header-overlay"/>
                                    <div className="header-content">
                                        <h4 className="pricing-price">11.95</h4>
                                        <i className="lni lni-dollar dollar"/>
                                        <p className="sub-text">Quarterly Billing</p>
                                    </div>
                                </div>
                                <div className="pricing-box-detail position-relative">
                                    <div className="pricing-detail-overlay"/>
                                    <ul>
                                        <li>Full access</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>Email Accounts</li>
                                        <li>4 Free Forks Every Months</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 pricing-card">
                            <div className="pricing-box wow fadeInUp" data-wow-delay=".5s">
                                <div className="pricing-box-header position-relative">
                                    <div className="pricing-header-overlay"/>
                                    <div className="header-content">
                                        <h4 className="pricing-price">25.99</h4>
                                        <i className="lni lni-dollar dollar"/>
                                        <p className="sub-text">Biannual Billing</p>
                                    </div>
                                </div>
                                <div className="pricing-box-detail position-relative">
                                    <div className="pricing-detail-overlay"/>
                                    <ul>
                                        <li>Full access</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>Email Accounts</li>
                                        <li>4 Free Forks Every Months</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 pricing-card">
                            <div className="pricing-box wow fadeInUp" data-wow-delay=".7s">
                                <div className="pricing-box-header position-relative">
                                    <div className="pricing-header-overlay"/>
                                    <div className="header-content">
                                        <h4 className="pricing-price">45.95</h4>
                                        <i className="lni lni-dollar dollar"/>
                                        <p className="sub-text">Yearly Billing</p>
                                    </div>
                                </div>
                                <div className="pricing-box-detail position-relative">
                                    <div className="pricing-detail-overlay"/>
                                    <ul>
                                        <li>Full access</li>
                                        <li>Unlimited Bandwidth</li>
                                        <li>Email Accounts</li>
                                        <li>4 Free Forks Every Months</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="testimonial-sec padding-top position-relative" id="testimonial-sec">
                <div className="container">
                    <div className="testimonial-area">
                        <div className="row">
                            <div
                                className="col-12 col-lg-5 d-flex justify-content-center align-items-center text-center text-lg-left">
                                <div className="testimonial-details wow fadeInLeft">
                                    <h4 className="heading">SATISFIED <span className="color">CUSTOMERS</span></h4>
                                    <p className="text">
                                        Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum
                                        has been the industry’s standard dummy.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 offset-lg-1">
                                <div className="testimonial-carousel wow fadeInRight">
                                    <div className="testimonial-box owl-carousel owl-theme">
                                        <div className="item text-center">
                                            <div className="icon-holder">
                                                <i className="fas fa-quote-right"/>
                                            </div>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
                                                egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo,
                                                sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor
                                                purus.
                                            </p>
                                            <div className="img-holder">
                                                <img src="/images/test1.jpg"/>
                                            </div>
                                            <h4 className="user-name">Sara Williams</h4>
                                        </div>
                                        <div className="item text-center">
                                            <div className="icon-holder">
                                                <i className="fas fa-quote-right"/>
                                            </div>
                                            <p className="text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
                                                egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo,
                                                sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor
                                                purus.
                                            </p>
                                            <div className="img-holder">
                                                <img src="/images/test2.jpg"/>
                                            </div>
                                            <h4 className="user-name">Julia Miltese</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sponser-sec padding-top padding-bottom" id="sponser-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sponser-tags owl-carousel owl-theme">
                                <div className="item">
                                    <img src="/images/brand4.png"/>
                                </div>
                                <div className="item">
                                    <img src="/images/brand4.png"/>
                                </div>
                                <div className="item">
                                    <img src="/images/brand4.png"/>
                                </div>
                                <div className="item">
                                    <img src="/images/brand4.png"/>
                                </div>
                                <div className="item">
                                    <img src="/images/brand4.png"/>
                                </div>
                                <div className="item">
                                    <img src="/images/brand4.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="blog-sec" className="blog-sec padding-top padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="blog-img wow fadeInLeft">
                                <img src="/images/blog-mokeup.png"/>
                                <img src="/images/blog-mokup-img.png" id="mokeup-img"/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-left">
                            <div className="blog-detail wow fadeInRight">
                                <h4 className="heading">SEO NEWS &amp; BLOGS</h4>
                                <p className="text">Lorem ipsum is simply dummy text of the printing and typesetting.
                                    Lorem Ipsum has been the industry.</p>
                                <a className="btn pink-btn rounded-pill" href="seo-agency/standard-blog.html">LEARN MORE
                                    <span/><span/><span/><span/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-sec padding-top padding-bottom" id="contact-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7 wow fadeInLeft">
                            <h4 className="heading text-center text-lg-left">GET IN TOUCH</h4>
                            <form className="row contact-form">
                                <div className="col-12 col-md-5">
                                    <input type="text" placeholder="Your Name" className="form-control"/>
                                    <input type="email" placeholder="Email Address *" className="form-control"/>
                                    <input type="text" placeholder="Subject" className="form-control"/>
                                </div>
                                <div className="col-12 col-md-7">
                                    <textarea className="form-control" rows={6} defaultValue={"Your Message"}/>
                                </div>
                                <div className="col-12">
                                    <a href="javascript:void(0);" className="btn pink-btn rounded-pill w-100">Send
                                        Message
                                        <span/><span/><span/><span/><span/>
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
                            <div className="contact-details wow fadeInRight">
                                <h4 className="heading">OUR LOCATION</h4>
                                <p className="text">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered .
                                </p>
                                <ul>
                                    <li><i className="las la-map-marker addr"/>123 Park Avenue, New York, United States
                                    </li>
                                    <li><i className="las la-phone-volume phone"/>
                                        <span>+1 631 1234 5678</span>
                                        <span>+1 631 1234 5678</span>
                                    </li>
                                    <li><i className="las la-paper-plane email"/>email@website.com</li>
                                </ul>
                            </div>
                            <img src="/images/contact-background.png" className="contact-background"
                                 alt="contact"/>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-style-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="footer-social text-center text-lg-left ">
                                <ul className="list-unstyled">
                                    <li><a className="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true"
                                                                                                  className="fab fa-facebook-f"/></a>
                                    </li>
                                    <li><a className="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true"
                                                                                                    className="fab fa-twitter"/></a>
                                    </li>
                                    <li><a className="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true"
                                                                                                  className="fab fa-google-plus-g"/></a>
                                    </li>
                                    <li><a className="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true"
                                                                                                    className="fab fa-linkedin-in"/></a>
                                    </li>
                                    <li><a className="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true"
                                                                                                  className="fab fa-instagram"/></a>
                                    </li>
                                    <li><a className="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true"
                                                                                                    className="fab fa-pinterest-p"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <p className="company-about fadeIn">© 2020 MegaOne. Made With Love By <a
                                href="javascript:void(0);">Themesindustry</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="aimated-cursor">
                <div className="cursor">
                    <div className="cursor-loader"/>
                </div>
            </div>
            <span className="scroll-top-arrow"><i className="fas fa-angle-up"/></span>
        </div>
    )

}
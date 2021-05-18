import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <h3>Hey! I am Sravya</h3>
                      <p>
                        I like Web Development and aspiring to become a Full stack web developer
                        <br /> At present i am learning Java Script and Backend and i have little
                        experience in creating websites with
                        HTML5 & CSS3.
                        <br />
                        I am good at Maths and C++.
                      </p>
                      <p>
                        I attended some workshops and learning courses to brush up my
                        skills.I do coding and in my free time i'll be watching movies,learning french and improving my communication skills. I love Travelling{" "}
                        <span role="img">{"🚗💜"}</span> .
                        
                      </p>
                    </div>
                    <ul class="tag_list">
                      <li>Html</li>
                      <li>Css</li>
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>C++</li>
                      <li>C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <center>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-globe" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                  
                    <p>
                      I like to code websites , and enjoy bringing
                      ideas to life in the browser.
                    </p>
                   
                  </div>
                </div>
              </div>
              
              
            </div>
            </center>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
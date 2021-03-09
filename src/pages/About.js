import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="container-fluid aboutColumn">
        <div className="row">
          <div className="col-lg-8 maincolumn">
            <header>
              <h1>About Me</h1>
            </header>
            <hr />
            <div className="row">
                <div className="col-lg-3"><img className="left" src="./images/yenyu.jpeg" alt="Yenyu's picture"/></div>
                <div className="col-lg-9">
                <p>
                Hi, as you see, my name is Yenyu Lai, or you can just call me
                Annie. I have more than five years’ experience working in music
                education field as well as being a musician. Although my working
                history seems have little connection with the programming
                community, my artistic perspective can help me with design your
                webpage. My strength is using HTML, CSS, JavaScript, and
                different kinds of framework to make your webpage accessible,
                stylish, and functional. Other than that, I am good at
                communicating and negotiating with people since I have several
                years of experiences being an instructor. I will communicate
                with my client with their thoughts and nedds for their ideal
                website and make it happen. So, I believe combining my artistic
                and developer’s point of view, I can create a phenomenal web
                page for you.
              </p>
              <p>
                Other fun fact about me is, I love stinky tofu with Taiwnese
                style kimchi just like how Frach people like croissant.
              </p>
                </div>
             
            </div>
          </div>
          <div className="col-lg-4 maincolumn" style={{ background: "white" }}>
            <h4>CV SUMMARY</h4>
            <p>
              <h5>Education</h5>
              <p>
                2020 - 2021 University of Toronto - Full-Stack Web Development
                Program <br />
                2017 - 2020 University of Manitoba - Master of Education
              </p>
              <h5>Skills</h5>
              <p>
                HTML, CSS, JavaScript, BootStrap, jQuery, Node.js, MySql,
                MangoDB
              </p>
              <h5>Know More about Me</h5>
              <a
                className="btn btn-primary"
                href={"./images/Resume for web developer.pdf"}
                role="button"
                target="_blank"
              >
                See Full Resume
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

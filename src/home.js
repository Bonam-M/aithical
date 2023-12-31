import React from 'react';

function Home() {

  /*
   <div className="content_3">
        <div className="inner_container_simple">
          <h1>Welcome to Aithical</h1>
          <p>
          We are here to bridge the gap between cutting-edge AI technology and ethical decision-making.
          </p>
          <p className="mob4">
            <b>Get recommendations for relevant resources and tools to ensure fair and ethical application of your AI/ML models.</b>
            <br /><br />
            Let Aithical help you build an ethical AI solution.
          </p>
          <button className="get_started_btn">Get Started</button>
        </div>
      </div>

      ethics

      fairness
  
  */


  return (
    <div>
      <div className="header">
        <div className="inner_header">
          <a href="home" className="header_img">
          <img
              src="https://i.imgur.com/gUzP4ml.png" alt='Logo loading'
          />
          </a>
          <a href="regulations_and_guidelines" className="header_link">Project Analysis</a> 
          <a href="ethical_aiprojects" class="header_link">Ethical AI Projects</a>         
          <div className="header_spacer"></div>
          <a href="about" className="header_link">About</a>
          <a href="connect" className="header_link">Connect</a>
        </div>
      </div>

      <div class="content">


      <div class="home_txt white main_header_big">
        <h2 class="main_title">
          <span id="green_logo">ai</span>thical
        </h2>
      </div>


      <div class="home_txt yellow">
        <h1>
        We are here to bridge the gap between cutting-edge AI technology and ethical decision-making.
        </h1>
        <p>
        Whether you are a beginner or expert AI practitioner, <span id="green_logo">ai</span>thical can act
        as a centralized tool to find resources to guide you while building fair and ethical AI projects.

        </p>
      </div>

      <div class="home_txt white2">
        
      <p class="main_subtitle">
        Use <span id="green_logo">ai</span>thical to get relevant ethical guidelines in order simplify the implementation of ethics in the development of AI solutions.
      </p>

        <h1>
          Our Features
        </h1>
        <p>
          <b>Guidelines Suggestions: </b> <span id="green_logo">ai</span>thical recommends relevant domain-specific Canadian regulations and guidelines for your AI/ML projects.
        </p>
        <p>
          <b>Similar projects: </b> <span id="green_logo">ai</span>thical’s repository of ethical AI projects similar to yours will give you clear examples of frameworks you can follow.
        </p>
        <div class="home_btn_container">
          <a href="regulations_and_guidelines">
          <div>
            <h3>
            Guidelines Suggestions
            </h3>
            <img
              src="https://imgur.com/5tJUm9y.jpg"
            />
          </div>
          </a>
          <a href="fairness_metrics">
          <div>
            <h3>
            Similar projects
            </h3>
            <img
              src="https://imgur.com/awtiyFE.jpg"
            />
          </div>
          </a>
        </div>
      </div>

      <div class="home_txt yellow">
        <h1>
          About <span id="green_logo">ai</span>thical
        </h1>
        <p>
        To learn more about how <span id="green_logo">ai</span>thical works, read our <a id="w_link" href="about">About</a> section.
        On this page you will be able to view information about the model and other technologies we used to develop this project.
        </p>
      </div>
    </div>

     

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Aithical. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
import React from 'react';

function About(){

    // js code here

    return (
      <body>
      <div class="header">
  
        <div class="inner_header">
  
  
          <a href="home" class="header_img"
            ><img
            src="https://i.imgur.com/gUzP4ml.png" alt='Logo loading'
        /></a>
  
  
          
          <a href="regulations_and_guidelines" class="header_link">Project Analysis</a> 
          <a href="ethical_aiprojects" class="header_link">Ethical AI Projects</a>         
          <div class="header_spacer"></div>
          <a href="about" class="header_link header_page">About</a>
          <a href="connect" class="header_link">Connect</a>
        </div>
      </div>
        
      <div class="content_3">
        <div class="inner_container_simple">
          <h1>
            About
          </h1>
          <h2>
            Welcome to <span id="green_logo">ai</span>thical
          </h2>
          <p>
            <b>Ethical AI, made simple.</b>
            <br /><br />
            As AI innovation keeps growing, we at <span id="green_logo">ai</span>thical recognize ethical considerations 
            can sometimes get lost in the development process. 
            That’s why we do the hard work for you; by compiling relevant AI ethical guidelines and project frameworks in one place, you can focus less on searching and more on creating. 
            Whether you're a researcher, student, developer, data scientist or business professional, <span id="green_logo">ai</span>thical is a companion for AI ethics implementation. 
            <br /><br />         
      
          </p>
          <h2>
            Our Mission
          </h2>
          <p>
            At <span id="green_logo">ai</span>thical, our mission is to <b> simplify the integration of ethics in AI projects development.
 </b>
            <br /><br />
            By providing the newest regulations, guidelines, and project frameworks, we strive to create a future where human good is at the center of every algorithm.
            <br /><br />         
  
          </p>
          <h2>
            How it works
          </h2>
          <p class="mob4">
          <span id="green_logo">ai</span>thical utilizes zero-shot classification model provided in Facebook’s <a href="https://huggingface.co/facebook/bart-large"> BART Large Language Model</a> in order to associate  
          natural language descriptions of projects to an appropriate category. Then we matched the relevant AI regulations, ethical guidelines and projects frameworks.         
          <br></br>
          <br></br>
          Keep up to date with new changes
          on our <a href="https://github.com/Bonam-M/aithical">GitHub Repo!</a>
          </p>
        </div>
      </div>
  
      <div data-loading>
        <span> <span></span> </span>
        <span> <span></span> </span>
      </div>
      <div class="fadeout_container" id="fadeout_container">
        <div class="fadeout"></div>
      </div>
    </body>

    )
}

export default About;
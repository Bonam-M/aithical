import React from 'react';
import { json } from 'react-router-dom';

function ProjectAnalysis(){

  //const [title_1, set_title] = useState(0);
  //const [summary_1, set_summary] = useState(0);

  const set_information = () => {

    var proj_title_ls = localStorage.getItem('project_description_title');
    var proj_description_ls = localStorage.getItem('project_description_input');
    var data = JSON.parse(localStorage.getItem('model_output_dict'));

    console.log("new page");

    let number_regulations, reports_shuffled;
    let number_guidelines, reports_shuffled2;

    number_regulations = data.regulations.length;
    reports_shuffled = data.regulations;

    number_guidelines = data.guidelines.length;
    reports_shuffled2 = data.guidelines;

    console.log("# Regulations:")
    console.log(number_regulations);
    console.log("# Guidelines:")
    console.log(number_guidelines);

    var title_element = document.getElementById("proj_title_ls_element");
    if (title_element !== null){
      title_element.textContent = proj_title_ls;
      console.log("title implemented");
    }
    else{
      console.log("Title HTML not found");
    }
    var desc_element = document.getElementById("proj_description_ls_element");
    if (desc_element !== null){
      desc_element.textContent = proj_description_ls;
      console.log("description implemented");
    }
    else{
      console.log("Description HTML not found");
    }

    var incidents_container = document.getElementById("r_container");
    var guidelines_container = document.getElementById("g_container");

    if (incidents_container !== null){
      incidents_container.textContent = "";
      console.log("regulations implemented");
    }
    else{
      console.log("regulations container not found")
    }

    if (guidelines_container !== null){
      guidelines_container.textContent = "";
      console.log("guidelines implemented");
    }
    else{
      console.log("guidelines container not found")
    }




    if (number_regulations !== 0 && incidents_container !== null){

      
        for (var i = 0; i < number_regulations; i++) {

      
          var incidents_item = document.createElement("div");
          incidents_item.classList.add("incidents_item");

          
      
          var header = document.createElement("h2");
      
          var header_txt = document.createTextNode(reports_shuffled[i].title);
      
          header.appendChild(header_txt);
      
          //var char_length = Math.round(0.00015085686700459 * (window.innerWidth * window.innerHeight) + 148.6);
          var shortened = reports_shuffled[i].summary;//.slice(0, char_length) + "...";
      
          var paragraph = document.createElement("p");
          var paragraph_txt = document.createTextNode(shortened);
          paragraph.appendChild(paragraph_txt);
      
          var btn_row = document.createElement("div");
          btn_row.classList.add("btn_row");
          var btn_r = document.createElement("div");
          btn_r.id = "b" + i.toString();
          btn_row.appendChild(btn_r);
      
          incidents_item.appendChild(header);
          incidents_item.appendChild(paragraph);
          incidents_item.appendChild(btn_row);
      
          incidents_container.appendChild(incidents_item);
      
          var b_id = "b" + i.toString();
      
          var identification = JSON.stringify(reports_shuffled[i]);
          localStorage.setItem(b_id, identification);

          const to_replace = `<div class="read_btns" id="b_id" onclick="localStorage.setItem('selected_b', ${i})"><a id="no_underline" href="regulations_and_guidelines_viewer">Read More</a></div>`;
          document.getElementById(b_id).innerHTML = to_replace;
          console.log(b_id);

        }
      }

      

      if (number_guidelines !== 0 && guidelines_container !== null){

         for (var i = 0; i < number_guidelines; i++) {

      
          var incidents_item = document.createElement("div");
          incidents_item.classList.add("incidents_item");

          
      
          var header = document.createElement("h2");
      
          var header_txt = document.createTextNode(reports_shuffled2[i].title);
      
          header.appendChild(header_txt);
      
          //var char_length = Math.round(0.00015085686700459 * (window.innerWidth * window.innerHeight) + 148.6);
          var shortened = reports_shuffled2[i].summary;//.slice(0, char_length) + "...";
      
          var paragraph = document.createElement("p");
          var paragraph_txt = document.createTextNode(shortened);
          paragraph.appendChild(paragraph_txt);
      
          var btn_row = document.createElement("div");
          btn_row.classList.add("btn_row");
          var btn_r = document.createElement("div");
          btn_r.id = "b" + i.toString();
          btn_row.appendChild(btn_r);
      
          incidents_item.appendChild(header);
          incidents_item.appendChild(paragraph);
          incidents_item.appendChild(btn_row);
      
          guidelines_container.appendChild(incidents_item);
      
          var b2_id = "b2" + i.toString();
      
          var identification2 = JSON.stringify(reports_shuffled2[i]);
          localStorage.setItem(b2_id, identification2);

          const to_replace2 = `<div class="read_btns" id="b2_id" onclick="localStorage.setItem('selected_b', ${i})"><a id="no_underline" href="regulations_and_guidelines_viewer">Read More</a></div>`;
          //document.getElementById(b2_id).innerHTML = to_replace2;
          //console.log(b2_id);

        }
      }
  }; // end of set_information 



    return (
      <body onLoad={set_information}>
      <div class="header">
  
        <div class="inner_header">
  
  
          <a href="home" class="header_img" >
            <img src="https://i.imgur.com/gUzP4ml.png" alt="logo"/>
          </a>
  
  
          
          <a href="regulations_and_guidelines" class="header_link header_page">Project Analysis</a>
          <a href="ethical_aiprojects" class="header_link header_page">Ethical AI Projects</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link">About</a>
          <a href="connect" class="header_link">Connect</a>
        </div>
      </div>
      
      <div class="content">
        <div class="incidents_top">
          <h1 class="top_title">
            Guidelines Suggestions
          </h1>
          <p class="projects_explanation">
            On this page you can see some legal regulations and guidelines that are relevant to your project.
          </p>
          <h3 id="proj_title_ls_element" class="projects_explanation">
            Project Title
          </h3>
          <p id="proj_description_ls_element" class="projects_explanation last_blurb">
            Project Description
          </p>
        </div>

        <div class="home_txt yellow">

        <h1 class="reg_gui_title">Regulations</h1>
        
  
        </div>
        <div class="incidents_container" id="r_container"></div>

        <br/>
        
        
        <div class="home_txt yellow">
        <h1 class="reg_gui_title">Guidelines</h1>
        </div>

        <div class="incidents_container" id="g_container"></div>

      </div>

    </body>
    )
  }
  

  export default ProjectAnalysis;
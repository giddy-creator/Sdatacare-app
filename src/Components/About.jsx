import React from "react";
//import '../index.css'; 
import { BarChartLineFill, BookFill, Mortarboard, PersonLinesFill } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";


// Define your icons and text in an array
const icons = [
  { id: 1, icon: <BarChartLineFill  size={30} color="rgb(234, 181, 112)"/> , title: "Data Analysis", text: "We use up-to-date Softwares to analyze all sorts of data, ranging from social Sciences, Agricultural, Biological and Medical Science among others." },
  { id: 2, icon: <BookFill  size={30} color="rgb(234, 181, 112)"/>, title: "Proposal Writing", text: "We write Proposals for research funding, academics and donations." },
  { id: 3, icon: <Mortarboard  size={30} color="rgb(234, 181, 112)"/>, title: "Training", text: "We train and certify Researchers on data Coding, analysis and report writing using statistical software/Tools such as R=GUI, STATA, SPSS and PYTHON." },
  { id: 4, icon: <PersonLinesFill  size={30} color="rgb(234, 181, 112)"/>, title: "Consultancy", text: "We offer Consultancy on Research,Methodology,Data collection,methods and analysis in all areas of research." },
 
];

function About() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="about-h2 pb-3 border-bottom"style={{color:"rgb(165, 209, 247)"}}>About us</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 py-5 mx-auto">
        {icons.map((item) => (
          <div key={item.id} className="col align-items-center" >

             <div className="mb-4">{item.icon}</div>
        
            <div>

              <h3 className="fw-bold mb-0 fs-2 text-body-emphasis"style = {{color:"rgb(165, 209, 247)"}}>
              {item.title}</h3>
              <p style={{color:"white",
                fontSize:"1.4rem"
                }}
                >{item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
       <Link to="/Contact">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
    
              Contacts ➡️
            </button>
             </Link>
    </div>
  );
}




export default About;
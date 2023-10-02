import { Card,CardBody,CardTitle,CardText,Button } from "reactstrap";
import Pg1 from "../assests/ProjectImg/carRental.png"
import Pg2 from "../assests/ProjectImg/portfolio.png"
import "../components/ResponsiveStyles.css"
import "../components/Styles.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const Projects =()=>{

   useEffect(()=>{
      AOS.init({duration:2000})
  },[]);

 return(
    <>
    <div id="project"  className="row" style={{height:750}}>
      <div data-aos="fade-right" className="col-11 ms-5 mt-3" >
         <p className=' fw-bold fs-2 mt-3' style={{color:"lightskyblue",fontFamily:'Inter'}}>Projects</p>
         <p className='fw-semibold fs-4 mt-4' style={{fontFamily:'Roboto'}}>What I've Built</p>
      </div>


      <div className="col-12">
            <div id="prjCrdContaine" class="container  text-center">
               <div id="prjCrd" class="row d-flex justify-content-between mb-4 ms-2" style={{height:500}}>
                  <div data-aos="fade-right" class="col-lg-6 col-sm-12 col-md-12 ">
                     <Card body className="shadow prjCrds">
                        <img
                           alt="CarRental Project"
                           src={Pg1}
                        />
                        <CardBody>
                           
                           <CardTitle tag="h5">
                              Easy Car Rental Syetem
                           </CardTitle>
                           <CardText className="text-muted">
                              This is a web application which is create for a car rental system.
                              Java , Spring , Ajax , HTML , CSS ,JavaScript , Bootstrap are technologies which used for this application and use MySQL as a database.
                           </CardText>
                           <Button style={{backgroundColor:"lightskyblue"}}>
                              <a className="prjLinks" target="_blank" href="https://github.com/HansikaPerera1117/Car-Rental-System-with-SpringWebMVC">Demo</a>
                           </Button>
                        </CardBody>
                     </Card>
                        </div>
                        
                        <div data-aos="fade-left" class="col-lg-6 col-sm-12 col-md-12">
                           <Card body className="shadow prjCrds">
                              <img
                                 alt="Portfolio Project"
                                 src={Pg2}
                              />
                              <CardBody>
                                 <CardTitle tag="h5">
                                    My Portfolio Version 01
                                 </CardTitle>
                                 <CardText className="text-muted">
                                 This is a web site which is create to describe me and get an idea about me to anyone who wants to hire me.
                                 HTML , CSS , Vanilla JavaScript are technologies which used for this project.
                                 </CardText>
                                 <Button style={{backgroundColor:"lightskyblue"}}>
                                 <a className="prjLinks" target="_blank" style={{color:"black"}} href="https://hansikaperera1117.github.io/My-Portfoliyo/">View</a>
                                 </Button>
                              </CardBody>
                           </Card>
                        
                        </div>
                    </div>
                </div> 
           </div>
    </div>
    </>
 );
}

export default Projects
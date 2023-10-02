import aBImg from "../assests/img2.jpg"
import{SiGmail} from 'react-icons/si';
import{BsTelephoneFill} from 'react-icons/bs';
import{ImLocation2} from 'react-icons/im';
import "../components/ResponsiveStyles.css"
import "../components/Styles.css"
import { NavLink } from "reactstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"



const AboutMe = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <>
        <div id="aboutMe"  className="row" style={{height:650}}>
            <div className="col-lg-8 col-md-6 col-sm-12 ">
                <div id="a-content" className="row  justify-content-center ms-5" style={{height:650}}>
                    
                    <div data-aos="fade-right" className="col align-self-center">
                        <p className=' fw-bold fs-2' style={{color:"lightskyblue",fontFamily:'Inter'}}>About Me</p>
                        <p className='fw-semibold fs-4 mt-5' style={{fontFamily:'Roboto'}}>Who I Am</p>
                        <p className='text-body-secondary mt-5 a-Article'>My name is Hansika Perera. I’am final year student at IJSE-Institute of Software Engineering. I’ve mostly professionally with Java and JavaScript . I’m currently learning more about web development , software development and mobile application development.I like to work as Software Developer and Web Developer.</p>
                            <br/>
                        <p className='text-body-secondary a-Article'>As an undergraduate of Information Technology, I am willing to gain more practical knowledge where I can apply my ongoing academic competencies, skills, and strengths to uplift the company operations in a more serious way. Through my internship, I can learn how employees solve industrial problems.</p>
                    
                        <div class="container text-center fs-4 mt-5">
                        <div id='abmCnt' class="row d-flex justify-content-between " style={{height : 60, width:250}}>
                            <div class="col-2 abmCntItms" >
                            <div className='rounded-circle shadow-lg ' style={{height:60 ,width:60, backgroundColor:'lightskyblue'}}>
                                <NavLink active href="tel:0755646280" className='text-reset'>
                                     <BsTelephoneFill/>
                                </NavLink>
                                </div>
                            </div>
                            <div class="col-2 abmCntItms">
                            <div className='rounded-circle shadow-lg' style={{height:60 ,width:60 ,backgroundColor:'lightskyblue'}}>
                                <NavLink active href="mailto:hansikawebmotech@gmail.com" className='text-reset'>
                                    <SiGmail/>
                                </NavLink>
                                </div>
                            </div>
                            <div class="col-2 abmCntItms">
                            <div className='rounded-circle shadow-lg' style={{height:60 ,width:60, backgroundColor:'lightskyblue'}}><ImLocation2/></div>
                            </div>
                        </div>
                    </div>

                    </div>
                
                </div>
            </div>
            <div data-aos="fade-up" className="col-lg-4 col-md-6 col-sm-12">
                <div className="row justify-content-center" style={{height:650}}>
                    <div id="abtMeImgBg" className='col-11 align-self-center shadow rounded bg-light'>
                        <img 
                            src={aBImg}
                            className='rounded mt-4 ms-2' 
                            alt='/'
                        />
                    </div>
                </div>
            </div>
        
        </div>
        </>
    );
}

export default AboutMe
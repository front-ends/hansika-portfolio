import{FaLinkedinIn ,FaGithub} from 'react-icons/fa';
import{SiHackerrank} from 'react-icons/si';
import{BsFileEarmarkArrowDownFill} from 'react-icons/bs';
import homeImg from "../assests/img1.png"
import "../components/ResponsiveStyles.css"
import "../components/Styles.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Main = ()=>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
    
    return(
        <>
    <div id='main' className="row" style={{ height : 640 }}>
        <div id='mainImg' className="col-lg-6 col-md-12">
            <div id='mImg-row' className='row justify-content-center mt-5'>
                <img
                    id='homeImg'
                    alt="img 01"
                    src={homeImg}
                    style={{
                    height: 530,
                    width: 430,  
                    }}
                />
            </div>
       
        </div>
        <div id='mainArticle' className="col-lg-6 col-md-12 ">
            <div id='mAarticleRow' className="row align-items-center ms-3 " style={{height:600}}>
            <div id='mArticleRow-row'data-aos="zoom-in" className="row justify-content-end">
                            <div id='mArticle' className="col me-5  ">
                            <h1  className='fs-2 fw-semibold' style={{fontFamily:'Inter'}}>Hi I'm Hansika Perera</h1>
                            <h1  className='mt-3' style={{fontSize:55, fontFamily:'Merriweather Sans'}}>FrontEnd Developer</h1>
                            <h1  className='mt-4' style={{fontSize:17,fontFamily:'Roboto'}} >I'm focused on elevating user experiences with intuitive interfaces and flawless frontend execution.</h1>
                
                            <div class="container text-center fs-4 ">
                                <div id='mCnt'  class="row d-flex justify-content-between mt-5 " style={{height : 60, width:400}}>
                                    <div class="col-2 mCntItms  " >
                                    <div className='rounded-circle shadow-lg ' style={{height:60 ,width:60, backgroundColor:'lightskyblue'}}><FaLinkedinIn/></div>
                                    </div>
                                    <div class="col-2 mCntItms">
                                    <div className='rounded-circle shadow-lg' style={{height:60 ,width:60 ,backgroundColor:'lightskyblue'}}><FaGithub/> </div>
                                    </div>
                                    <div class="col-2 mCntItms">
                                    <div className='rounded-circle shadow-lg' style={{height:60 ,width:60, backgroundColor:'lightskyblue'}}><SiHackerrank/></div>
                                    </div>
                                    <div class="col-2 mCntItms">
                                    <div className='rounded-circle shadow-lg' style={{height:60 ,width:60 ,backgroundColor:'lightskyblue'}}><BsFileEarmarkArrowDownFill/></div>       
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
           
            </div>
            
        </div>
    </div>
        </>
    );
}
    
    export default Main
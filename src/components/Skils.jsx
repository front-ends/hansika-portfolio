import {Card,CardImg,CardBody,CardTitle} from "reactstrap";
import htmlLogo from '../assests/Skills/html-5.png'
import cssLogo from '../assests/Skills/css-3.png'
import jsLogo from '../assests/Skills/java-script.png'
import reactLogo from '../assests/Skills/React.png'
import javaLogo from '../assests/Skills/java.png'
import javaeeLogo from '../assests/Skills/JavaEE.png'
import hibernateLogo from '../assests/Skills/hibernate_logo.png'
import mongoDBLogo from '../assests/Skills/MongoDB.png'
import nodeJSLogo from '../assests/Skills/NodeJs.png'
import expressLogo from '../assests/Skills/ExpressJS.png'
import figmaLogo from '../assests/Skills/figma.png'
import mysqlLogo from '../assests/Skills/MySQL.png'
import springLogo from '../assests/Skills/Spring.png'
import bootstrapLogo from '../assests/Skills/Bootstrap.png'
import reactStrapLogo from '../assests/Skills/Reactstap.png'

import "../components/ResponsiveStyles.css"
import "../components/Styles.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


const cardArray = [
    {
        card : <Card className="shadow skillCard">
                <CardImg
                alt="HTML Logo"
                src={htmlLogo}
                top
                className="cardImg mt-3"
                />
                <CardBody className="row align-items-end">
                    <CardTitle tag="h5">
                        HTML
                    </CardTitle>
                </CardBody>
            </Card>
    },

    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="CSS Logo"
                    src={cssLogo}
                    top
                    className="cardImg mt-3"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            CSS
                        </CardTitle>
                    </CardBody>
                </Card>
    },
    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="JS Logo"
                    src={jsLogo}
                    top
                    className="mt-3 cardImg"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            JavaScript
                        </CardTitle>
                    </CardBody>
                </Card>
    },

    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="React Logo"
                    src={reactLogo}
                    top
                    className="mt-4 cardImg"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            React JS
                        </CardTitle>
                    </CardBody>
                </Card>
    },

    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="Java Logo"
                    src={javaLogo}
                    top
                    className="cardImg mt-2"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            Java
                        </CardTitle>
                    </CardBody>
                </Card>
    },
    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="JavaEE Logo"
                    src={javaeeLogo}
                    top
                    className="cardImg mt-3"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            JavaEE
                        </CardTitle>
                    </CardBody>
                </Card>
    },

    {
        card :  <Card className="shadow skillCard">
                    <CardImg
                    alt="Spring Logo"
                    src={springLogo}
                    top
                    className="cardImg mt-3"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            Spring
                        </CardTitle>
                    </CardBody>
                </Card>
    },

    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="MySQL Logo"
                    src={mysqlLogo}
                    top
                    style={{height:150}}
                    className="cardImg mt-2"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5" >
                            MySQL
                        </CardTitle>
                    </CardBody>
                </Card>
    },

    {
        card :   <Card className="shadow skillCard">
                    <CardImg
                    alt="Hibernate Logo"
                    src={hibernateLogo}
                    top
                    className="cardImg mt-2"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            Hibernate
                        </CardTitle>
                    </CardBody>
                </Card>
    },

    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="MongoDB Logo"
                    src={mongoDBLogo}
                    top
                    className="cardImg mt-2"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            MongoDB
                        </CardTitle>
                    </CardBody>
                </Card>
    },

    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="Figma Logo"
                    src={figmaLogo}
                    top
                    className="mt-3 cardImg"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            Figma
                        </CardTitle>
                    </CardBody>
                </Card>
    },
    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="Bootstrap Logo"
                    src={bootstrapLogo}
                    top
                    className="mt-4 cardImg"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            Bootstrap
                        </CardTitle>
                    </CardBody>
                </Card>
    },
    {
        card : <Card className="shadow skillCard">
        <CardImg
                    alt="ReactStrap Logo"
                    src={reactStrapLogo}
                    top
                    className="cardImg mt-3"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            ReactStrap
                        </CardTitle>
                    </CardBody>
                </Card>
    },
    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="Node JS Logo"
                    src={nodeJSLogo}
                    top
                    className="mt-5 cardImg"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            Node JS
                        </CardTitle>
                    </CardBody>
                </Card>
    },
    {
        card : <Card className="shadow skillCard">
                    <CardImg
                    alt="Express Logo"
                    src={expressLogo}
                    top
                    className="mt-3 cardImg"
                    />
                    <CardBody className="row align-items-end">
                        <CardTitle tag="h5">
                            Express
                        </CardTitle>
                    </CardBody>
                </Card>
    }

];


const skillCards = cardArray.map(card =>
    <div class="col">
        {card.card}
    </div>
);



const Skils = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return(
        <>
        <div id="skills"  className="row" style={{height:950}}>
           <div data-aos="fade-right" className="col-11  ms-5 mt-3" >
           <p className=' fw-bold fs-2 mt-3' style={{color:"lightskyblue",fontFamily:'Inter'}}>Skills</p>
           <p className='fw-semibold fs-4 mt-4'style={{fontFamily:'Roboto'}}>What Can I Do</p>
           </div>

           <div data-aos="zoom-in"  className="col-12">
                <div id="skillGridContainer" class="container text-center">
                    <div id="skillGrid" class="row row-cols-3  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-5 row-cols-xxl-5 g-2 g-lg-5 ms-3 me-3">
                        {skillCards}
                    </div>
                </div> 
           </div>
        </div>

        


        </>
    );
}

export default Skils
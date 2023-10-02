import { Form,FormGroup,Input,Label,Button} from "reactstrap";
import contactImg from "../assests/contact.jpg"
import "../components/ResponsiveStyles.css"
import "../components/Styles.css"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const Contact =()=>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

    return(
       <>
       <div id="contact" className="row " style={{height:660}}>
            <div data-aos="fade-right" className="col-lg-6 col-md-12 col-sm-12">
                <div className="col  ms-5 mt-5 mb-3" >
                    <p className=' fw-bold fs-2 mt-3' style={{color:"lightskyblue",fontFamily:'Inter'}}>Contact</p>
                    <p className='fw-semibold fs-4 mt-4' style={{fontFamily:'Roboto'}}>Get In Touch</p>
                </div>

                <div id="formRow" className="row ms-5 mt-5 me-5 " style={{height:365}}>
                    <div id="formCol" className="col  rounded ms-5 " style={{backgroundColor:"lightgray"}}>
                        <Form className="mt-3">
                            <FormGroup floating>
                            <Input
                                id="inpName"
                                name="name"
                                placeholder="Name"
                                type="text"
                            />
                            <Label for="inpName">
                                Name
                            </Label>
                            </FormGroup>
                            {' '}
                            <FormGroup floating>
                            <Input
                                id="inpEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <Label for="inpEmail">
                            Email
                            </Label>
                            </FormGroup>
                            {' '}

                            <FormGroup floating>
                            <Input
                                id="inpPhoneNo"
                                name="phoneNo"
                                placeholder="PhoneNo"
                                type="Number"
                            />
                            <Label for="inpPhoneNo">
                            Phone No
                            </Label>
                            </FormGroup>
                            {' '}

                            <FormGroup floating>
                            <Input
                                id="inpMessage"
                                name="message"
                                placeholder="Message"
                                type="textarea"
                            />
                            <Label for="inpMessage">
                            Message
                            </Label>
                            </FormGroup>
                            {' '}

                            <Button style={{width:100,backgroundColor:"lightskyblue" ,color:"black"}}>
                            Send
                            </Button>
                        </Form>
                    </div>
                </div>  
            </div>

            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 ">
                <div id="cntImgDiv" className="row ms-3 mt-5">
                    <div id="cntImgDivCol">
                    <img 
                        id="contactImg"
                        src={contactImg}
                        className='' 
                        alt='contact image'
                    />
                    </div>
                </div>
            </div>
       </div>
       </>
    );
   }
   
   export default Contact
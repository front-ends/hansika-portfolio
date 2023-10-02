
import React, { useState } from 'react';
import Logo from "../assests/logo.png"
import {Navbar,NavbarBrand,NavbarToggler, Nav,NavItem,NavLink,Collapse} from 'reactstrap';
import "../components/ResponsiveStyles.css"
import "../components/Styles.css"



function NavBar(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (
    <div>
      <Navbar {...args} className='bg-white shadow fixed-top'>
      <NavbarBrand href="/">
      <img
        alt="logo"
        src={Logo}
        style={{
          height: 70,
          width: 70,
          marginLeft : 30
        }}
      />
    </NavbarBrand>
                <Nav id='NavBar-lg' className='fs-6 text-body-dark '>
                <NavItem>
                    <NavLink active href="#main" className='text-reset'>
                          Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#aboutMe" className='text-reset'>
                    About Me
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#skills" className='text-reset'>
                  Skills
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#project" className='text-reset'>
                   Projects
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact" className='text-reset'>
                   Contact
                    </NavLink>
                </NavItem>
                </Nav>


       {/* responsive part */}

        <NavbarToggler className='NavBar-sm' onClick={toggle} />
        <Collapse className='NavBar-sm' isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
                     <NavLink active href="#main" className='text-reset'>
                           Home
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="#aboutMe" className='text-reset'>
                     About Me
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="#skills" className='text-reset'>
                   Skills
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="#project" className='text-reset'>
                    Projects
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink href="#contact" className='text-reset'>
                   Contact
                    </NavLink>
                 </NavItem>   
          </Nav>  
        </Collapse>

      </Navbar>
    </div>
  );

}

export default NavBar;
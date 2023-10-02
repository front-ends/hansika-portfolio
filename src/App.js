import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BsFillArrowUpCircleFill} from 'react-icons/bs';
import {NavLink} from 'reactstrap';
import NavBar from './components/NavBar';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Skils from './components/Skils';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <head>

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Merriweather+Sans:wght@700&family=Roboto&family=Ubuntu&display=swap" rel="stylesheet"/>
       </head>
      <body className='container-fluid'>
        <header>
          <NavBar/>
        </header>
        <main>

        <div id='arrow' className='fixed fs-2 shadow text-center rounded-circle ' style={{height:60,width:60,backgroundColor:"lightskyblue"}}>
          <NavLink id='arrowNavLink'active href="#main" className='text-reset'>
              <BsFillArrowUpCircleFill/>
          </NavLink>
          
          </div>

          <Main/>
          <AboutMe/>
          <Skils/>
          <Projects/>
          <Contact/>
        </main>
        <footer>
            <Footer/>
        </footer>
      </body>
    </div>
  );
}

export default App;

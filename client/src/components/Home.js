import React from 'react'

import PeterWelcomeImg from '../images/peterwelcomegif.gif'
import PeterWelcomeVid from '../images/portfoliowelcome6.gif'
import ViviDemo4 from '../images/ViviDemo4.gif'
import RickDemo2 from '../images/RickDemo2.gif'
import EsperantoDemo4 from '../images/EperantoDemo4.gif'
import ConsoleLogDemo1 from '../images/ConsoleLogDemo1.gif'
import LinkImg from '../images/Link.png'
import GithubImg from '../images/github.png'
import LinkedinImg from '../images/Linkedin.png'
import GmailImg from '../images/Gmail.png'
import HobbiesVid from '../images/Hobbies.gif'

import ReactGif from '../images/React.gif'
import JavaScriptGif from '../images/JavaScript.gif'
import HTMLGif from '../images/HTML.gif'
import CSSGif from '../images/CSS.gif'
import SassGif from '../images/Sass.gif'
import BootStrapGif from '../images/Bootstrap.gif'
import PythonGif from '../images/Python.gif'
import NodeGif from '../images/Node.gif'
import MongoDBGif from '../images/MongoDB.gif'
import ExpressGif from '../images/Express.gif'
import MongooseGif from '../images/Mongoose.gif'
import DjangoGif from '../images/Django.gif'
import PostgreSQLGif from '../images/PostgreSQL.gif'
import InsomniaGif from '../images/Insomnia.gif'
import YarnGif from '../images/Yarn.gif'
import NPMGif from '../images/npm.gif'
import GithubGif from '../images/Github.gif'
import GitGif from '../images/Git.gif'
import NetlifyGif from '../images/Netlify.gif'
import HerokuGif from '../images/Heroku.gif'

// import { Github } from 'react-icons/AiOutlineGithub'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Fade from 'react-reveal/Fade';


const Home = () => {

  return (
    <div className='site-wrapper'>
    <section id='welcome'>
    <Container fluid id="home-container">
    <Row>
    <div className="logo-wrapper">
    <img src={PeterWelcomeImg} className="logo" alt="porfoliowelcome"></img>
    </div>
    </Row>
    </Container>
    </section>
  
    <section id='aboutme'>
    <Container fluid id="about-container">
    <Row>
    <div className="about-wrapper">
    <h2 class="display-3">ABOUT ME</h2>
    </div>
    <div className='pback'>
    <p className='lead'>I am a <strong>dedicated</strong>, capable and versatile <strong>Full Stack Developer</strong> with a <strong>strong desire </strong> to further <strong>learn</strong> Software Engineering. Self-teaching using online learning tools such as Udemy sparked a desire to retrain as a Full Stack Developer by enrolling onto a full time bootcamp at General Assembly.</p>
    <p className='lead'> I enjoy both the <strong>creativity</strong> and the act of <strong>building</strong> in Software Engineering. I am <strong>confident</strong> in solving significant <strong>complex problems</strong> at speed and being a <strong>reliable</strong> team player.</p>
    <p className='lead'> With over seven years of working experience in marketing, management and entrepreneurship, I have honed the key <strong>administrational</strong>, <strong>organisational</strong>, and interpersonal <strong>skills</strong> gained from my career and successfully <strong>applied</strong> them to my <strong>education</strong> in Software Engineering.</p>
    <p className='lead'>I am seeking an <strong>opportunity</strong> where I can take advantage of my experience, education and <strong>technical skills</strong> to <strong>make a valuable contribution</strong> to an organisation while continuing my growth.</p>
    </div>
    </Row>
    </Container>
      </section>

    <section id='skills'>
    <Container fluid id="skills-container">
    <Row>
    <div className="skills-wrapper">
    <h2 class="display-3">TECHNICAL SKILLS</h2>
    </div>

    <div className="skills-wrapper">
    <h2 class="display-5">Front End</h2>
    </div>

    <div className="skillslogo-wrapper">
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={ReactGif} />
  <Card.Body>
    <h1 className='cardtext'>React</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={JavaScriptGif} />
  <Card.Body>
    <h1 className='cardtext'>JavaScript</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={HTMLGif} />
  <Card.Body>
    <h1 className='cardtext'>HTML</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={CSSGif} />
  <Card.Body>
    <h1 className='cardtext'>CSS</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={SassGif} />
  <Card.Body>
    <h1 className='cardtext'>SASS</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={BootStrapGif} />
  <Card.Body>
    <h1 className='cardtext'>Bootstrap</h1>
  </Card.Body>
  </Card>
    </div>

    <div className="skills-wrapper">
    <h2 class="display-5">Back End</h2>
    </div>
    
    <div className="skillslogo-wrapper">
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={PythonGif} />
  <Card.Body>
    <h1 className='cardtext'>Python</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={NodeGif} />
  <Card.Body>
    <h1 className='cardtext'>Node.js</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={MongoDBGif} />
  <Card.Body>
    <h1 className='cardtext'>MongoDB</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={ExpressGif} />
  <Card.Body>
    <h1 className='cardtext'>Express</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={MongooseGif} />
  <Card.Body>
    <h1 className='cardtext'>Mongoose</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={DjangoGif} />
  <Card.Body>
    <h1 className='cardtext'>Django</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={PostgreSQLGif} />
  <Card.Body>
    <h1 className='cardtext'>PostgreSQL</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={InsomniaGif} />
  <Card.Body>
    <h1 className='cardtext'>Insomnia</h1>
  </Card.Body>
  </Card>
    </div>

    <div className="skills-wrapper">
    <h2 class="display-5">Storage, Package and Version Control</h2>
    </div>

    <div className="skillslogo-wrapper">
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={YarnGif} />
  <Card.Body>
    <h1 className='cardtext'>Yarn</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={NPMGif} />
  <Card.Body>
    <h1 className='cardtext'>NPM</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={GithubGif} />
  <Card.Body>
    <h1 className='cardtext'>Github</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={GitGif} />
  <Card.Body>
    <h1 className='cardtext'>Git</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={NetlifyGif} />
  <Card.Body>
    <h1 className='cardtext'>Netlify</h1>
  </Card.Body>
  </Card>
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={HerokuGif} />
  <Card.Body>
    <h1 className='cardtext'>Heroku</h1>
  </Card.Body>
  </Card>
    </div>
    </Row>
    </Container>
    </section>

    




    <section id='projects'>
    <Container fluid id="projects-container">
    <Row>
    <div className="projects-wrapper">
    <h2 class="display-3">Projects</h2>
    </div>

    <div className="projects-wrapper">
    <h2 class="display-5">Vivi's Adventure</h2>
    </div>

    <Fade top>
    <div className='pback'>
    <p className='lead'><strong>Solo project - Timeframe: 1 week.</strong></p>
    <p className='lead'>Built a <strong>JavaScript</strong> grid-based game with <strong>HTML</strong> and <strong>CSS</strong>. I chose to build a Final Fantasy themed version of Frogger because it has multiple <strong>Set Intervals</strong>, and it cemented my knowledge of <strong>JavaScript</strong> and <strong>CSS</strong>.</p>
    </div>
    <div className="demo-wrapper">
    <img src={ViviDemo4} className="demo" alt="vividemo"></img>
    </div>
    </Fade>
    <div className="demologo-wrapper">
    <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/PeterBid/Vivi-Adventure-Game">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={GithubImg} />
  <Card.Body>
    <h1 className='cardtext'>Repo</h1>
  </Card.Body>
  </Card>
  </a>
  <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://peterbid.github.io/Vivi-Adventure-Game/">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={LinkImg} />
  <Card.Body>
    <h1 className='cardtext'>Visit</h1>
  </Card.Body>
  </Card>
  </a>
  </div>
    

    <div className="projects-wrapper">
    <h2 class="display-5">Rick and Morty</h2>
    </div>

    <Fade top>
    <div className='pback'>
    <p className='lead'><strong>Pair Programming - Timeframe: 48 hours.</strong></p>
    <p className='lead'>Built a <strong>React</strong> app using A Rick and Morty <strong>API</strong>. The project was beneficial for cementing my knowledge of <strong>React</strong> learning to <strong>pair code</strong> and work collaboratively to achieve a common goal.</p>
    </div>
    <div className="demo-wrapper">
    <img src={RickDemo2} className="demo" alt="rickdemo"></img>
    </div>
    </Fade>
    <div className="demologo-wrapper">
    <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/PeterBid/rick-and-morty-website">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={GithubImg} />
  <Card.Body>
    <h1 className='cardtext'>Repo</h1>
  </Card.Body>
  </Card>
  </a>
  <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://rick-and-morty-sei61.netlify.app/">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={LinkImg} />
  <Card.Body>
    <h1 className='cardtext'>Visit</h1>
  </Card.Body>
  </Card>
  </a>
  </div>

  <div className="projects-wrapper">
    <h2 class="display-5">Esperanto</h2>
    </div>

    <Fade top>
    <div className='pback'>
    <p className='lead'><strong>Group Project (4 people) - Timeframe: 1 week.</strong></p>
    <p className='lead'>Built a <strong>Full Stack Mongoose</strong>, <strong>Express</strong> and <strong>React</strong> app. As a group, we created an app to help people find and book language teachers across a wide range of international languages for one to one <strong>online education</strong>.</p>
    </div>
    <div className="demo-wrapper">
    <img src={EsperantoDemo4} className="demo" alt="esperantodemo1"></img>
    
    </div>
    </Fade>
    <div className="demologo-wrapper">
    <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/PeterBid/Esperanto/tree/development">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={GithubImg} />
  <Card.Body>
    <h1 className='cardtext'>Repo</h1>
  </Card.Body>
  </Card>
  </a>
  <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://new-esperanto.herokuapp.com/">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={LinkImg} />
  <Card.Body>
    <h1 className='cardtext'>Visit</h1>
  </Card.Body>
  </Card>
  </a>
  </div>


  <div className="projects-wrapper">
    <h2 class="display-5">Console Logs</h2>
    </div>

    <Fade top>
    <div className='pback'>
    <p className='lead'><strong>Group Project (3 people) - Timeframe: 1 week.</strong></p>
    <p className='lead'>Built a <strong>Full Stack</strong> app using <strong>Django</strong>, <strong>Python</strong>, <strong>SQL</strong> and <strong>Insomnia</strong> for the Back End and <strong>React</strong>, <strong>Cloudify</strong>, <strong>SCSS</strong> and <strong>React-Bootstrap</strong> for the Front End. The app is a social media platform where people can share and upload video clips of gaming footage related to specific games, and allow other users to comment on them.</p>
    </div>
    <div className="demo-wrapper">
    <img src={ConsoleLogDemo1} className="demo" alt="consolelogdemo1"></img>
    </div>
    </Fade>
    <div className="demologo-wrapper">
    <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/PeterBid/Console-Logs-Video-App/tree/development">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={GithubImg} />
  <Card.Body>
    <h1 className='cardtext'>Repo</h1>
  </Card.Body>
  </Card>
  </a>
  <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://console-logs.herokuapp.com/">
  <Card style={{ width: '7rem' }}>
  <Card.Img variant="top" src={LinkImg} />
  <Card.Body>
    <h1 className='cardtext'>Visit</h1>
  </Card.Body>
  </Card>
  </a>
  </div>
    
    </Row>
    </Container>
      </section>

      <section id='interests'>
    <Container fluid id="interests-container">
    <Row>
    <div className="interests-wrapper">
    <h2 class="display-3">Interests</h2>
    </div>
    <div className='pback'>
    <p className='lead'>In my spare time I like to keep busy. I am currently learning <strong>Luganda</strong> and continue to hone my skills on the <strong>piano</strong>. I also love reading <strong>history</strong> and finding out about how many interconnected events impact the present day. When I do find some free time I enjoy <strong>socialising</strong> with my friends, typically playing <strong>games</strong> of all genres which I think appeal to the analytical thinker in me!</p>
    <p className='lead'> I also have a keen interest in <strong>sport</strong>. I play <strong>football</strong> regularly enjoying the teamwork and camaraderie that comes from the game.</p>
    <p className='lead'> Above all, <strong>humour</strong> is what I value most and the ability to <strong>laugh</strong> at ones self as well as the crazy twists and turns that life throws at us all is what sees me through the thick and thin of things.If you would like to talk shop over a drink or fancy learning to play the keyboard like Elton John, <strong>please do get in touch</strong>.</p>
    </div>
    <div className="hobbies-wrapper">
    <img src={HobbiesVid} className="hobbyvid" alt="hobbiesvid"></img>
    </div>
    </Row>
    </Container>
      </section>    
    
    <section id='contact'>
    <Container fluid id="contact-container">
    <Row>
    <div className="contact-wrapper">
    <h2 class="display-3">Contact Me</h2>
    </div>

    <div className="contact-wrapper">
    <p class="lead">If you would like to learn more about me and my work, please do not hesitate to get into contact.</p>
    <p class="lead">My Gmail is <strong>peterbid21@gmail.com</strong>.</p>
    </div>

    <div className="demologo-wrapper">
    <a className='sitelink' target="_blank" rel="noopener noreferrer" href="mailto:peterbid21@gmail.com">
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={GmailImg} />
  <Card.Body>
    <h1 className='cardtext'>My Gmail</h1>
  </Card.Body>
  </Card>
  </a>
    <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://github.com/PeterBid">
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={GithubImg} />
  <Card.Body>
    <h1 className='cardtext'>My Github</h1>
  </Card.Body>
  </Card>
  </a>
  <a className='sitelink' target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/peter-bid">
  <Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={LinkedinImg} />
  <Card.Body>
    <h1 className='cardtext'>My Linkedin</h1>
  </Card.Body>
  </Card>
  </a>
  </div>
    
    </Row>
    </Container>
      </section>

    </div>

    

  )
}

export default Home
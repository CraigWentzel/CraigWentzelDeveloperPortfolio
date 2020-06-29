//Import the Link API to support client-side navigation

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import myImage2 from '../components/Minesweeper'
import myImage3 from '../components/Online'
import myImage4 from '../components/iTunes'

export default () => (
<Layout>
    <h2>Technology</h2><br></br>
       <p>Over the course of my bootcamp, I was exposed to various languages and frameworks listed below.<br></br>
           We focussed on using the <b>MERN Stack.</b></p>
       <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.JS</li>
            <li>Node.JS</li>
            <li>Next.JS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>REST APIs</li>

      </ul>
<h2>Capstone Projects</h2><br></br>

<p> For the duration of the course, in each module we had coding tasks and Capstone Projects.<br></br>
    Capstone Projects would be a major development task in the middle or at the end of a major module<br></br>
    The focus of Capstone Projects was to give you a chance to showcase what you have learnt.<br></br>
    From here the opportunity presented to you was to develop a component or programme using the Technology taught to you.</p> 


<h2>Capstone 1: Online Shopping Cart</h2><br></br>

<p>Using basic HTML5, CSS3 and JavaScript we were asked to develop an Online Shopping Platform.<br></br>
   I opted to use BootStrap to help with the implementation of my store and successfully completed it.<br></br>
   The project was uploaded to github accessible from this <Link href="//github.com/CraigWentzel/CapStoneProjL1"><a>link</a></Link></p><br></br>


<Image src="/static/Online.jpg/" thumbnail/><br></br><br></br>

<h2>Capstone 2: Develop a MineSweeper Game</h2><br></br><br></br>

 <p> After being upskilled in both basic and advanced JavaScript.<br></br>
     My next Capstone look at creating an app for Minesweeper.
     We were asked to develop, test and then to deploy it to Heroku.<br></br>
     The Heroku Deployment is accessible <Link href="//ancient-dusk-16197.herokuapp.com/"><a> here </a></Link></p><br></br>

<Image src="/static/Minesweeper.JPG/" thumbnail/><br></br><br></br>

<h2>Capstone 3: Develop a FullStack Application using Express and React.JS</h2><br></br>

<p> After extensive exposure to both Express and React.JS<br></br>
    We were tasked with building a Full Stack Application using the above mentioned technologies.<br></br>
    The app needed to be an iTunes Search App, using Express as our backend server that pulled in data from an iTunes API.<br></br>
    The frontend is built using React.JS to allow a user to search for content on iTunes.<br></br>
    If a search is successful on the frontend, data would be fetched from the Express Server and returned to the user.<br></br>
    The Heroku Deployment is accessible<Link href="//craigitunes.herokuapp.com/"><a> here</a></Link></p><br></br>
    <Image src="/static/iTunes.JPG/" thumbnail/><br></br><br></br>


<h2>Capstone 4: Develop a FullStack MERN Application using CRUD Actions</h2><br></br>

<p> At the end of our course we were required to build a Full Stack MERN Application.<br></br>
    The app made use of MongoDB, Express, ReactJS and NodeJS.<br></br>
    I created a Movie Database Application where I can use a Database and a React Front-End to manage movies.<br></br>
    The movies are from my personal collection which is either DVD Or Blu Ray.<br></br>
    I can use the application to manage data and each item is either added, updated or deleted to and from the database.<br></br>
    
    The Heroku Deployment is accessible <Link href="//mymoviescap3.herokuapp.com/"><a>here</a></Link></p><br></br>
    <Image src="/static/Movies.JPG/" thumbnail/><br></br>

</Layout>
)
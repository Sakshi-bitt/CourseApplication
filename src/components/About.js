import React,{ useEffect} from 'react';
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import { Container,Button } from 'reactstrap';

    
    const About = () => {
            useEffect(()=>{
                document.title="About || Course Application";  
         },[]);
        return (
            <div class="jumbotron text-center bg-secondary" >
                
                    <h1>About Application </h1>
                    <p>This application is mainly developed to learn the basic understanding of how to implemet CRUD operations using Spring boot as a backend and the react js as a frontend language. </p>
            </div>
        );
    };
    
    export default About;



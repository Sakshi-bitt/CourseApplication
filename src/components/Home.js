import React,{ useEffect} from 'react';
//import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container,Button } from 'reactstrap';

    
    const Home = () => {
            useEffect(()=>{
                document.title="Home || Course Application";  
         },[]);
        return (
            <div class="jumbotron text-center bg-secondary">
                
                    <h1>React Application </h1>
                    <p>Developed by Sakshi Gupta for basic understanding of React</p>
                    <div class="container">
                        <h color="primary" outline>Start Using the Application</h>
                    </div>
                   
            </div>
        );
    };
    
    export default Home;
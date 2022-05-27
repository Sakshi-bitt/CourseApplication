import React,{ useEffect} from 'react';
//import Jumbotron from 'react-bootstrap/Jumbotron'
//import { Container,Button } from 'reactstrap';

    
    const Contact = () => {
            useEffect(()=>{
                document.title="About || Course Application";  
         },[]);
        return (
            <div class="jumbotron text-center bg-secondary" >
                
                    <h1>Contact Details</h1>
                    <p>Phone no.:1234567891 </p>
                    <p>Email Address.:abc@gmail.com</p>
                    <p>Email Address.:efg@gmail.com </p>
                    
            </div>
        );
    };
    
    export default Contact;



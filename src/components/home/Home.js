import React, {useState} from 'react' ;
import { Container, Heading } from '../fragments/mainLayout';
import './home.css' ;
import Ask from '../ask/Ask' ;
import Data from '../data'
function Home(){
    // const [questions,addQuestion]=useState([]) ;
    // function handleAdd(event){
    //     addQuestion((prev)=>{
    //         return [...prev,newQuestion]
    //     })
    //     console.log(questions) ;
    //     event.preventDefault() ;   
    // }

    return(
        <Container>
        <Heading>Top Questions</Heading>
        {console.log(Data)}
        <div className="question">
            <h1>What is React?</h1>
            <p>I just wanted to know about React so please tell.</p>
        </div>
        </Container>
    )
}

export default Home ;
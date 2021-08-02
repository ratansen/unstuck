import React, {useState} from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import './ask.css' ;
import { Link } from 'react-router-dom';
import timeSince from '../date'
import {db, auth } from '../../firebase/firebase.utils'
import {username} from '../../App'

function getDay(){
    var today = new Date();
    var options={
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US",options);
    return day;
}


function Ask(props) {
    const [text,setText]=useState("")

    function handleChange(event){
        setText(event.target.value) ;
    }
    function handleAdd(event){
        db.collection('questionDB').add({questionBody:text, askedBy:props.user.displayName, postedOn: Date.now()})
        db.collection('userDB').doc(props.user.email).collection('myQuestions').add({questionBody:text, askedBy:props.user.displayName, postedOn: Date.now()}) ;
        // const id =(Date.now()+Math.ceil(100000*Math.random()).toString()) ;
        // event.preventDefault() ;  
        console.log("usename in ask :",props.user.displayName)
     
    }
    return (
        <Container>
            <Heading>
                Add a question 
            </Heading>
            <div>
                <form>
                    <textarea onChange={handleChange} name="question" placeholder="Write your question" rows="5" />
                    <Link to='/'>
                    <button onClick={handleAdd}>ASK</button>
                    </Link>
                </form>
            </div>
            <div>
                {text}
            </div>
        </Container>
    )
}
export default Ask;

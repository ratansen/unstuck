import React, { useState } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import './ask.css';
import { Link } from 'react-router-dom';
import timeSince from '../date'
import { db, auth } from '../../firebase/firebase.utils'
import { username } from '../../App';
import ReactMarkdown from 'react-markdown';

function getDay() {
    var today = new Date();
    var options = {
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-US", options);
    return day;
}


function Ask(props) {
    const [text, setText] = useState("")

    function handleChange(event) {
        setText(event.target.value);
    }
    function handleAdd(event) {
        db.collection('questionDB').add({ questionBody: text, askedBy: props.user.displayName, postedOn: Date.now() })
        db.collection('userDB').doc(props.user.email).collection('myQuestions').add({ questionBody: text, askedBy: props.user.displayName, postedOn: Date.now() });
        // const id =(Date.now()+Math.ceil(100000*Math.random()).toString()) ;
        // event.preventDefault() ;  
        console.log("usename in ask :", props.user.displayName)

    }
    return (
        <Container>
            <Heading>
                Ask a question
            </Heading>
            <div>

                <textarea className="ask-box" onChange={handleChange} name="question" placeholder="Write your question here (you can use markdown)" rows="5" />

            </div><br></br>
            <p><b>Preview</b></p>
            <div className="markdown-field">
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
            </div>
            <Link to='/'>
                <button className="ask-button" onClick={handleAdd}>Post</button>
            </Link>
        </Container>
    )
}
export default Ask;

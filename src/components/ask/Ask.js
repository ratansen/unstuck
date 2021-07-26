import React, {useState} from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import './ask.css'
import Data from '../data' ;

var newQuestion ;
function Ask(props) {
    const [text,setText]=useState("")
    const [questions,addQuestion]=useState(Data) ;

    function handleChange(event){
        newQuestion=event.target.value ;
    }
    function handleAdd(event){
        addQuestion((prev)=>{
            return [...prev,newQuestion]
        })
        // console.log(questions) ;
        event.preventDefault() ;   
    }
    return (
        <Container>
            <Heading>
                Add a question 
            </Heading>
            <div>
                <form>
                    <input className='askTitle' name="title" placeholder="Title" />
                    <hr noshade width="90%" size='1'/>
                    <textarea onChange={handleChange} name="question" placeholder="Write your question" rows="5" />
                    <button onClick={handleAdd}>Add</button>
                </form>
            </div>
        </Container>
    )
}
export default Ask;

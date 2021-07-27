import React, { useState, useEffect } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import './home.css';
import Ask from '../ask/Ask';
import Data from '../data';
import { db } from '../../firebase/firebase.utils'
// import {questions} from '../../App'
function Home() {

    var [questionData, updateQuestionData] = useState([])

    
    const fetchData= async()=>db.collection('questionDB').get().then(snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();
            console.log("d.qb: ",data.questionBody)
            updateQuestionData((prev)=>{
                return ([...prev,{questionBody:data.questionBody, askedBy:data.askedBy}])
            })
            
        })
    }).catch(error => console.log(error));
    console.log("questionData", questionData);
    useEffect(()=>{
        fetchData();
    },[])
    const toRender= 
        questionData.map((item) => {
            return (
                <div className="question">
            <h1>{item.askedBy}</h1>
            <p>{item.questionBody}</p>
                </div>
            )
        }) 

    return (

        <Container>
            <Heading>Top Questions</Heading>
            {console.log("done")}
            {toRender}
        </Container>
    )
}



export default Home;
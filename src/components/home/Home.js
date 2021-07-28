import React, { useState, useEffect } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import {Link} from 'react-router-dom' ;
import './home.css';
import Ask from '../ask/Ask';
import Data from '../data';
import { db } from '../../firebase/firebase.utils'
import timeSince from '../date'

function Home() {

    var [questionData, updateQuestionData] = useState([])


    const fetchData = async () => db.collection('questionDB').get().then(snapshot => {
        snapshot.forEach(doc => {
            const id = doc.id
            const data = doc.data();
            console.log("d.qb: ", data.questionBody)
            updateQuestionData((prev) => {
                return ([...prev, {id: id, questionBody: data.questionBody, askedBy: data.askedBy, postedOn: data.postedOn }])
            })

        })
    }).catch(error => console.log(error));
    console.log("questionData",questionData);
    useEffect(() => {
        fetchData();
    }, [])
    const toRender =
        questionData.map((item) => {
            return (

                <div class="box">
                    <div class="question-top">

                        <i class="fa fa-user"></i>
                        <p class="user">{item.askedBy}</p>
                        <p class="timestamp">{timeSince(item.postedOn)} ago</p>
                    </div>
                    <div class="question-body">
                        <p>{item.questionBody}</p>
                    </div>
                    <div class="footer">
                        <Link to={{pathname:'/answer', props:{id:item.id}}}>Answer</Link>
                    </div>
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
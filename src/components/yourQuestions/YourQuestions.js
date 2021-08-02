import React, { useState, useEffect } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import { db, auth } from '../../firebase/firebase.utils' ;
import timeSince from '../date';
import Loading from '../fragments/Loader';

function YourQuestions(props) {
    var [questionData, updateQuestionData] = useState([]) ;
    var [loaderState, setLoaderState] = useState(true) ; 

    const fetchData = async () => db.collection('userDB').doc(props.user.email).collection('myQuestions').get().then(snapshot => {
        snapshot.forEach(doc => {
            const id = doc.id
            const data = doc.data();
            console.log("d.qb: ", data.questionBody)
            updateQuestionData((prev) => {
                return ([...prev, { id: id, questionBody: data.questionBody, askedBy: data.askedBy, postedOn: data.postedOn }])
            })
            setLoaderState(false) ;

        })
    }).catch(error => console.log(error));

    useEffect(() => {
        fetchData();
    }, [])

    const toRender = questionData.map((item) => {
        return (

            <div class="answer-box">
                <div class="answer-top">

                    <i class="fas fa-user-circle "></i>
                    <p class="user ">You</p>
                    <p class="timestamp">asked {timeSince(item.postedOn)} ago</p>
                </div>
                <div class="answer-body">
                    <p style={{ whiteSpace: "pre-wrap" }}>{item.questionBody}</p>
                </div>
                <div class="footer">

                </div>
            </div>

        )
    })
    return (
        <Container>
            <Heading>Your Quesions</Heading>
            {loaderState ? <Loading  /> : toRender}
        </Container>
    )
}

export default YourQuestions;
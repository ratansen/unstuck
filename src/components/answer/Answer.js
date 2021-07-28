import React, { useState } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import { db } from '../../firebase/firebase.utils' ;
import timeSince from '../date'
import './answer.css'





function Answer(props) {
    const [questionData, updateQuestionData] = useState("")
    db.collection("questionDB").doc(props.location.props.id)
        .get()
        .then((snapshot) => {
            updateQuestionData(snapshot.data())
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

    return (
        <Container>
            <Heading>
                <div className="question-top">
                    <i className="fa fa-user"></i>
                    <p className="user">{questionData.askedBy}</p>
                    <p className="timestamp">{timeSince(questionData.postedOn)} ago</p>
                </div>
                <div class="questionBody">
                {questionData.questionBody}
                </div>
            </Heading>

        </Container>
    )
}

export default Answer;
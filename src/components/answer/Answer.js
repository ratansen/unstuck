import React, { useState, useEffect } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import { db } from '../../firebase/firebase.utils';
import timeSince from '../date' ;
import './answer.css' ;




function Answer(props) {
    const qid = props.location.props.id;
    const [ans, setAns] = useState("");
    const [questionData, updateQuestionData] = useState("") ;

    db.collection("questionDB").doc(props.location.props.id)
        .get()
        .then((snapshot) => {
            updateQuestionData(snapshot.data())
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    const [postText, setPostText] = useState("")
    function handleChange(event) {
        setAns(event.target.value);
        setPostText(event.target.value);
        
    }

    function handleClick(event) {
        setPostText("")
        db.collection("questionDB").doc(qid).collection(qid).add({ answer: ans , answeredBy: props.userName, answeredOn: Date.now()}) ;
        updateAnswerData([])
        fetchAns() ;

        event.preventDefault();
    }

    // fetching answers
    var [answerData, updateAnswerData] = useState([])


    const fetchAns = async () => db.collection('questionDB').doc(qid).collection(qid).get().then(snapshot => {
        snapshot.forEach(doc => {
            const id = doc.id
            const data = doc.data();
            console.log("d.qb: ", data.answer)
            updateAnswerData((prev) => {
                return ([...prev, { answer: data.answer, answeredBy:data.answeredBy, answeredOn: data.answeredOn }])
            })

        })
    }).catch(error => console.log(error));
    console.log("answerData", answerData);

    useEffect(() => {
        fetchAns();
    }, [])
    const toRender =
        answerData.map((item) => {
            return (

                <div class="answer-box">
                    <div class="answer-top">

                        <i class="fa fa-user "></i>
                        <p class="user ">{item.answeredBy}</p>
                        <p class="timestamp">{timeSince(item.answeredOn)} ago</p>
                    </div>
                    <div class="answer-body">
                        <p>{item.answer}</p>
                    </div>
                    <div class="footer">
                        
                    </div>
                </div>

            )
        })

    return (
        <Container>
            <div className="question-div">
                <div className="question-top">
                    <i className="fa fa-user"></i>
                    <p className="user">{questionData.askedBy}</p>
                    <p className="timestamp">{timeSince(questionData.postedOn)} ago</p>
                </div>
                <div class="questionBody">
                    {questionData.questionBody}
                </div>
                <div className="question-footer">
                </div>

            </div>
            {toRender}
            <div className="answer-div">
                <div className="postAnswer-head">
                    Your Answer
                </div>

                <div className="post-div">
                    <textarea onChange={handleChange} value={postText} className="answerpost-box" rows="10" />
                    <button onClick={handleClick} className="post-button">Post</button>
                </div>
            </div>

        </Container>
    )
}

export default Answer;
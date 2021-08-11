import React, { useState, useEffect } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import { db } from '../../firebase/firebase.utils';
import timeSince from '../date';
import './answer.css';
import { useLocation } from 'react-router-dom';
import Loading, { QuestionLoading } from '../fragments/Loader';
import ReactMarkdown from 'react-markdown';




function Answer(props) {
    // window.localStorage.setItem('temp',props.location.props.id)
    // const qid = window.localStorage.getItem('temp')
    const location = useLocation()
    const qid = location.state?.id;
    const [ans, setAns] = useState("");
    const [questionData, updateQuestionData] = useState("");
    const [questionLoader, setQuestionLoader] = useState(true);
    db.collection("questionDB").doc(qid)
        .get()
        .then((snapshot) => {
            updateQuestionData(snapshot.data());
            setQuestionLoader(false);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    const [postText, setPostText] = useState("")
    function handleChange(event) {
        setAns(event.target.value);
        setPostText(event.target.value);

    }
    var [loaderState, setLoaderState] = useState(true);
    function handleClick(event) {
        setPostText("")
        updateAnswerData([]);
        setLoaderState(true);
        db.collection("questionDB").doc(qid).collection(qid).add({ answer: ans, answeredBy: props.userName, answeredOn: Date.now() });
        fetchAns();
        event.preventDefault();
    }
    
    // fetching answers
    var [answerData, updateAnswerData] = useState([])
    useEffect(() => {
        fetchAns();
    }, [])


    var isEmpty;
    const fetchAns = async () => db.collection('questionDB').doc(qid).collection(qid).get().then(snapshot => {
        snapshot.forEach(doc => {
            const id = doc.id
            const data = doc.data();
            updateAnswerData((prev) => {
                return ([...prev, { answer: data.answer, answeredBy: data.answeredBy, answeredOn: data.answeredOn }])
            })


        })
        setLoaderState(false);
    }).catch(error => { console.log(error); setLoaderState(false); });
    


    const toRender =
        answerData.map((item) => {
            return (

                <div class="answer-box">
                    <p>
                        
                    </p>
                    <>
                        <div class="answer-top">

                            <i class="fas fa-user-circle "></i>
                            <p class="user ">{item.answeredBy}</p>
                            <p class="timestamp">answered {timeSince(item.answeredOn)} ago</p>
                        </div>
                        <div class="answer-body">
                            <p style={{ whiteSpace: "pre-wrap" }}>
                                <ReactMarkdown>
                                    {item.answer}
                                </ReactMarkdown>
                            </p>
                        </div>
                        <div class="footer">

                        </div>
                    </>
                </div>

            )
        })

    return (
        <Container>
            <div className="question-div">

                {questionLoader ? <QuestionLoading /> :
                    <>
                        <div className="question-top">
                            <i className="fa fa-user"></i>
                            <p className="user">{questionData.askedBy}</p>
                            
                            <p className="timestamp">asked {timeSince(questionData.postedOn)} ago</p>
     
                        </div>
                        <div class="questionBody">
                        <ReactMarkdown>
                            {questionData.questionBody}
                        </ReactMarkdown>
                        </div>
                        <div className="question-footer">
                        </div>
                    </>
                }
            </div>
            {loaderState ? <Loading /> : toRender}

            <div className="answer-div">
            <p><b>Write an answer</b></p>
                <div>
                    <textarea className="answerpost-box" onChange={handleChange} value={postText} placeholder="Write your answer here (you can use markdown)" rows="5" />
                </div><br></br>
                <p>Answer Preview</p>
                <div className="markdown-field" style={{whiteSpace: "pre-wrap"}}>
                    <ReactMarkdown>
                        {postText}
                    </ReactMarkdown>
                </div>
                <button onClick={handleClick} className="anspost-button">Post</button>
            </div>

        </Container>
    )
}

export default Answer;
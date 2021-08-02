import React, { useState, useEffect } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import { db } from '../../firebase/firebase.utils';
import timeSince from '../date';
import './answer.css';
import { useLocation } from 'react-router-dom';
import Loading, { QuestionLoading } from '../fragments/Loader';




function Answer(props) {
    // window.localStorage.setItem('temp',props.location.props.id)
    // const qid = window.localStorage.getItem('temp')
    const location = useLocation()
    const qid = location.state?.id;
    // const qid = props.location.props.id;
    const [ans, setAns] = useState("");
    const [questionData, updateQuestionData] = useState("");
    const [questionLoader, setQuestionLoader] = useState(true);
    db.collection("questionDB").doc(qid)
        .get()
        .then((snapshot) => {
            updateQuestionData(snapshot.data())
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
        db.collection("questionDB").doc(qid).collection(qid).add({ answer: ans, answeredBy: props.userName, answeredOn: Date.now() });
        updateAnswerData([]) ;
        setLoaderState(true);
        fetchAns();
        event.preventDefault();
    }

    // fetching answers
    var [answerData, updateAnswerData] = useState([])
    var isEmpty=false ;



    const fetchAns = async () => db.collection('questionDB').doc(qid).collection(qid).get().then(snapshot => {
        if(snapshot.empty){
            isEmpty=true ;
        }
        snapshot.forEach(doc => {
            const id = doc.id
            const data = doc.data();
            console.log("d.qb: ", data.answer)
            updateAnswerData((prev) => {
                return ([...prev, { answer: data.answer, answeredBy: data.answeredBy, answeredOn: data.answeredOn }])
            })
            
            
        })

        setLoaderState(false);
    }).catch(error => {console.log(error); setLoaderState(false);});
    console.log("answerData", answerData);

    useEffect(() => {
        fetchAns();
    }, [])

    const question = () => {
        return (<>
        </>)
    }

    const toRender =
        answerData.map((item) => {
            return (
                
                <div class="answer-box">
                <p>
                { isEmpty && "<center> No answers yet </center>"}
                </p>
                <>
                    <div class="answer-top">

                        <i class="fas fa-user-circle "></i>
                        <p class="user ">{item.answeredBy}</p>
                        <p class="timestamp">answered {timeSince(item.answeredOn)} ago</p>
                    </div>
                    <div class="answer-body">
                        <p style={{ whiteSpace: "pre-wrap" }}>{item.answer}</p>
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
            
            {questionLoader ? <QuestionLoading/> : 
            <>
                <div className="question-top">
                    <i className="fa fa-user"></i>
                    <p className="user">{questionData.askedBy}</p>
                    <p className="timestamp">asked {timeSince(questionData.postedOn)} ago</p>
                </div>
                <div class="questionBody">
                    {questionData.questionBody}
                </div>
                <div className="question-footer">
                </div>
            </>
            }
            </div>
            {loaderState ? <Loading /> : toRender}
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
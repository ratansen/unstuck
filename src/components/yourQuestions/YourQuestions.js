import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom' ;
import { Container, Heading } from '../fragments/mainLayout';
import { db, auth } from '../../firebase/firebase.utils' ;
import './yourQuestions.css';
import timeSince from '../date';
import Loading from '../fragments/Loader';
import ReactMarkdown from 'react-markdown';


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
            
        })
        setLoaderState(false) ;
    }).catch(error => console.log(error));
    function handleDelete(id){
        db.collection('userDB').doc(props.user.email).collection('myQuestions').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        db.collection('questionDB').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        updateQuestionData([]);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])


    const toRender = questionData.map((item) => {
        return (

            <div class="myQ-box">
                <div class="answer-top">
                    <i class="fas fa-user-circle "></i>
                    <p class="user ">You</p>
                    <p class="timestamp">asked {timeSince(item.postedOn)} ago</p>
                </div>
                <div class="answer-body">
                    <p style={{ whiteSpace: "pre-wrap" }}>
                    <ReactMarkdown>{item.questionBody}</ReactMarkdown>
                    
                    </p>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/answer', state: { id: item.id } }}>
                        <div className="view-ans">
                        <i class="fas fa-eye"></i> View
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to={{ pathname: '/yourQuestions', state: { id: item.id } }}>
                            <div className="delete" onClick={()=>handleDelete(item.id)}>
                            <i className="far fa-trash-alt "></i>
                            &nbsp;  Delete  
                            </div>
                    </Link>
                    


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
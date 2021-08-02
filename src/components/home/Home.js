import React, { useState, useEffect } from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import { Link } from 'react-router-dom';
import './home.css';
import Ask from '../ask/Ask';
import Data from '../data';
import { db } from '../../firebase/firebase.utils'
import timeSince from '../date' ;
import Loading from '../fragments/Loader';

function Home() {

    var [questionData, updateQuestionData] = useState([])
    var [loaderState, setLoaderState] = useState(true) ; 


    const fetchData = async () => db.collection('questionDB').orderBy('postedOn','desc').get().then(snapshot => {
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
    console.log("questionData", questionData);
    useEffect(() => {
        fetchData();
    }, [])
    const toRender =
        questionData.map((item) => {
            return (

                <div class="question-box">
                    <div class="question-top">

                        <i class="fa fa-user"></i>
                        <p class="user">{item.askedBy}</p>
                        <p class="timestamp">{timeSince(item.postedOn)} ago</p>
                    </div>
                    <div class="question-body">
                        <p style={{whiteSpace: "pre-wrap"}}>{item.questionBody}</p>
                    </div>
                    <div class="question-footer">
                        <Link style={{ textDecoration: "none" }} to={{ pathname: '/answer', state: { id: item.id } }}>
                            <div className="view">
                                View
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })

    return (

        <Container>
            <Heading>Top Questions</Heading>
            {loaderState ? <Loading/>: toRender}
        </Container>
    )
}



export default Home;
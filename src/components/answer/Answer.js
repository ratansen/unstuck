import React,{useState} from 'react' ;
import { Container, Heading } from '../fragments/mainLayout';
import { db } from '../../firebase/firebase.utils'






function Answer(props){
    const [questionData, updateQuestionData] = useState("")
    db.collection("questionDB").doc(props.location.props.id)
    .get()
    .then((snapshot) => {
        updateQuestionData(snapshot.data())
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
    return(
        <Container>
        <div className="answerPage"></div>
        <p>{questionData.questionBody}</p>
        </Container>
    )
}

export default Answer ;
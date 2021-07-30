import React from 'react' ;
import { Container, Heading } from '../fragments/mainLayout';

function NotLoggedIn(){
    return(
        <Container>
            <h2>
                Hey User! You need to login to access this feature.
            </h2>
        </Container>
    )
}

export default NotLoggedIn ;
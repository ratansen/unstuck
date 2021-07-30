import React from 'react';
import { Container, Heading } from '../fragments/mainLayout';
import './top.css'

function Top() {
    function toTop(){
    document.getElementById("top").scrollIntoView();
    }
    return (
        
            <div onClick={toTop} className="top">
                <div class="fas fa-arrow-up top-arrow"></div>
            </div>
        
    )
}

export default Top;
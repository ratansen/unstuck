
import React,{useState} from 'react';
// import './styles.css'
import {auth} from '../../firebase/firebase.utils'
import {
    Nav,
    NavBrand,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavMenuM
} from './Style';
import './navbar.css'

var width = window.matchMedia("(min-width: 768px)") ;
console.log("width",width.matches) ;

function Navbar({currentUser}) {
    function toggleBar(){
        document.querySelector("#bar").style.transform="none";
    }
    function collapse(){
        document.querySelector("#bar").style.transform="translatex(150%)";
    }
    const [navHeight,setNavHeight]=useState("80px");
    const [navColor,setColor]=useState("rgb(0,0,0)");

    window.onscroll = function () { 
        if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200  ) {
            setNavHeight("65px");
            setColor("rgb(0,0,0,0.8)")
        } 
        else{
            setNavHeight("80px");
            setColor("rgb(0,0,0)")
        }
    };

    return (
        <div id="top">
            <Nav style={{height:navHeight,background:navColor}}>
                <NavBrand style={{color: 'yellow'}} to='/'>
                    Un<span class="s">s</span>tuck
                </NavBrand>
                <Bars onClick={toggleBar} />
                <NavMenu>
                    <NavLink to='/' activeStyle={{color:'#ffffff'}}>
                        HOME
                    </NavLink>
                    <NavLink to='/ask' activeStyle={{color:'#ffffff'}}>
                        ASK
                    </NavLink>
                    <NavLink to='/tags' activeStyle={{color:'#ffffff'}}>
                        TAGS
                    </NavLink>
                    <NavLink to='/yourQuestions' activeStyle={{color:'#ffffff'}}>
                        MY STUFF
                    </NavLink>
                </NavMenu>
                <NavMenuM id="bar">
                    <div onClick={collapse} className="collapse"><i className="fa fa-times" id="cancel"></i></div>
                    <NavLink onClick={collapse} to='/' activeStyle={{color:'#FFFFFF'}}>
                        HOME
                    </NavLink>
                    <NavLink onClick={collapse} to='/ask' activeStyle={{color:'#FFC107'}}>
                        ASK
                    </NavLink>
                    <NavLink onClick={collapse} to='/tags' activeStyle={{color:'#FFC107'}}>
                        TAGS
                    </NavLink>
                    <NavLink onClick={collapse} to='/yourQuestions' activeStyle={{color:'#FFC107'}}>
                        MY STUFF
                    </NavLink>

                </NavMenuM>
                
                { (currentUser)?
                
                <NavBtn>
                    <NavBtnLink to='/' onClick={()=> auth.signOut()}><i class="fas fa-sign-out-alt"></i> &nbsp;Sign Out</NavBtnLink>
                </NavBtn> :
                <NavBtn>
                    <NavBtnLink to='/signin'><i class="fas fa-sign-in-alt"></i>&nbsp; Sign In</NavBtnLink>
                </NavBtn>
                }
                
                
            </Nav>
        </div>
    )
}

export default Navbar;
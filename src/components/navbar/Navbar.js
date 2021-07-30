
import React from 'react';
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

function Navbar({currentUser}) {
    function toggleBar(){
        document.querySelector("#bar").style.transform="none";
    }
    function collapse(){
        document.querySelector("#bar").style.transform="translatey(-150%)";
    }

    return (
        <div id="top">
            <Nav>
                <NavBrand style={{color: 'yellow'}} to='/'>
                    Unstuck
                </NavBrand>
                <Bars onClick={toggleBar} />
                <NavMenu>
                    <NavLink to='/ask' activeStyle={{color:'#ff7600'}}>
                        Ask
                    </NavLink>
                    <NavLink to='/tags' activeStyle={{color:'#ff7600'}}>
                        Tags
                    </NavLink>
                    <NavLink to='/yourQuestions' activeStyle={{color:'#ff7600'}}>
                        Your Questions
                    </NavLink>
                </NavMenu>
                <NavMenuM id="bar">
                    <div onClick={collapse} className="collapse"><i className="fa fa-times" id="cancel"></i></div>
                    <NavLink onClick={collapse} to='/ask' activeStyle={{color:'#FFC107'}}>
                        Ask
                    </NavLink>
                    <NavLink onClick={collapse} to='/tags' activeStyle={{color:'#FFC107'}}>
                        Tags
                    </NavLink>
                    <NavLink onClick={collapse} to='/yourQuestions' activeStyle={{color:'#FFC107'}}>
                        Your Questions
                    </NavLink>
                    

                </NavMenuM>

                { currentUser?
                
                <NavBtn>
                    <NavBtnLink to='/' onClick={()=> auth.signOut()}>Sign Out ({currentUser.displayName})</NavBtnLink>
                </NavBtn> :
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
                }
                
            </Nav>
        </div>
    )
}
export default Navbar;
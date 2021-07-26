import React from 'react';
// import './styles.css'

import {
    Nav,
    NavBrand,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './Style';

function Navbar() {
    return (
        <>
            <Nav>
                <NavBrand style={{color: 'yellow'}} to='/'>
                    Unstuck
                </NavBrand>
                <Bars />
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
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}
export default Navbar;
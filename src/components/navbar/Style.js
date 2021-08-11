import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';


var nav="80px";

export const Nav = styled.nav`
  ${'' /* background: #52006A; */}
  background: rgb(15,15,15);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  position: fixed;
  top:0;
  right:0;
  left:0;
  z-index: 10;
  box-shadow: 0px 5px 8px #888888;
  transition: height 0.6s;
  transition: all 0.6s;

`;

export const NavLink = styled(Link)`
  color: rgb(255,255,255,0.5);
  display: flex;
  align-items: center;
  font-size:0.8rem;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  :active {
    color: rgb(255,255,255,0.5);
  }
  :hover {
    color: #FFFFFF ;
  }
  @media screen and (max-width: 768px) {
    padding:10px;
    font-size:1.5rem;
    margin:auto;
    text-align:center;
  }
`;

export const NavBrand = styled(NavLink)`
  color:rgb(245,245,0);
  font-size:2rem;
  @media screen and (max-width: 768px) {
    margin-left:8px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 88%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  padding-top:10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuM = styled.div`

  text-align:center;
  index:999;
  width:200px;
  position:absolute;
  top:10px;
  right:10px;
  font-size:0.9rem;
  background-color:rgb(25,25,25);
  padding:20px;
  transform: translatex(150%);
  transition:all 0.5s;
  @media screen and (min-width: 768px) {
    display:none;
  }
`;



export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    margin-right:60px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  ${'' /* background: #FF7600; */}
  padding: 10px 22px;
  color: rgb(255,255,255,0.8);
  outline: none;
  border: none;
  margin-top:5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    ${'' /* background: #fff; */}
    color: #fff;
  }linear-gradient(to bottom, black 0%, white 100%)
`;

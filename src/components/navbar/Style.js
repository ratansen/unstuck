import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #52006A;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  box-shadow: 0px 5px 8px #888888;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  :active {
    color: #FFC107;
  }
  :hover {
    color: #FFC107 ;
  }
  @media screen and (max-width: 768px) {
    padding:10px;
    font-size:1.5rem;
    margin:auto;
    text-align:center;
  }
`;

export const NavBrand = styled(NavLink)`
  color:yellow;
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
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuM = styled.div`
  text-align:center;
  index:999;
  position:absolute;
  top:10px;
  right:10px;
  background-color:#7952B3;
  padding:20px;
  transform: translatey(-150%);
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
    margin-right:70px;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #FF7600;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #ffA900;
  }linear-gradient(to bottom, black 0%, white 100%)
`;
import styled from 'styled-components';

export const Container=styled.div`
    background-color:#fff;
    width:70vw;
    margin:10px auto;
    padding:15px;
    padding-top:90px;
    border-radius:5px;
    min-height:95vh;
    @media screen and (max-width: 768px) {
    width:95vw;
  }

`;

export const Heading = styled.div`
    padding:5px;
    padding-left:10px;
    border-left:5px solid #ff7600;
    font-weight:bold;
    font-size:1.2rem;
`;
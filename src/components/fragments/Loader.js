import React from 'react';
import reactDom from 'react-dom';
import Loader from 'react-loader-spinner';
import { Facebook } from 'react-content-loader' ;

export default function Loading() {
    return (<div
        style={{
            marginTop:"100px",
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <Loader type="ThreeDots" color="#52006A" height="100" width="100" />
    </div>)
}

export function QuestionLoading(){
    return <Facebook height={100} >
    </Facebook>
}
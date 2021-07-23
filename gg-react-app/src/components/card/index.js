import React from "react";

export default function index(props) {
  return (
    <>
      <div className="styleCard">
          <div className="styleCardImage">
              <img src={props.url}
                   alt={props.title} /> 
          </div>
          <div className="styleCardImage">
              <p>{props.title} | {props.rating}</p>
          </div>
      </div>   
      
    </>
  );
}
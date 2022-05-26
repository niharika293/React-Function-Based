import React, { useState } from 'react';
import Alert from "react-bootstrap/Alert";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");

  const handleUpClick = () => {
    // console.log("handle upper click called");
    // console.log(text);
    setText(text.toUpperCase());
  }
  const handleLoClick = () => {
    setText(text.toLocaleLowerCase());
  }

  const handleChange = (event) => {
    // console.log("handleChange called");
    setText(event.target.value);
  }

  const handleClearText = (event) => {
    setText("");
  }

  const handleCopy = (event) => {
    let textTobeCopied = document.getElementById('myBox'); 
    textTobeCopied.select(); //Makes the selection equal to the current object.
    navigator.clipboard.writeText(textTobeCopied.value);
    window.alert("Text Copied to clipboard : " + textTobeCopied.value); //use noty.js -- deprecated now
    // return (`
    //     <div class="alert alert-success">
    //       <strong>Success!</strong>
    //     </div>
    // `);
        // <div class="alert alert-success">
        //   <strong>Success!</strong>
        // </div>
      return(
        <Alert variant="success" style={{ width: "42rem" }}>
          <Alert.Heading>
             This is a success alert which has green background
          </Alert.Heading>
        </Alert>
      )
  }

  const handleSentence = () => {
    let originalSentence = text;
    let newString = originalSentence.charAt(0).toUpperCase().concat((originalSentence.substring(1)).toLowerCase());
    setText(newString);
  }

  const handleAlternatingCase = () => {
    let newText = text;
    let newString = "";
    console.log("text", newText);
    for( let i=0; i < newText.length; i = i+1){
      if(newText[i] === newText[i].toUpperCase()){
        newString += newText[i].toLowerCase();
      }
      else if(newText[i] === newText[i].toLowerCase()){
        newString += newText[i].toUpperCase();
      }
      console.log(newString);
      setText(newString);
    }
  }

  const totalWords = (text.length === 0) ? 0 : text.trim().split(" ").length;

  const handleDownload = () => {
    let file = document.getElementById("myBox");
    const blob = new Blob([file.value], {type: 'text/csv'});
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = `text-utils-${new Date().getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }


  return (
    <>
    {/* 2 curly braces - 1 for javascript , 1 for object */}
      <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743' }} className="form-control" id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-1' onClick={handleSentence}>Convert to Sentence case</button>
        <button className='btn btn-primary mx-1' onClick={handleAlternatingCase}>Alternating case</button>
        <button className='btn btn-primary mx-1' onClick={handleDownload}>Download Text</button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h3>Your Text Summary </h3>
        <p> <b> {totalWords} </b> words and <b> {text.length} </b> characters</p>
        <p>{0.08 * totalWords} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter some text in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}

import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");

  const handleUpClick = () => {
    // console.log("handle upper click called");
    // console.log(text);
    setText(text.toUpperCase());
  }

  const handleChange = (event) => {
    // console.log("handleChange called");
    setText(event.target.value);
  }

  return (
    <div>
         <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}

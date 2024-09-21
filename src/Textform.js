import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  
  function convertToUpperCase() {
    setText(text.toUpperCase());
  }
  
  return (
    <div className='container'>
      <h2>{props.heading}</h2>
      <div className="form-group m-3">
        <label htmlFor="exampleTextarea">Example Textarea</label>
        <textarea 
          className="form-control w-50 " 
          id="exampleTextarea" 
          rows="3" 
          value={text} // Control the value with state
          onChange={(e) => setText(e.target.value)} // Update state on input change
        />
      </div>
      <button type="button" className="btn btn-primary m-3" onClick={convertToUpperCase}>
        Blue Button
      </button>
      <button type="reset"className='btn btn-secondary m-3' onClick={()=>{setText("")}}>Delete Text</button>

      <div className="container">
        <h1 className="text-center">Welcome to My Bootstrap Page</h1>
        <p>This is a simple container using Bootstrap.</p>
        <div className="row">
            <div className="col-md-6">
                <div className="p-3 border bg-light">Number of Words: {text.split(" ").length}</div>
            </div>
            <div className="col-md-6">
                <div className="p-3 border bg-light">Number of letters: {text.length}</div>
            </div>
        </div>
    </div>
    </div>
  );
}

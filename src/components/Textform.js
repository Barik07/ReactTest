import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpclick=()=>{
    //console.log("Uppercase was clicked : " +  text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!" , "success");
  }
  const handleLoclick=()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowerercase!" , "success");
  }
  const handleClearclick=()=>{
    let newText = " ";
    setText(newText)
    props.showAlert("Your text cleared!" , "success");
  }
  
  const handleOnChange=(event)=>{
    //console.log("on change");
    setText(event.target.value);

  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied!" , "success");
  }

  const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spacess removed!" , "success");
  }

  const [text, setText] = useState('');
  //text="new text";//wrong way to change the state
  //setText("new text");//correct way to change the state
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="13"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}




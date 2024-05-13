import React,{useState} from 'react'

function Text(props){
    let [text,setText]=useState("");
  function change(evt){
    let {value}=evt.target;
    setText(value)
  }
  function onUpperC(){
    setText(text.toUpperCase())
    props.declareAlert("Coverted To Upper Case","success")
  }
  function handleCopy(){
    let text=document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.declareAlert("Text Copied To ClipBoard!","success")
  }
  function handleExtraSpace(){
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.declareAlert("Extra Space Between Words Removed!","success")
  }
  
return <>
<div className="container">


    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea style={props.darkMode?{backgroundColor:"gray",color:"white"}:null} onChange={change}  className="form-control" id="exampleFormControlTextarea1" rows="7" value={text}></textarea>
</div>
<button  type="submit" onClick={onUpperC} className="btn btn-primary mx-2 ">Change To UpperCase</button>
<button  type="submit" onClick={()=>{setText(text.toLowerCase());props.declareAlert("Coverted To Lower Case","success")}} className="btn btn-secondary mx-2 ">Change To LowerCase</button>
<button  type="submit" onClick={()=>{setText("");props.declareAlert("Text area Cleaned","success")}} className="btn btn-danger bt-lg mx-2 ">Clear Text in Text Area</button>
<button  type="submit" onClick={handleCopy} className="btn btn-light bt-lg mx-2 ">Copy Text</button>
<button  type="submit" onClick={handleExtraSpace} className="btn btn-info bt-lg mx-2 ">Remove Extra Space</button>
</div>
<div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text===""?0:text.trim().split(/\s+/).length} word & {text.length} characters</p>
    <p>{text.split(' ').length*0.008} Minutes of read</p>
</div>
<div className="container">
   { text.length>0&&<h2>Preview</h2> }
   {text.length>0&&<p>{text}</p>}
</div>
</>
}

export default Text;
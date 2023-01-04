import React,{useState} from "react";
export default function TextForm(props) {
    const [text,setText] = useState("");
    const [bold,setBold] = useState(false);
    const [italic,setItalic] = useState(false);
    const boldHandler = ()=>{
        if(bold) setBold(false);
        else setBold(true);
    }
    const italicHandler = ()=>{
        if(italic) setItalic(false);
        else setItalic(true)
    }
    const changeHandler = (event)=>{
         setText(event.target.value);
    }
    const lcase = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
    }
    const ucase = ()=>{
        const newText = text.toUpperCase();
        setText(newText);
    }
    const clear = ()=>{
        setText("");
    }
    const copy = ()=>{
        const copyText = text;
        navigator.clipboard.writeText(copyText);
        props.showAlert("Copied To ClipBoard","success");
    }
  return (
    <>
      <div className="container">
      <div className="mb-3 my-3">
        <h2 style = {{color : props.mode === 'light'?'black':'white'}}>{props.heading}</h2>
        <textarea
          className="form-control my-2"
          id="exampleFormControlTextarea1"
          style = {{
            border : "1px solid black",
            backgroundColor : props.mode === 'light'?'white':'grey',
            fontStyle : italic?'italic':'normal',
            fontWeight : bold?'bold':'normal'
        }}
          value = {text}
          onChange = {changeHandler}
          rows="8"
        ></textarea>
        <button type="button" className="btn btn-primary my-2 mx-2" onClick = {lcase}>Convert To lowercase</button>
        <button type="button" className="btn btn-primary mx-2 my-2"onClick = {ucase}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary mx-2 my-2" onClick = {clear}>Clear</button>
        <button type="button" className="btn btn-primary mx-2 my-2"onClick = {copy}>Copy</button>
        <button type="button" className="btn btn-primary mx-2 my-2" onClick={boldHandler}>Bold</button>
        <button type="button" className="btn btn-primary" onClick={italicHandler}>Italic</button> 
        <div className = "my-2" >
        <strong style = {{color : props.mode === 'light'?'black':'white'}}>{text.length} letters, {text.split(" ").filter((element)=>{return element.length !== 0}).length} words</strong>
        </div>
      </div>
      </div>
    </>
  );
}
TextForm.defaultProps = {
    heading : "Enter text here to Analyze"
}
import { useState } from "react"


export default function TextForm(props) {
  const handleUpClicked = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  }

  const handleLowClicked = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }
  const handleClearClicked = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Converted to Clear Text", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here')

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}> 
      <h1>{props.heading} </h1>

      <div className="mb-3">

        <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black' }} value={text} rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClicked}>Convert to UpperCase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClicked}>Convert to LowerCase</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClicked}>Clear Text</button>
    </div>
    <div className="container my-3"> 
   
    <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} character</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
    <h1>Preview</h1>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
  </div>
    </>
    
  )
}

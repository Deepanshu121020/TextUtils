import React, { useState } from 'react'

function TextFrom(props) {

  const [text, setText] = useState('Enter text Here')

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to upper case', 'success')
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to lower case', 'success')
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const clearText = (event) => {
    setText('');
    props.showAlert('Text is cleared out', 'success')
  }

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert('Extra space has been removed', 'success')
  }

  const capitalizeFirstLetterAfterPeriod = () => {
    let newText = text
      .split('. ')
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ');
    setText(newText);
    props.showAlert('Text has been formatted', 'success')
  };

  const handleSpacing = () => {
    let newText = text
      .replace(/,(\S)/g, ', $1')  // Add space after commas if not present
      .replace(/(\S)\./g, '$1 .');  // Add space before full stops if not present
    setText(newText);
    props.showAlert('Text has been edited', 'success')
  };

  return (
    <>
      <div className='heading' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h4>{props.heading}</h4>
      </div>
      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ color: props.mode === 'dark' ? 'white' : 'black', background: props.mode === 'dark' ? 'gray' : 'white' }}></textarea>
        <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary my-3 mx-3' onClick={clearText}>Clear</button>
        <button className='btn btn-primary my-3 mx-3' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary my-3 mx-3' onClick={capitalizeFirstLetterAfterPeriod}>Capitalize Letter after Period </button>
        <button className='btn btn-primary my-3 mx-3' onClick={handleSpacing}>Handle Spacing </button>

      </div>
      <div className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your text summary</h3>
        <p>Words - {text.split(" ").length} Character - {text.length}</p>
        <p>{0.008 * text.split(" ").length}  minutes read</p>
      </div>
      <div className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextFrom

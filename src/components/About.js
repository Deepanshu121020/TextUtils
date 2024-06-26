import React,{useState} from 'react'

function About() {

const[mode, setMode] = useState({
    color: 'white',
    backgroundColor: 'black'
})

const[btnText, setBtnText] = useState("Enable Light Mode")

const changeMode = () => {
    if(mode.color === 'white'){ 
        setMode({
            color:'black',
            backgroundColor: 'white'
        })
        setBtnText('Enable Dark Mode')
    }else{
        setMode({
            color: 'white',
            backgroundColor: 'black'
        }) 
        setBtnText('Enable Light Mode');
    }
}
  return (
    <div className='container my-3' style={mode}>
      <div className="accordion" id="accordionExample" style={mode}>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header" style={mode}>
      <button className="accordion-button" type="button" style={mode} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={mode} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mode}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header" style={mode}>
      <button className="accordion-button collapsed" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={mode} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mode}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header" style={mode}>
      <button className="accordion-button collapsed" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={mode} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mode}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    <button type="button" className="btn btn-primary my-3" onClick={changeMode} >{btnText}</button>
    </div>
  )
}

export default About;

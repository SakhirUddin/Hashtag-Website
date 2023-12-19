import './Checkbox.css'

function CheckBox() {
  return (
        <div className="CheckBox">
            <span><input className='InputCheck' type="checkbox"/>Remember me</span>
            <span className='SpanCheck'><a href="#">Forgot Password?</a></span>
        </div>
  )
}

export default CheckBox;
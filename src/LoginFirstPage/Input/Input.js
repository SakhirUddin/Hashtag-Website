
import Mail from '../Images/Mail.png'  
import Password from '../Images/Password.png'
import HiddenIcon from '../Images/HiddenEye.png'
import './Input.css'
import Form from 'react-bootstrap/Form';

function InputBox(){
    return(
        <div className='Inputs'>
           
            <div class="InputBars ">
                <span className='Icon top-[5px]'><img src={Mail} alt="noImg" /></span>
                <input type="text" className="form-control InputArea" placeHolder=" Username or email"></input>
            </div>
            <div class="InputBars">
                <span className='Icon top-[2px]'><img src={Password} alt="noImg" /></span>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    placeholder='Password'
                    className='InputArea'
                />
            </div>
            
        </div>
    

    )
}
export default InputBox;
import Username from '../Images/Username.png'
import Mail from '../Images/Mail.png'
import Password from '../Images/Password.png'
import './InputGroup.css'
import Form from 'react-bootstrap/Form';

function InputGroup(){
    return(
        <div className='Inputs'>
            <div className="InputBars ">
                <span className='Icon ' id='userIcon'><img src={Username} alt="noImg" /></span>
                <input type="text" className="form-control InputArea" placeHolder="Username"></input>
            </div>
            <div class="InputBars">
                <span className='Icon top-[2px]' id='mailIcon'><img src={Mail} alt="noImg" /></span>
                <input type="text" className="form-control InputArea" placeHolder="Email ID"></input>
            </div>
            <div class="InputBars">
                <span className='Icon '><img src={Password} alt="noImg" /></span>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    placeholder='Password'
                    className='form-control InputArea'
                />
                 

            </div>

            <div class="InputBars">
                <span className='Icon'><img src={Password} alt="noImg" /></span>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    placeholder='Confirm Password'
                    className='InputArea'
                />
            </div>
      
   
        </div>
    

    )
}
export default InputGroup;
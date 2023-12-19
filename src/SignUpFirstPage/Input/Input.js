import Username from '../Images/Username.png'
import Mail from '../Images/Mail.png'
import Password from '../Images/Password.png'
import HiddenIcon from '../Images/HiddenEye.png'
import './Input.css'
import Form from 'react-bootstrap/Form';

function Sakhir(){
    return(
        <div className='Inputs'>
            <div className="InputBars ">
                <span className='Icon '><img src={Username} alt="noImg" /></span>
                <input type="text" className="form-control InputArea" placeHolder="Username"></input>
            </div>
            <div class="InputBars ">
                <span className='Icon'><img src={Mail} alt="noImg" /></span>
                <input type="text" className="form-control InputArea" placeHolder="Email ID"></input>
            </div>
            <div class="InputBars">
                <span className='Icon'><img src={Password} alt="noImg" /></span>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    placeholder='Password'
                    className=' form-control InputArea'
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
                {/* <span className='EyeIcon '><img src={HiddenIcon} alt="noImg" /></span> */}
            </div>
      
   
        </div>
    

    )
}
export default Sakhir;
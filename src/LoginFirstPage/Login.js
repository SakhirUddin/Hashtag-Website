import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './Button/button';
import Image from './Images/MainImage.png'
import InputBox from './Input/Input';
import Footer from './Footer/Footer';
import './MediaScreen/Mediascreen.css'
import CheckBox from './CheckBox/Checkbox';
import CheckBox2 from './CheckBox2/Checkbox2';


function Login() {
  return (
    <div className='main col-md-12'>
      <div className=' content'>
        <h1 className='signup'>Login</h1>
        <InputBox/>
        <CheckBox/>
        <Button/>
        <CheckBox2/>
        <Footer/>
      </div>
      <div className='ImagePhoto'>
        <img src={Image} alt="No" />
      </div>
    </div>
  );
}  

export default Login;

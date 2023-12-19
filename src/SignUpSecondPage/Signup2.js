import './Signup2.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './Button/button';
import Image from './Images/MainImage2.png'
import Footer from './Footer/Footer';
import './MediaScreen/Mediascreen.css'
import InputGroup from './InputGroup/InputGroup';

function Signup2() {
  return (
    <div className='main col-md-12'>
      <div className='content'>
        <h1 className='signup'>Sign up</h1>
        <InputGroup/>
        <Button/>
        <Footer/>
      </div>
      <div className='ImagePhoto'>
        <img src={Image} alt="No" />
      </div>
    </div>
  );
}  

export default Signup2;

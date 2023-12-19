import './Footer.css'
function Footer(){
    return(
        <div className="col-md-8 footer">
            <div className=' footer1'>
                By clicking <a href="#">Create Account</a>, you agree to #Hashtag's <a href="#">Terms and Conditions </a> and confirm you have read our <a href="#">Privacy Notice</a>. You may receive offers, news and updates from us.
            </div>
            <div className='footer2'>
                Already have an account? <a href="#">Sign In</a>
            </div>
        </div>
    )
}
export default Footer;
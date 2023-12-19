import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './upload_page.css'
import person from '../Img/Person.png'
import bellicon from '../Img/Bellicon.png'
import '../index.css'


function Upload_Page() {
  return (
    <div className="uploadMain">
        <div className="us_banner  text-white">
            <Container>
                <Row >
                    <Col md={4}><div className='us_banner_heading text-white '><h1>#Hashtag </h1></div></Col>
                    <Col md={{ span: 4, offset: 4 }}>
                    <div className='us_banner_buttonGroup'>
                        <select className="">
                            <option>Explore</option>
                        </select>
                        
                        <img src={bellicon} alt="upload" className="bell" />
                        <img src={person} alt="person" />                
                                            
                        
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
      {/* <Container>
        <Row>
            <Col xs={4}><div className='us_banner_heading text-white'><h1>#Hashtag</h1></div></Col>
            <Col md="auto"></Col>
            <Col xs={4} >
            <div className='us_banner_buttonGroup'>
                <select className="">
                    <option>Explore</option>
                </select>
            <div className="doublebtns">
                <img src={bellicon} alt="upload" className="bell" />
                <img src={person} alt="person" />                
                                
            </div>
                            
                           
        </div>
            
            </Col>
        </Row>
    </Container> */}
    
        {/* <div className="bodyArea">
            <Stack className="MainDiv col-md-12">
                <div className="HeadingHastag"><h1>#Hashtags</h1></div>
                <div className="DragAndDropSection">
                    <p className="para1">Drag and drop media files anywhere on the page <br />(OR)</p>
                        <div className="selectFile">
                        <input className=" hidden" type="file" id="files"/>
                        <label for="files" className="bg-black px-[20px] py-[5px] text-white rounded">Select files</label>
                        </div>
                        <p className="para3">Maximum upload file size: 120 MB.</p>
                </div>
                <textarea className="TypseHastag" name="textArea" id="textArea"  cols="30" rows="10" placeholder="Type your image related #Hashtag text here..."></textarea>
                <TypesExample/>   
            </Stack>
        </div> */}
        <div className="MainDiv container">
                    <div className="HeadingHastag"><h1>#Hashtags</h1></div>
                    <div className="DragAndDropSection">
                        <p className="para1">Drag and drop media files anywhere on the page <br />(OR)</p>
                        <div className="selectFile">
                        <input className=" hidden" type="file" id="files"/>
                        <label for="files" className="bg-black px-[30px] py-[8px]  text-white rounded">Select files</label>
                        </div>
                        <p className="para3">Maximum upload file size: 120 MB.</p>
                    </div>
                    <textarea className="TypseHastag" name="textArea" id="textArea"  cols="30" rows="10" placeholder="Type your image related #Hashtag text here..."></textarea>
                    <input type="button" id='Button' className='button rounded px-[30px] py-[8px] bg-black' value='Submit' />
                    <footer>
                    <div className=" p-[20px] footer-div w-[100%]">
                        <h1 className="text-center text-[24px] font-bold">#Hashtag</h1>
                        <p className="text-center text-[16px]">Make Something Awesome</p>
                    </div>
                </footer>
         </div>
    </div>

  )
}

export default Upload_Page;
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import  image1  from '../../assets/images/مولات-scaled.webp';
import  image5  from '../../assets/images/download (2).jpeg';
import  image6  from '../../assets/images/download.jpeg';
import  image4  from '../../assets/images/pu.jpg';
import  image3  from '../../assets/images/صورة واتساب بتاريخ 1446-02-05 في 23.50.48_09a9985f.jpg';
import  image2  from '../../assets/images/صورة واتساب بتاريخ 1446-02-05 في 23.50.42_fdd25e3a.jpg';
import '../Home/Home.css'
import { useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const {t} = useTranslation();
  return (
    <>
    <section id="home" className='home'>
    <Carousel fade>
      <Carousel.Item>
        <img src={image1} alt=''/>
        <Carousel.Caption>
          <a className='carousel-read' href='https://example.com'>Read More</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt=''/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt=''/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image4} alt=''/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </section>
  
      <section id="about" className='about' >
        <div className='container'>
          <div className='row'>
          <div className='col-lg-7'>
          <h2>{t('Aboutheader')}</h2>
              <div className='about-text'>
                <ul>
                 <h3> The most luxurious mall in Badr City</h3>
                  <li><span><FontAwesomeIcon icon={faCaretRight} /></span> <p>This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces</p></li>
                  <li><span><FontAwesomeIcon icon={faCaretRight} /></span> <p>This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces</p></li>
                </ul>
              </div>
              <div className='about-text'>
                <ul>
                 <h3> The most luxurious mall in Badr City</h3>
                  <li><span><FontAwesomeIcon icon={faCaretRight} /></span> <p>This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces</p></li>
                  <li><span><FontAwesomeIcon icon={faCaretRight} /></span> <p>This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces This is a dummy text for filling out spaces this is just a dummy text for filling out blank spaces</p></li>
                </ul>
              </div>
            </div>

            <div className='col-lg-5'>
              <div className='image-about'>
              <img src={image5} alt=''/>
              <img src={image6} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="FAQ" className='faq'>
        <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className='faq-accordion'>
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
          <Accordion.Header>Is It Possible to book shops in the mall?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header>Mall delivery date?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>What facilities will be included in the mall?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
          <Accordion.Header>Is It Possible to book shops in the mall?</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </div>
        </div>
      </section>

      <section id="contact" className='contact'>
        <div className='container'>
          <h2>Contact Us</h2>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='contact-form'>
                <h4>Send us a Message</h4>
                <form>
                  <input type='text' placeholder='Your Name' className='form-control'/>
                  <input type='text' placeholder='Phone Number' className='form-control'/>
                  <textarea  rows="5" cols="100" placeholder="Message" className="form-control" name="message"></textarea>
                  <button type='submit' className='btn'>Send Message</button>
                </form>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='contact-address'>
                <h4>Contact Details</h4>
                <ul>
                  <li>No. 7 - Block 1258 , Beside Suncity Mall , Sheraton</li>
                  <li><span>Hotline</span><b>:</b><a href='tel:215887'>+215887</a></li>
                  <li><span>Phone</span><b>:</b><a href='tel:010276279'>+201203684910</a></li>
                  <li><span>Email</span><b>:</b><a href='mailto:codeastro@realestatest.com'>codeastro@realestatest.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='map'>
        <div className="map-main">

      <title>Google Maps Link</title>


      <h1>Click the link to view the location on Google Maps:</h1>

      <a href="https://maps.app.goo.gl/Qj6T5VKAKkmzm6SA6" target="_blank" rel="noreferrer">Name Mall</a>



      </div>
      </section>
    
    </>
  )
}

export default Home
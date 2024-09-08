import React from 'react'
import { Link } from 'react-scroll';
import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube , faFacebook, faWhatsapp,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import loge from '../../assets/images/ن.png';
import '../Nav/Nav.css';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { useTranslation } from 'react-i18next';



const Navba = () => {
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation(); // استخدام useTranslation مرة واحدة فقط
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (

    <>
        <nav className="nav-main">
        <div className="container-lg">
            <div className="row">
                <div className="col-4">
                  <ul className="nav-social">
                    <li href="#home"><FontAwesomeIcon icon={faYoutube} /></li>
                    <li href="#link"><FontAwesomeIcon icon={faFacebook} /></li>
                    <li href="#link"><FontAwesomeIcon icon={faWhatsapp} /></li>
                    <li href="#link"><FontAwesomeIcon icon={faXTwitter} /></li>
                  </ul>
                </div>
                <div className="col-8">
                <div className="contact" dir="ltr">
                        <a href="tel:1 243-765-4321"><FontAwesomeIcon icon={faPhone} /> +1 243-765-4321</a>
                        <a href="mailto:helpline@realestatest.com"><FontAwesomeIcon icon={faLocationDot} /> codeastro@realestatest.com </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <Navbar expand="lg" >
    <Container>
    <Navbar.Brand href="#home" className='en'><img src={loge} alt=''/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="link-nav">
        <Link className='nav-link'to="home" spy={true} smooth={true} offset={-150} duration={100} >{t('Home')}</Link>
      <Link className='nav-link'to="about" spy={true} smooth={true} offset={-150} duration={100} >{t('About')}</Link>
      <Link className='nav-link'to="FAQ" spy={true} smooth={true} offset={-150} duration={100} > {t('FAQ')}</Link>
      <Link className='nav-link'to="contact" spy={true} smooth={true} offset={-150} duration={100}  > {t('Contact Us')}
      </Link>
      { i18n.language === 'en' &&<button className='nav-link' onClick={() => {i18n.changeLanguage("ar")}}>عربي</button>}
      { i18n.language === 'ar' && <button className='nav-link' onClick={() => {i18n.changeLanguage("en") }}>English</button>}
        </Nav>
        
      </Navbar.Collapse>
      <Navbar.Brand href="#home" className='ar'><img src={loge}  alt=''/></Navbar.Brand>
    </Container>
  </Navbar>

  <Container className='nav-md'>
  <div className='logo-barnd'><img src={loge} alt=''/></div>
  <div className='nav-md-link'>
  <Nav className="link-nav">
        <Link className='nav-link'to="home" spy={true} smooth={true} offset={-150} duration={100} >{t('Home')}</Link>
      <Link className='nav-link'to="about" spy={true} smooth={true} offset={-150} duration={100} >{t('About')}</Link>
      <Link className='nav-link'to="FAQ" spy={true} smooth={true} offset={-150} duration={100} > {t('FAQ')}</Link>
      <Link className='nav-link'to="contact" spy={true} smooth={true} offset={-150} duration={100}  > {t('Contact Us')}
      </Link>
      { i18n.language === 'en' &&<button className='nav-link' onClick={() => {i18n.changeLanguage("ar")}}>عربي</button>}
      { i18n.language === 'ar' && <button className='nav-link' onClick={() => {i18n.changeLanguage("en") }}>English</button>}
        </Nav>
  </div>
  </Container>
  <div className='nav-mobile'>
    <Container>


      <div className='logo-barnd'><img src={loge} alt=''/></div>


      <Button variant="link" onClick={handleShow} className="me-2 icon-bars"><FontAwesomeIcon icon={faBars} /></Button>
      <Offcanvas show={show} onHide={handleClose} placement="top" >
        <Offcanvas.Header closeButton dir='ltr'>
          <Offcanvas.Title><img src={loge} alt=''/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
        <Nav className="link-nav">
        <Link className='nav-link'to="home" spy={true} smooth={true} offset={-150} duration={100} >{t('Home')}</Link>
      <Link className='nav-link'to="about" spy={true} smooth={true} offset={-150} duration={100} >{t('About')}</Link>
      <Link className='nav-link'to="FAQ" spy={true} smooth={true} offset={-150} duration={100} > {t('FAQ')}</Link>
      <Link className='nav-link'to="contact" spy={true} smooth={true} offset={-150} duration={100}  > {t('Contact Us')}
      </Link>
      { i18n.language === 'en' &&<button className='nav-link' onClick={() => {i18n.changeLanguage("ar")}}>عربي</button>}
      { i18n.language === 'ar' && <button className='nav-link' onClick={() => {i18n.changeLanguage("en") }}>English</button>}
        </Nav>
        </Offcanvas.Body>
      </Offcanvas>


    </Container>
  </div>
  </>
  )
}

export default Navba;
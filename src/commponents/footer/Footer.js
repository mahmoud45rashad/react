import React from 'react';
import '../footer/Footer.css';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import  image1  from '../../assets/images/facebook_5968764.png';
import  image2  from '../../assets/images/youtube_1384060.png';
const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-4'>
                    <div className='footer-about'>
                        <h5>About</h5>
                        <p>Our company was established with the aim of providing unique and distinguished shopping experiences.We are committed to providing modern facilities and comprehensive services that meet the diverse needs of customers.Our dedicated team works hard to ensure the highest levels of quality and comfort.We strive to be the ideal destination for shopping and entertainment in the region.</p>
                    </div>
                    <ul className='footer-social'>
                            <li className='facebook'><a href='#Home'><img src={image1} alt=''/></a></li>
                            <li className='xtwitter'><a href='#Home'><FontAwesomeIcon icon={faXTwitter} /></a></li>
                            <li className='youtube'><a href='#Home'><img src={image2} alt=''/></a></li>
                            <li className='instagram'><a href='#Home'><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                </div>
                <div className='col-lg-4 col-md-3'>
                    <div className='footer-links'>
                        <h5>Quick links</h5>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><a href='#Home'>Home</a></li>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><a href='#Home'>About</a></li>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><a href='#Home'>FAQ</a></li>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><a href='#Home'>Contact us</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <div className='footer-details'>
                        <h5>Contact Details</h5>
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
    </footer>
  )
}

export default Footer
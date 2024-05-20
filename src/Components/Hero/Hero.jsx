import React from 'react'
import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/profile-img.png'
import jonas from '../../assets/jonas-pajah.jpg'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {

  const baseText = "I'm";
  const words = [" a Web Developer", " a Programmer", " a WordPress Designer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let wordChangeTimeout;

    if (typing) {
      typingTimeout = setTimeout(() => {
        const currentWord = words[currentWordIndex];
        setDisplayedText((prev) => {
          const nextCharIndex = prev.length - baseText.length;
          if (nextCharIndex < currentWord.length) {
            return baseText + currentWord.slice(0, nextCharIndex + 1);
          } else {
            setTyping(false);
            return prev;
          }
        });
      }, 150);
    } else {
      wordChangeTimeout = setTimeout(() => {
        setTyping(true);
        setDisplayedText(baseText);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(wordChangeTimeout);
    };
  }, [displayedText, typing, currentWordIndex, words]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/jonas.pdf'; // This should be the relative path to your PDF in the public folder
    link.download = 'jonas.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    
  return (
    <div id = "home" className='hero'>
      <img src ={profile_img} alt=""/>
      <div className='social-icons'>
        <a href="https://github.com/jonasmulingbayan" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </a>
        <a href="https://www.facebook.com/jonasisaiah.mulingbayan" target="_blank" rel="noopener noreferrer">
          <FaFacebook/>
        </a>
        <a href="https://www.instagram.com/jonasmulingbayan/" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/jonas-isaiah-mulingbayan-0b0369264/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
      </div>
      <p className='nameHeader'> Hello, Im</p>
      <h1><span>Jonas Isaiah P. Mulingbayan</span></h1>
      <h2>{displayedText}<span className="cursor">|</span></h2>
      <p>I am a Frontend developer from Bacoor City, Cavite, Philippines, with one year of experience. Ready to create captivating digital experiences!</p>
      <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href = '#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume" onClick={downloadResume}>Download CV</div>
      </div>
    </div>
  )
}

export default Hero

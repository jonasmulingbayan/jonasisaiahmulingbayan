import React, { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className='footer'>
      <div className="copyright">
        &copy; <span>{currentYear} <a href="https://www.facebook.com/jonasisaiah.mulingbayan/">Jonas Isaiah P. Mulingbayan</a>&trade;. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer

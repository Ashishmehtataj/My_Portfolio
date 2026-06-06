import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos='zoom-in'
          data-aos-duration="1000">
          <a href="mailto:Ashishmehtataj6@gmail.com" target='_blank' className="items" title='Email'><CgMail className='icons' /></a>
          <a href="https://www.linkedin.com/in/ashish-mehta-b5363a200 " target='_blank' className="items" title='Linkdin'><FaLinkedin className='icons' /></a>
          <a href="https://github.com/Ashishmehtataj" target='_blank' className="items"><FaGithub className='icons' title='Github' /></a>
          <a href="https://vercel.com/ashishmehtataj6-8347s-projects" target='_blank' className="items"><IoLogoVercel className='icons' title='Vercel' /></a>
          <a href="https://app.netlify.com/teams/ashishmehtataj/projects" target='_blank' className="items"><SiNetlify className='icons' title='Netlify' /></a>
        </div>
      </div>
    </>
  )
}

export default Contact

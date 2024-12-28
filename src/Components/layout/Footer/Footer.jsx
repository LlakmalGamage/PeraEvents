import {useEffect}  from 'react'
import './footer.css'
import video2 from "../../../Assets/videos/FormatFactory Screen Record20241228_222308.mp4"

import {FiChevronRight} from 'react-icons/fi'
// import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        {/* <div className='contactDiv flex'>
          <div data-aos='fade-up'  className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>CONTACT WITH US</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos='fade-up'  type='text' placeholder='Enter Email Address'/>
            <button data-aos='fade-up'  className='btn flex' type='submit'>
              SEND<FiSend className='icon'/>
            </button>
          </div>
        </div> */}

        <div className="footerCard flex">
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#link' className='logo flex'>
                 Pera Events.
                {/* <MdOutlineTravelExplore className='icon'/> Travel. */}
              </a>
            </div>

            <div data-aos='fade-up'  className="footerParagraph">
              Your Agriculture Help Hub 
            </div>

            <div data-aos='fade-up'  className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className='footerLinks grid'>

            {/* Group One */}
            <div data-aos='fade-up' data-aos-duration='3000'  className='linkGroup'>
              <span className='groupTitle'>
                About Us
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Profile
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Corporate Information
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our People
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our Achievements
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Our Policies
              </li>
            </div>

            {/* Group Two */}
            <div data-aos='fade-up' data-aos-duration='4000'  className='linkGroup'>
              <span className='groupTitle'>
                Musical shows
              </span>
              
              <a
              href="https://web.facebook.com/sithsiyapath/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer">
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Awarjana
              </li>
              </a>
              <a
  href="https://geethanjalee.com/?fbclid=IwY2xjawHdFZBleHRuA2FlbQIxMAABHVR_YkIXYt03SRmlAsUSO-k2ne63vdptnQhqq0yYB_UTZ6vMxTOrVdtaCA_aem_Cx_Cx-jj0FBSp5wxcyPVpQ"
  target="_blank"
  rel="noopener noreferrer"
>
  <li className="footerList flex">
    <FiChevronRight className="icon" />
    geethanjalee
  </li>
</a>
              <a
                href="https://web.facebook.com/indeewariagroz/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Indivari
              </li>
              </a>
              <a
              href="https://nethrawanee.com/"
              target="_blank"
              rel="noopener noreferrer"
              >

              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Nethrawani
              </li>
              </a>
              <a
              href="https://sathsaraanurawa.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Thathsara Anurawa
              </li>
              </a>
              <a
              href="https://www.pahantharuwa.lk/"
              target="_blank"
              rel="noopener noreferrer"
              >
            <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Pahan Tharuwa
              </li>
              </a>

            <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Wasanthaye Aga
              </li>
              </div>
            {/* Group Three */}
            <div data-aos='fade-up' data-aos-duration='5000'  className='linkGroup'>
              <span className='groupTitle'>
                Other Events
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Conferences
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Exhibitions
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                වල Dramas
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Other Events
              </li>
            </div>


          </div>

          <div className='footerDiv flex'>
            <small>Pera Events</small>
            <small>COPYRIGHTS RESERVED - PE</small>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Footer
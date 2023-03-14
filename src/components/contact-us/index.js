import React from 'react';

import './index.css';

const ContactUs = () => {

  return (
    <div className='contactus-wrapper'>
      <div className='details'>
        <h4 style={{
          color: 'rgb(46, 11, 126)',
          marginTop: '0px'
        }}>Contact us</h4>
        <h1>Get In Touch With Us</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci purus, aliquet non mauris et, finibus volutpat massa. In enim sem, semper id mattis in, porta id orci. Duis lectus eros, interdum in turpis eu, blandit eleifend ipsum. Morbi et posuere quam. Donec ut convallis augue. Etiam gravida commodo tempor. Maecenas neque tellus, dapibus dictum tincidunt mattis, molestie eu nibh. Suspendisse ut nisi aliquet, aliquet purus id, ullamcorper turpis. Nam bibendum lacus sit amet dolor aliquet, ut iaculis lorem viverra. Vestibulum viverra fringilla interdum. Curabitur quis consequat ex. Aliquam eu suscipit felis. Nunc euismod at sapien sed commodo.</p>

        <div>
          <h2>Our Location</h2>
          <p>99 St. Jomblo Park, Toronto, Canada</p>
        </div>

        <div>
          <h2>Phone Number</h2>
          <p>(+1) 412-883-7098</p>
        </div>

        <div>
          <h2>Email Address</h2>
          <p>info@thestore.com</p>
        </div>
      </div>
      <div className='contact-form'>
        <input type={'text'} placeholder='Your Name' />
        <input type={'email'} placeholder='Your Email' />
        <input type={'text'} placeholder='Your Phone' />
        <input type={'text'} placeholder='Your Message'/>
        <button type='button'>Submit Message</button>
      </div>
    </div>
  )
}

export default ContactUs;

import React from 'react'
import {Link} from 'react-router-dom'

const Decline = () => (
  <div className='thank-you' id='decline'>
    <h2>Thanks for your RSVP!</h2>
    <p>We're sad to miss partying with you! But we appreciate your letting us know.</p>
    <img src='../public/couple2.jpg' alt='Theresa and Adam' />
    {/* <p>If you'd like to leave a note for Theresa and Adam to pick up at the shower....</p> */}
    <p>For easy reference, here's their <a href="https://www.theknot.com/us/theresa-gilligan-and-adam-gill-sep-2019-662a1d50-6a1d-4b9e-b3ca-3c0f78cb3811">wedding website</a>.</p>
    <p>And you can always <Link to='/rsvp'>RSVP again</Link> if your information changes!</p>
  </div>
)

export default Decline

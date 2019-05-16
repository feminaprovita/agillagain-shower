import React from 'react'
import {Link} from 'react-router-dom'

const Invite = () => (
  <div id='invite'>
    <h1>We're throwing the happy couple a Jersey shower!</h1>
    <p><img src='../../public/couple.jpg' alt='Theresa and Adam' /></p>
    <p>Because having a Charlotte wedding makes perfect sense for them,<br />but we want to celebrate on our turf!</p>
    <p>(And, realistically, it's just a big party, nothing girly, <span id='men-too'>so men are invited, too</span>!)</p>
    <p>No gifts, please (they're flying home!), but we'll have a place for you to make
    donations to the honeymoon fund and/or home ownership fund, if you like. :)</p>
    <p />
    <div id='party-details'>
      <p>Saturday, July 6, 2019<br />
      3pm-6pm</p>
      <p>Knights of Columbus Hall<br />
      164 High Street, Carteret NJ 07008</p>
    </div>
    <h2><Link to='/rsvp'>Let us know</Link> by June 23!</h2>
  </div>
)

export default Invite

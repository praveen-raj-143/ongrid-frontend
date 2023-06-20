import React from 'react'

const Bookpop = (props) => {
  return (props.popup) ? (
    <div>
        <h1>Thank you for getting in touch! We appreciate you contacting us.</h1>
        <br />
        <h1>One of our colleagues will get in touch with you soon!</h1>
        <br />
        <h1>Have a great day!</h1>
        {props.children}
    </div>
  ) : "";
}

export default Bookpop

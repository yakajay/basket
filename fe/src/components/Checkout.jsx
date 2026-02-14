import React from 'react'

const Checkout = () => {
  return (
    <div className="checkoutBox">
      <Link to="/invoice">
        <button className="checkBtn">Proceed to Checkout</button>
      </Link>
    </div>
  )
}

export default Checkout

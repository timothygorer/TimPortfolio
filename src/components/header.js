import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }

  handlePurchase = (token) => {
    const amount = 999
    const description = "Major Blazers Glass Blunt"
  
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      receipt_email: token.email,
      name: token.name,
      description,
      amount
    }
  
    fetch('http://localhost:9000/stripe-charge', {
       method: 'POST',
       body: JSON.stringify(bodyObject)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/major_blazers_logo.png')} width="150" /></Link>
          <Link to="/ourstory">Our Story</Link>
          <Link to="/FAQs">FAQs</Link>
          <Link to="/Contact Us">Contact Us</Link>
          <StripeCheckout
            amount={1}
            image="https://cl.ly/2A462W1H3a1O/download/major_blazers_flame.png"
            receipt_email
            shippingAddress
            token={this.handlePurchase}
            stripeKey={'pk_test_U00rXKAE9s92NC6isDDrvmKh'}
            description="1 x Major Blazers Glass Blunt" // the pop-in header subtitle
            >
            <button>Buy Now</button>
          </StripeCheckout>
        </div>
      </div>
    )
  }
}

export default Header

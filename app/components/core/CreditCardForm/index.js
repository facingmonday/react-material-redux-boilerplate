import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STRIPE_PUBLIC_KEY } from '../../../../config/constants';


class CreditCardFields extends Component {
  constructor(props) {
    super(props);

    // Set up Stripe form
    this.stripe = Stripe(STRIPE_PUBLIC_KEY);
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');

    this.state = {
      error: '',
    };
  }
  componentDidMount() {
    // Mount Stripe elements
    this.card.mount('#card-element');

    // Set up error handling
    this.card.addEventListener('change', (e) => {
      if (e.error) {
        return this.setState({ error: e.error });
      }

      return this.setState({ error: '' });
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: '' });

    return this.stripe.createToken(this.card)
      .then((result) => {
        if (result.error) {
          return this.setState({ error: result.error });
        }

        // Otherwise, pass pertinent information to the onSubmit function
        const billingResults = {
          plan: this.props.plan,
          quantity: this.props.quantity,
          stripeToken: result.token.id,
          lastFour: result.token.card.last4,
        };

        return this.props.onSubmit(billingResults);
      });
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <ul className="form-list">
          <li>
            <label htmlFor="card-element">
              {this.props.label}
            </label>
            <div id="card-element" />
          </li>
        </ul>
        <div id="card-errors" role="alert" />
      </form>
    );
  }
}

CreditCardFields.propTypes = {
  label: PropTypes.string,
  onSubmit: PropTypes.func,
  plan: PropTypes.string,
  quantity: PropTypes.number,
};

export default CreditCardFields;

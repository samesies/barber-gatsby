// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import { navigate } from 'gatsby';
import jsonp from 'jsonp';
import toQueryString from 'to-querystring';

import styles from './Subscribe.module.scss';

// ----------------------------------------------
// Subscribe
// ----------------------------------------------
export default class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = { 'b_66ddf555dab480e6a8606430b_89b3ee034f': '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ error: '' });

    const url = 'https://samesies.us17.list-manage.com/subscribe/post?u=66ddf555dab480e6a8606430b&amp;id=89b3ee034f'.replace('/post?', '/post-json?');
    const params = toQueryString(this.state);

    jsonp(`${url}&${params}`, { param: 'c' }, (error, data) => {
      if (data.result === 'success') {
        navigate('/subscribe');
      } else {
        this.setState({ error: 'There was an error.' });
        console.error(error);
      }
    });
  }

  render() {
    return (
      <div className={styles.subscribe}>
        <div className={styles.subscribe__container}>
          <span className={styles.subscribe__title}>Subscribe</span>
          <p className={styles.subscribe__text}>Get a weekly email of posts I’ve added to the site.</p>

          <form 
            id="mc-signup" 
            name="mc-embedded-subscribe-form" 
            noValidate
            onSubmit={this.handleSubmit}
          >
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input 
              type="text" 
              name="b_66ddf555dab480e6a8606430b_89b3ee034f" 
              tabIndex="-1" 
              value="" 
              readOnly />
            </div>

            <div className={styles.subscribe__input}>
              <input 
                id="mce-EMAIL" 
                type="email" 
                name="EMAIL" 
                placeholder="Email Address" 
                value={this.state.EMAIL ? this.state.EMAIL : ''}
                onChange={this.handleChange} />
            </div>
            <div className={styles.subscribe__btn}>
              <input id="mc-submit" type="submit" value="Sign Up" name="subscribe" />
            </div>
          </form>

          <p className={styles.subscribe__error} style={{ display: this.state.error ? 'block' : 'none' }}>{this.state.error}</p>
        </div>
      </div>
    );
  }
}

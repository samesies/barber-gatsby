// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';

import styles from './Form.module.scss';

// ----------------------------------------------
// Form
// ----------------------------------------------
export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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

    fetch('https://formcarry.com/s/HkIo0nMb7', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json()).then(json => {
      console.log(json);
      if (json.code === 200) {
        this.setState({});
      } else {
        this.setState({ error: 'Something Went Wrong' });
        console.error(json.meta.error_message);
      }
    }).catch(error => {
      this.setState({ error: 'Something Went Wrong' });
      console.error(error);
    });
  }

  render() {
    return (
      <form 
        className={styles.form} 
        onSubmit={this.handleSubmit}
        ref={form => this.form = form}
      >
        <div className={styles.form__subcontainer}>
          <div>
            <label htmlFor="form-first-name">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              id="form-first-name" 
              required
              value={this.state.firstName ? this.state.firstName : ''}
              onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="form-last-name">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              id="form-last-name" 
              required
              value={this.state.lastName ? this.state.lastName : ''}
              onChange={this.handleChange} />
          </div>
        </div>

        <div>
          <label htmlFor="form-email">E-Mail</label>
          <input 
            type="email" 
            name="email" 
            id="form-email" 
            required
            value={this.state.email ? this.state.email : ''}
            onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="form-message">Message</label>
          <textarea 
            name="message" 
            id="form-message" 
            rows="3"
            value={this.state.message ? this.state.message : ''}
            onChange={this.handleChange} />
        </div>

        <div className={styles.form__submit}>
          <div className={styles.form__btn}>
            <input type="submit" value="Send"/>
          </div>
        </div>

        <p className={styles.form__message} style={{ opacity: this.state.error ? 1 : 0 }}>{this.state.error}</p>
      </form>
    );
  }
}

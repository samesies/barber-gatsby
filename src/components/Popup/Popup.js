// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';

import styles from './Popup.module.scss';

// ----------------------------------------------
// Popup
// ----------------------------------------------
export default class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = { popup: false };

    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', event => {
      if (this.state.popup && event.which === 27) {
        this.togglePopup();
      }
    });
  }

  togglePopup() {
    document.body.classList.toggle('overflow-hidden');

    this.setState(prevState => ({
      popup: !prevState.popup
    }));
  }

  render() {
    return (
      <section className={`${styles.popup} ${this.state.popup ? styles.popup__opening : ''}`} onClick={this.togglePopup}>
        <div className={styles.popup__close}>
          <div className={styles.popup__exit} />
        </div>
        <div>
          {this.props.children}
        </div>
      </section>
    );
  }
}

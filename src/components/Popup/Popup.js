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
    document.addEventListener('keyup', e => {
      if (this.state.popup && e.which === 27) {
        this.togglePopup();
      }
    });

    this.popup.addEventListener('click', e => {
      if (!this.popupContainer.contains(e.target)) {
        this.togglePopup();
      }
    });
  }

  togglePopup() {
    this.setState(prevState => ({
      popup: !prevState.popup
    }));
  }

  render() {
    return (
      <section className={`${styles.popup} ${this.state.popup ? styles.popup__open : ''}`} ref={popup => this.popup = popup}>
        <div className={styles.popup__close}>
          <div className={styles.popup__exit} />
        </div>
        <div ref={popupContainer => this.popupContainer = popupContainer}>
          {this.props.children}
        </div>
      </section>
    );
  }
};

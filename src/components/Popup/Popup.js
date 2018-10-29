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
        this.togglePopup(event);
      }
    });
  }

  togglePopup(event) {
    if (!this.popupContainer.contains(event.target)) {
      this.setState(prevState => ({
        popup: !prevState.popup
      }));
    }
  }

  render() {
    return (
      <section className={`${styles.popup} ${this.state.popup ? styles.popup__open : ''}`} onClick={e => this.togglePopup(e)}>
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

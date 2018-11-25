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
    this.popup.classList.toggle(styles.popup__opening);

    if (this.state.popup) {
      this.popup.classList.add(styles.popup__closing);
      
      setTimeout(() => {
        this.popup.classList.remove(styles.popup__closing);
      }, 800);
    }

    this.setState(prevState => ({
      popup: !prevState.popup
    }));
  }

  render() {
    return (
      <section 
        className={styles.popup} 
        onClick={this.togglePopup}
        ref={popup => this.popup = popup}
      >
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

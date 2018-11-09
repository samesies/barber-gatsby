// ----------------------------------------------
// Imports
// ----------------------------------------------
import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';

// ----------------------------------------------
// Transition
// ----------------------------------------------
const transitionEnter = 600;
const transitionExit = 400;
const transitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0
  },
  entered: {
    transition: `opacity ${transitionEnter}ms ease-in-out`,
    opacity: 1
  },
  exiting: {
    transition: `opacity ${transitionExit}ms ease-in-out`,
    opacity: 0
  }
};

export default props => (
  <TransitionGroup>
    <Transition
      key={props.location.pathname}
      timeout={{
        enter: transitionEnter,
        exit: transitionExit
      }}
    >
      {status => (
        <div style={{ ...transitionStyles[status] }}>
          {props.children}
        </div>
      )}
    </Transition>
  </TransitionGroup>
);

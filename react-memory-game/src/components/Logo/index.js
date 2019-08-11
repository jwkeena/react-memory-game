import React from 'react';
import './style.css';
import { wobble } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    wobble: {
      animationName: wobble,
      animationDuration: '1s'
    }
  });

function Logo(props) {
    return(
        <img className={props.justLost ? `${css(styles.wobble)} logo` : "logo" } alt="logo" src={props.src} onClick={props.clickHandler}/>
    );
};

export default Logo;
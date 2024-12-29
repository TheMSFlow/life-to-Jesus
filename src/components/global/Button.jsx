import React from 'react'
import classNames from 'classnames';
import getButtonStyles from '../utils/getButtonStyles';

const Button = ({type='primary', state = 'default', icon, cta, onClick}) => {
  const buttonStyles = getButtonStyles(type, state);

  return (
    <button 
      className={classNames(buttonStyles)}
      onClick={onClick}
      disabled={state === 'disabled'}
      >
      {icon}
      {cta}
    </button>
  )
}

export default Button
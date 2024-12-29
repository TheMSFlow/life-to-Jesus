import React from 'react'
import Toggle from './Toggle'


const Header = ({icon, logo, toggle, className}) => {

  return (
    <header className= 'w-full h-[5.5rem] border-b-border border-b xl:px-24 flex items-center px-4 lg:px-8'>
        <div className={`${className} w-full flex flex-row items-center`}>
          {icon ? <img src='/icon-32x32.svg' /> : null}
          {logo ? <img src='/ltj-logo.svg' /> : null}
          { toggle ? <Toggle /> : null}
        </div>
    </header>
  )
}

export default Header
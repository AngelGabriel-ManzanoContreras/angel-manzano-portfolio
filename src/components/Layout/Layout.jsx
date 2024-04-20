import React from 'react'

import Navbar from '../components/navbar'

const Template = ( {children, current} ) => {
  return (
    <>
      <Navbar page={current} />
      {children}
    </>
  )
}

export default Template
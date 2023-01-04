import React from 'react'

export default function About(props) {
  return (
    <>
      <div style = {{color : props.mode === 'light'?'black':'white'}}>
        This is About Section
      </div>
    </>
  )
}

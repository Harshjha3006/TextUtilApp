import React from 'react'

export default function Alert(props) {
    const capitalize = (text)=>{
        const newText = text.toLowerCase();
        return text.charAt(0).toUpperCase() + newText.slice(1);
    }
  return (
    props.alert && 
    <>
     <div class={`alert alert-${props.alert.type} alert-dismissible  show" role="alert`}>
  <strong>{capitalize(props.alert.type)}</strong>:  {props.alert.msg}
  </div> 
    </>
  )
}

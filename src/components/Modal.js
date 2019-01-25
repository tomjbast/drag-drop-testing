import React from 'react'
import NonEditableBoardModalWrapper from '../containers/NonEditableBoardModalWrapper'
import EditableBoardModalWrapper from '../containers/EditableBoardModalWrapper'

function Modal({editing}){
  return (
    <div>
      {
        editing ? <EditableBoardModalWrapper/> : <NonEditableBoardModalWrapper/>
      }
    </div>
  )
}

export default Modal

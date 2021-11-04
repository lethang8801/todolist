import React, { useState } from 'react'

const Modal = ({ onAdd, closeModal }: any) => {
   const [inputValue, setInputValue] = useState("");
   const [inputContent, setInputContent] = useState("")
   const onHandleSubmit = (e: any) => {
      e.preventDefault();
      onAdd({title: inputValue, content:inputContent, complete: false})
   }
   const onHandleChange = (e: any) => {
      setInputValue(e.target.value)
   }
   const onHandleChangeContent = (e: any) => {
      setInputContent(e.target.value)
   }
   return (
      <div className="grid modal">
         <div className="modal__overlay" />
         <div className="modal__body">
            <div className="modal__inner">
               <div className="modal-form">
                  <div className="modal-form__header">
                     <h3 className="modal-form__title">ToDoList</h3>
                  </div>
                  <form action="" onSubmit={(e) => onHandleSubmit(e)}>
                     <div className="modal-form__group">
                        <input type="text" className="modal-form__input" placeholder="ToDoList" onChange={(e) => onHandleChange(e)}/>
                        <input type="text" className="modal-form__input" placeholder="Content" onChange={(e) => onHandleChangeContent(e)}/>
                     </div>
                     <div className="modal-form__controls">
                        <button className="btn btn--close" onClick={() => closeModal(false)}>Close</button>
                        <button className="btn btn--add" type="submit" >Add</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Modal


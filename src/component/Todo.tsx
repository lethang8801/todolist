import React, { useState } from 'react'
import Header from './Header';
import Modal from './Modal';
const Todo = ({ todos, setTodos ,onAdd }: any) => {
 const [openModal, setShowModal] = useState(false);

 const checkOn = todos.filter((item: any) => {
  return item.complete === false
 });
 const checkOff = todos.filter((item: any) => {
  return item.complete === true
 });

 return (
  <>
   <div className="app">
    
    <div className="main">
     <div className="grid">
      <Header checkOn = {checkOn}
              checkOff={checkOff}/>
      <div className="grid-row">
       <div className="incomplete">
        <h3 className="title">Incomplete</h3>
        <div className="list">
         {checkOn.map((item: any, index: any) => {
          return <div className="list-item" key ={index}>
           <div className="list-item-title" >
            <input checked={false} type="checkbox" onClick={() => setTodos([...todos, (item.complete = true)])} />
            <h5>{item.title}</h5>
           </div>
           <div className="list-item-category">{item.content}</div>
          </div>
         })}
        </div>
       </div>
      </div>
      <div className="grid-row">
       <div className="completed">
        <h3 className="title">Completed</h3>
        <div className="list">
         {checkOff.map((item: any, index: any) => {
          return <div className="list-item" key ={index}>
           <div className="list-item-title" >
            <input type="checkbox" defaultChecked onClick={() => setTodos([...todos, (item.complete = false)])} />
            <h5>{item.title}</h5>
           </div>
          </div>
         })}
        </div>
       </div>
      </div>
     </div>
    </div>
    <div className="btn-show-modal">
     <button className ="openModalBtn" onClick={() => {setShowModal(true)}}>+</button>
     {openModal && <Modal closeModal={setShowModal}
     onAdd ={onAdd}
     />}
     <i className="fas fa-plus" />
    </div>
   </div>
  </>
 )
}

export default Todo

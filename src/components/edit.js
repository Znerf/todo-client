import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Modal } from 'reactstrap';


function Edit(){
    const [modalOpen, setModalOpen] = useState(false)
    
    return(
        <div>
            <div onClick={()=>setModalOpen(!modalOpen)}><FaEdit /></div>
            <Modal isOpen={modalOpen}>
                <div >
                    <span className="close" onClick={()=>setModalOpen(!modalOpen)}>x</span>
                    <div className="inner" >
                        <form>
                            <h1>Edit Todos</h1>
                            <label>To Do</label>
                            <textarea  className="todo-content" > </textarea>
                            <label> Status</label><br/>
                            <input className="email" type="text" defaultValue=""/> <br/>
                            <button>Edit</button>

                        </form>

                    </div>
                    
                </div>
                
            </Modal>  
        </div>
    )
}

export default Edit;
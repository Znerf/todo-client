import React, { useState } from 'react';
import { Modal } from 'reactstrap';


function Create(){
    const [modalOpen, setModalOpen] = useState(false)
    
    return(
        <div>
            <div style={{alignItems:"right", marginRight:100, float:'right', marginBottom:10 }} > 
                <button onClick={()=>setModalOpen(!modalOpen)}> Create </button> 
            </div>
            <Modal isOpen={modalOpen}>
                <div >
                    <span className="close" onClick={()=>setModalOpen(!modalOpen)}>x</span>
                    <div className="inner" >
                        <form>
                            <h1>Create Todos</h1>
                            <label>To Do</label>
                            <textarea  className="todo-content" > </textarea>
                            <label> Status</label><br/>
                            <input className="email" type="text" defaultValue=""/> <br/>
                            <button>Create</button>
                        </form>
                    </div>
                </div>
            </Modal>  
        </div>
    )
}

export default Create;
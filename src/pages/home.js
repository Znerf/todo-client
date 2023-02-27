import { FaEye, FaTrash} from "react-icons/fa"
import Create from "../components/create";
import Edit from "../components/edit";


function Home(){

    return(
        <div className="home">
            <h1>Dashboard</h1>
            <Create/>
            <table className="styled-table" >
                <thead>
                    <tr>
                        <th className="id"> id </th>
                        <th className="todo"> Todo </th>
                        <th className="status"> Status </th>
                        <th className="ch"> Change </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="id"> 1 </th>
                        <th className="todo"> Cooking </th>
                        <th className="status"> Pending </th>
                        <th className="ch" > 
                            <div style={{display:'flex'}}>
                                <FaEye style={{padding:10}} /> 
                                <FaTrash style={{padding:10}} /> 
                                <div style={{padding:10}}><Edit/></div>                               
                            </div>
                            
                        </th>
                    </tr>

                    <tr>
                        <th className="id"> 1 </th>
                        <th className="todo"> Cooking </th>
                        <th className="status"> Pending </th>
                        <th className="ch" > 
                            <div style={{display:'flex'}}>
                                <FaEye style={{padding:10}} /> 
                                <FaTrash style={{padding:10}} /> 
                                <div style={{padding:10}}><Edit/></div>                               
                            </div>
                            
                        </th>
                    </tr>

                    
                    
                </tbody>
                
            </table>  

    {/* <Modal isOpen={modalOpen}>
                <div >
                    <span className="close" onClick={()=>setModalOpen(false)}>x</span>
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
                
            </Modal>   */}



                    
        
        </div>
    );
}

export default Home
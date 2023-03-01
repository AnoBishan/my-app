import React , {useState} from 'react';
import {FaEdit} from 'react-icons/fa';
import {Modal} from 'reactstrap';

function Edit(){
    const [modalOpen, setModalOpen] = useState(false)

    return(
        <div>
            <div onClick={()=>setModalOpen(true)}><FaEdit/></div>
        <Modal isOpen={modalOpen}>
        <div>
        <span className="close" onClick={()=>setModalOpen(false)}>X</span>
<div className="inner">
<form>
<h1>Edit Todos</h1>
<label>TO DO</label>
<textarea className="todo-content"></textarea>
<label>Status</label><br/>
<input className="email" type="text"/><br/>
<button>Edit</button>
</form>
</div>
</div>
        </Modal>
        </div>
    )
}
export default Edit;
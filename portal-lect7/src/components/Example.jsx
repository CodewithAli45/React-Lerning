import React, { useState } from 'react';
import ReactDOM  from 'react-dom';
import './Modal.css'

function Example() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    }

  return (
    <div>
        <button onClick={handleShowModal}>Show Modal</button>
        {
            showModal && (
                ReactDOM.createPortal(
                    <div className='modal'>
                        <div className='modal-content'>
                            <h2>Modal title</h2>
                            <p>Modal content in this page</p>
                            <button onClick={handleCloseModal}>Close Modal</button>
                        </div>
                    </div>,
                    document.getElementById('modal-root')
                )
            )
        }
    </div>
  )
}

export default Example
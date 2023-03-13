import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

  return (
    <div>
      <h3>Modal in React</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda distinctio ipsa quasi ullam. Aliquid, mollitia ipsam neque sit iste doloremque voluptas debitis optio quia vero totam reiciendis soluta aut. Dolores.
      </p>
      <button onClick={handleShowModal}>Show Modal</button>

      {
        (
            showModal && (
                ReactDOM.createPortal(
                    <div className='modal'>
                        <div className='modal-content'>
                            <h3>Modal Title</h3>
                            <p>Here is the content in modal</p>
                            <button onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>,
                    document.getElementById("modal-root")
                )
            )
        )
      }

    </div>
  )
}

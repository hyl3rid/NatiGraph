import React from 'react';
import { useModal } from '../context/ModalContext';

// type Props = {
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

const Modal = () => {
  const data = useModal();
  return (
    <div className='modal-container'>
      <div className='overlay'></div>
      <div className='modal-card'>
        <div className='modal'>
          <section className='modal-headline'>
            <h2>{data[0].title}</h2>
          </section>
          <div className='exit-button'>
            <button onClick={() => (data[0].isOpen = false)}>X</button>
          </div>
          <section className='modal-body'>
            <p>{data[0].body}</p>
            <button>Sign Me Up</button>
          </section>
        </div>
      </div>
      <style jsx>{`
        .modal-container {
          /* position: fixed; */
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
        }
      `}</style>
    </div>
  );
};

export default Modal;

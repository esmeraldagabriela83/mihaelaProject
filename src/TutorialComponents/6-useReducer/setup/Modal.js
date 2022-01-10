// import React, { useEffect } from 'react';
//
// const Modal = () => {
//   return <div>i'm modal</div>;
// };
//
// export default Modal;


import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
        }, 5000);
    });
    return (
        <div className='modal'>
            <p>{modalContent}</p>
        </div>
    );
};

 export default Modal;



import Modal from 'react-modal';



const AppModal = ({ showModal, handleCloseModal, title }) => {


    

    return (
    

        <Modal
            isOpen={showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={handleCloseModal}
            className="modal">
                <form>
                <div className='form'>
                    <h1>Login</h1>
                    <button>Continue with gmail</button>
                 
                </div>
                </form>
            <p>{title}</p>
            
            
        </Modal>
    
               
        
    );
}

export default AppModal;
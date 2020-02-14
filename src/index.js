import { modalContainer, modalContent, span}  from '../src/styles';


const Modal = props => ReactDOM.createPortal(
      <div className="modal">
          <div style={modalContainer}>
              <div style={modalContent}>
                <span onClick={ props.close } style={span}>&times;</span>
                { props.children }
              </div>
          </div>
      </div>,
      document.querySelector('#modal')
    );

export default Modal;
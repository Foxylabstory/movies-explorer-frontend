import './ModalWindow.css';
import Preloader from './Preloader/Preloader';

const InfoTooltip = ({ isOpen }) => {
    return (
      <div
        className={`modal-window ${isOpen && "modal-window_opened"}`}
      >
        <Preloader />
      </div>
    );
  };
  export default InfoTooltip;
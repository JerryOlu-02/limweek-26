import "./styles/Modal.scss";
import { ReactComponent as Close } from "../assets/svg/cancel.svg";

export default function Modal({
  header,
  closeModal,
  isModalVisible,
  children,
}) {
  return (
    <section className={`modal ${isModalVisible && "visible"}`}>
      <div className="modal_container">
        <div className="modal_header">
          <h4>{header}</h4>

          <button type="button" onClick={closeModal}>
            <Close />
          </button>
        </div>

        {children}
      </div>
    </section>
  );
}

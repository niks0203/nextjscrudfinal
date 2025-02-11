import classes from "./Modal.module.css";
export default function Modal({ hideModalFuntion, children }) {
  return (
    <>
      <div className={classes.backdrop} onClick={hideModalFuntion} />
      <dialog
        open
        className={`${classes.modal}  bg-white p-6 rounded-2xl shadow fixed inset-0 flex items-center justify-center w-2/4`}
      >
        {children}
      </dialog>
    </>
  );
}

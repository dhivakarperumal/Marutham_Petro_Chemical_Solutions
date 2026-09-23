import { createPortal } from 'react-dom';

/**
 * ModalPortal — renders children into #modal-root or document.body.
 * This ensures modals escape any CSS stacking context created by
 * layout transforms, will-change, or z-index and always render
 * directly in the viewport.
 */
const ModalPortal = ({ children }) => {
  if (typeof document === 'undefined') return null;
  const el = document.getElementById('modal-root') || document.body;
  return createPortal(children, el);
};

export default ModalPortal;

import css from './Modal.module.css'
import { useEffect } from 'react'
import PropTypes from 'prop-types';
export const Modal = ({ url, closeModal }) => {

  useEffect(() => {
    window.addEventListener('keydown', handlePressESC)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    return window.removeEventListener('keydown', handlePressESC)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleClick = e => {
    if (e.target.nodeName === 'DIV') closeModal()
  }

  const handlePressESC = (e) => {

    if (e.code === 'Escape') closeModal()
  }
  return (
    <div data-set='overlay' className={css.Overlay} onClick={handleClick}>
      <div className={css.Modal}>
        <img src={url} alt="" />
      </div>
    </div>
  )

}
Modal.propTypes = {
  url: PropTypes.string,
  closeModal: PropTypes.func
}




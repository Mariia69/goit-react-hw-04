import Modal from 'react-modal'
import style from './ImageModal.module.css'

const ImageModal = ({ isOpen, image, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			shouldCloseOnEsc={true}
			shouldCloseOnOverlayClick={true}
			contentLabel='Image Modal'
			className={style.modal}
			overlayClassName={style.overlay}
		>
			<div>
				{image && image.urls.regular && image.alt_description && (
					<img src={image.urls.regular} alt={image.alt_description} className={style.img} />
				)}
				{!image && <p>No image available</p>}
			</div>
		</Modal>
	)
}

export default ImageModal
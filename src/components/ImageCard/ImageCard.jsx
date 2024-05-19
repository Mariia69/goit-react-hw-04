import css from './ImageCard.modul.css'

const ImageCard = ({ image, onClick }) => {
  return (
		<li>
			<div onClick={onClick}>
				<img src={image.urls.small} alt={image.urls.description} className={css.item} />
			</div>
		</li>
	)
};

export default ImageCard
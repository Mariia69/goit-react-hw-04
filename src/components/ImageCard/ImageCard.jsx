import css from "./ImageCard.modul.css";

const ImageCard = ({ item, openModal }) => {
  return (
		<li>
			<div onClick={openModal}>
				<img src={item.urls.small} alt={item.urls.description} className={css.item} />
			</div>
		</li>
	)
};

export default ImageCard
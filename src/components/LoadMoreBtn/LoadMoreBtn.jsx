import style from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={style.button} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn
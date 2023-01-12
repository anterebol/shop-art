import playBtn from '../../assets/play-button.svg';

export const BlogItem = (props) => {
  const { linkInst, linkImg } = props.info;
  return (
    <a href={linkInst} className="page-blog__list-box" target="_blank" rel="noreferrer">
      <div className="page-blog__list-hover"></div>
      <div className="page-blog__list-play">
        <div className="page-blog__list-play_box">
          <img src={playBtn} alt="play-btn" />
        </div>
      </div>
      <div
        className="page-blog__list-art"
        style={{ background: `url(${linkImg}) no-repeat center`, backgroundSize: 'cover' }}
      ></div>
    </a>
  );
};

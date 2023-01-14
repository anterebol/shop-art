import './portfolioList.css';
import { PortfolioImg } from './PortfolioImg';
import { useAppDispatch } from '../../hooks/hooks';
import { openPopup, changePortfolioImage } from '../../store/appReducer';

export const PortfolioList = (props) => {
  const { title, images } = props;
  const dispatch = useAppDispatch();
  const openPopupPortfolio = (imgNumber) => {
    dispatch(changePortfolioImage(imgNumber));
    dispatch(openPopup(true));
  };
  return (
    <div className="page-portfolio__container">
      <h3 className="page-portfolio__container-title">{title}</h3>
      <ul
        className={['page-portfolio__list', `container-${title}`].join(' ')}
        style={{
          gridTemplateRows: `repeat(${Math.ceil(
            images.length / (document.documentElement.scrollWidth > 1000 ? 4 : 2)
          )}, ${document.documentElement.scrollWidth > 1000 ? '20vw' : '40vw'})`,
        }}
      >
        {images.map((img, index) => (
          <PortfolioImg key={img} link={img} func={() => openPopupPortfolio(index)} />
        ))}
      </ul>
    </div>
  );
};

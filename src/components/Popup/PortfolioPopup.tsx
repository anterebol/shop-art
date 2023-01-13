import './popup.css';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { changePortfolioImage } from '../../store/appReducer';
import rightArrow from '../../assets/arrow-right.svg';
import leftArrow from '../../assets/arrow-left.svg';

export const PortfolioPopup = (props) => {
  const { portfolioImages } = props;
  const dispatch = useAppDispatch();
  const numImage = useAppSelector((state) => state.appReducer.openedPortfolioImage);
  return (
    <>
      <div className="portfolio-hover"></div>
      <div className="portfolio-popup">
        <div
          className="portfolio-btn-popup prev-img-btn"
          onClick={() => dispatch(changePortfolioImage(numImage - 1))}
        >
          <img src={leftArrow} alt="" />
        </div>
        <div
          className="portfolio-btn-popup next-img-btn"
          onClick={() => dispatch(changePortfolioImage(numImage + 1))}
        >
          <img src={rightArrow} alt="" />
        </div>
        <div className="portfolio-popup__body">
          <div
            className="portfolio-popup__body-art"
            style={{
              background: ` white url(${portfolioImages[numImage]}) no-repeat center`,
              backgroundSize: 'contain',
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

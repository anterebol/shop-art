import './popup.css';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { changePortfolioImage, openPopup } from '../../store/appReducer';
import rightArrow from '../../assets/arrow-right.svg';
import leftArrow from '../../assets/arrow-left.svg';
import cross from '../../assets/cross.svg';
import { useEffect } from 'react';

export const PortfolioPopup = (props) => {
  const { portfolioImages } = props;
  const dispatch = useAppDispatch();
  const numImage = useAppSelector((state) => state.appReducer.openedPortfolioImage);
  const popupOpened = useAppSelector((state) => state.appReducer.popupOpened);
  useEffect(() => {
    const popupArt = document.getElementById('popup-art');
    popupArt.style.background = `white url(${portfolioImages[numImage]}) no-repeat center`;
    popupArt.style.backgroundSize = 'contain';
  }, [numImage]);
  return (
    <>
      <div className={['portfolio-hover', popupOpened ? 'opened-popup' : ''].join(' ')}></div>
      <div
        className={['portfolio-popup', popupOpened ? 'opened-popup' : ''].join(' ')}
        onClick={() => dispatch(openPopup(false))}
      >
        <div className="popup-cross">
          <img src={cross} alt="cross-img" />
        </div>
        <div
          className="portfolio-btn-popup prev-img-btn"
          onClick={(e) => {
            if (numImage - 1 >= 0) {
              dispatch(changePortfolioImage(numImage - 1));
            } else {
              dispatch(changePortfolioImage(portfolioImages.length - 1));
            }
            e.stopPropagation();
          }}
        >
          <img src={leftArrow} alt="prev" />
        </div>
        <div
          className="portfolio-btn-popup next-img-btn"
          onClick={(e) => {
            if (numImage + 1 <= portfolioImages.length - 1) {
              dispatch(changePortfolioImage(numImage + 1));
            } else {
              dispatch(changePortfolioImage(0));
            }
            e.stopPropagation();
          }}
        >
          <img src={rightArrow} alt="next" />
        </div>
        <div className="portfolio-popup__body" onClick={(e) => e.stopPropagation()}>
          <div className="portfolio-popup__body-art" id="popup-art"></div>
        </div>
      </div>
    </>
  );
};

import { PortfolioList } from '../../components/PortfolioList/PortfolioList';
import './portfolio.css';
import { PortfolioPopup } from '../../components/Popup/PortfolioPopup';
import { useAppSelector } from '../../hooks/hooks';

export const Portfolio = () => {
  const portfolio = useAppSelector((state) => state.appReducer.portfolio);
  const arrImages = [...portfolio.map((portfolioBlock) => portfolioBlock.images)].flat();
  return (
    <>
      <PortfolioPopup portfolioImages={arrImages} />
      <div className="portfolio-box">
        {portfolio.map((portfolioSection, index) => (
          <PortfolioList
            key={portfolioSection.title + index}
            title={portfolioSection.title}
            images={portfolioSection.images}
          />
        ))}
      </div>
    </>
  );
};

export const PortfolioImg = (props) => {
  const { link } = props;
  return (
    <li className="page-portfolio__list-box">
      <div className="page-portfolio__list-hover"></div>
      <div
        className="page-portfolio__list-art"
        style={{ background: `url(${link}) no-repeat center`, backgroundSize: 'contain' }}
      ></div>
    </li>
  );
};

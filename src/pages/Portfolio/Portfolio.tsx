import { useEffect } from 'react';
import { PortfolioList } from '../../components/PortfolioList/PortfolioList';
import './portfolio.css';
const arr = [
  {
    title: 'Nature',
    images: [
      'https://i.pinimg.com/736x/4e/14/7b/4e147b38c373593d34c920f079677c25--acrylic-painting-ideas-on-canvas-diy-painting.jpg',
      'https://wallup.net/wp-content/uploads/2016/01/52696-nature-Graham_Gercken-painting-fall-path.jpg',
      'https://elefant.by/img_products/full_753137067_a.jpg',
      'https://u-stena.ru/upload/iblock/f80/f809877c0842cd61a0c6db05b6cc2152.jpg',
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/natures-grandeur-chris-steele.jpg',
    ],
  },
  {
    title: 'Animals',
    images: [
      'https://phonoteka.org/uploads/posts/2021-05/1621962403_45-phonoteka_org-p-arti-zhivotnikh-krasivo-48.jpg',
      'https://kartinkin.net/uploads/posts/2022-03/1648186417_3-kartinkin-net-p-art-kartinki-zhivotnikh-3.jpg',
      'https://theartbay.com/wp-content/uploads/2021/01/poly-low-animal-stockpack-pixabay.png',
      'https://kartinkin.net/pics/uploads/posts/2022-07/1657103236_27-kartinkin-net-p-roga-losya-art-krasivo-29.jpg',
      'https://phonoteka.org/uploads/posts/2021-05/1621962391_14-phonoteka_org-p-arti-zhivotnikh-krasivo-17.jpg',
      'https://damion.club/uploads/posts/2022-09/1664306684_55-damion-club-p-krasivie-arti-zhivotnikh-vkontakte-66.jpg',
    ],
  },
];

export const Portfolio = () => {
  return (
    <div className="portfolio-box">
      {arr.map((portfolioSection, index) => (
        <PortfolioList
          key={index}
          title={portfolioSection.title}
          images={portfolioSection.images}
        />
      ))}
    </div>
  );
};

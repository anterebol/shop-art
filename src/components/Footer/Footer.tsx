import { Link } from '../Link/Link';
import instagram from '../../assets/contacts/instagram-white.svg';
import facebook from '../../assets/contacts/facebook-white.svg';
import instagramBlue from '../../assets/contacts/instagram-blue.svg';
import facebookBlue from '../../assets/contacts/facebook-blue.svg';
import { INSTAGRAM_LINK, FACEBOOK_LINK } from '../../constants/links';
import './footer.css';
import { useState } from 'react';

export const Footer = () => {
  const [mouseHovered, setMouseHovered] = useState('');

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container__info">
          <h3 className="footer-container__info-title">
            MADE WITH ♥ IN CANADA © SARAH MCKENDRY 2023
          </h3>
          <em className="footer-container__info-text">
            All images on this website are the sole property of Sarah Mckendry Fine Art Inc. and are
            protected under Copyright Law. All creative rights and licences are retained by Sarah
            Mckendry Fine Art Inc., and all images, artwork, and videos may not be copied,
            collected, or used for personal or professional gain without written consent from Sarah
            Mckendry Fine Art Inc.
          </em>
        </div>
        <ul className="footer-container__list">
          <li onMouseEnter={() => setMouseHovered('inst')} onMouseLeave={() => setMouseHovered('')}>
            <Link
              icon={mouseHovered === 'inst' ? instagramBlue : instagram}
              link={INSTAGRAM_LINK}
            />
          </li>
          <li
            onMouseEnter={() => setMouseHovered('faceb')}
            onMouseLeave={() => setMouseHovered('')}
          >
            <Link icon={mouseHovered === 'faceb' ? facebookBlue : facebook} link={FACEBOOK_LINK} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

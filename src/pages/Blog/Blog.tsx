import { BlogList } from '../../components/BlogList/BlogList';
import './blog.css';
import instagram from '../../assets/instagram.svg';
const blogInfo = [
  {
    linkImg:
      'https://phonoteka.org/uploads/posts/2021-04/1619077821_11-phonoteka_org-p-fon-s-kraskami-i-kistochkami-14.jpg',
    linkInst: 'https://www.instagram.com/reel/Cm0_lUsBydx/',
  },
  {
    linkImg:
      'https://phonoteka.org/uploads/posts/2021-04/1619077821_11-phonoteka_org-p-fon-s-kraskami-i-kistochkami-14.jpg',
    linkInst: 'https://www.instagram.com/reel/Cm0_lUsBydx/',
  },
  {
    linkImg:
      'https://phonoteka.org/uploads/posts/2021-04/1619077821_11-phonoteka_org-p-fon-s-kraskami-i-kistochkami-14.jpg',
    linkInst: 'https://www.instagram.com/reel/Cm0_lUsBydx/',
  },
  {
    linkImg:
      'https://phonoteka.org/uploads/posts/2021-04/1619077821_11-phonoteka_org-p-fon-s-kraskami-i-kistochkami-14.jpg',
    linkInst: 'https://www.instagram.com/reel/Cm0_lUsBydx/',
  },
  {
    linkImg:
      'https://phonoteka.org/uploads/posts/2021-04/1619077821_11-phonoteka_org-p-fon-s-kraskami-i-kistochkami-14.jpg',
    linkInst: 'https://www.instagram.com/reel/Cm0_lUsBydx/',
  },
  {
    linkImg:
      'https://phonoteka.org/uploads/posts/2021-04/1619077821_11-phonoteka_org-p-fon-s-kraskami-i-kistochkami-14.jpg',
    linkInst: 'https://www.instagram.com/reel/Cm0_lUsBydx/',
  },
];

export const Blog = () => {
  return (
    <div className="blog-box">
      <a
        href="https://www.instagram.com/artistsarahmckendry/"
        target="_blank"
        className="blog-link"
        rel="noreferrer"
      >
        <div className="blog-link__img">
          <div className="blog-link__hover"></div>
          <div className="blog-link__img-inst">
            <img src={instagram} alt="" />
          </div>
          <img
            src="https://shutniks.com/wp-content/uploads/2020/01/Men_street_464561.jpg"
            alt="avatar"
          />
        </div>
        <p>Instagram</p>
      </a>
      <BlogList blogInfo={blogInfo} />
    </div>
  );
};

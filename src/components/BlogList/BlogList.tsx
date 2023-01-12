import './blogList.css';
import { BlogItem } from './BlogItem';

export const BlogList = (props) => {
  const { blogInfo } = props;
  return (
    <div className="page-blog__container">
      <div
        className="page-blog__list"
        style={{
          gridTemplateRows: `repeat(${Math.ceil(
            blogInfo.length / (document.documentElement.scrollWidth > 1000 ? 4 : 2)
          )}, ${document.documentElement.scrollWidth > 1000 ? '20vw' : '40vw'})`,
        }}
      >
        {blogInfo.map((info) => (
          <BlogItem key={info.linkInst} info={info} />
        ))}
      </div>
    </div>
  );
};

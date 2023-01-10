import './about.css';

export const About = () => {
  return (
    <div className="page-about">
      <div className="page-about__container about-foto"></div>
      <div className="page-about__container">
        <div className="page-about__info">
          <h1 className="page-about__info-title">Anton Zlatov</h1>
          <div className="page-about__info-hr" />
          <p className="page-about__info-text">
            Anton Zlatov is an internationally recognized oil painter, art educator, and published
            author who has spent the last 14 years pouring her heart and soul into her craft, while
            also being a stay at home mom to her two young boys.
          </p>
          <p className="page-about__info-text">
            Being a completely self taught artist, Sarah chose to forge her own path into the art
            world to prove that you do not need prestigious art schools or high-end gallery
            representation to create a meaningful career as an artist. Sarah has been featured in
            multiple International publications, teaches thousands of students around the globe, and
            her paintings can be found in the homes and private collections of wonderful clients
            both near and far.
          </p>
          <p className="page-about__info-text">
            Anton currently lives in Edmonton, Alberta with her young family where she paints out of
            her cozy little home-based studio.
          </p>
          <button className="page-about__info-btn">Contact Anton Zlatov</button>
        </div>
      </div>
    </div>
  );
};

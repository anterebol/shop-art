export const Link = (props: {
  title?: string;
  text?: string;
  link: string;
  icon?: string | undefined;
}) => {
  const { title, text, link, icon } = props;
  return (
    <>
      <a href={link} className="nav-link" target="_blank" rel="noreferrer">
        <img src={icon} alt="" />
        <span>{text}</span>
      </a>
    </>
  );
};

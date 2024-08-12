export const Banner = (props) => {
  const { url, alt } = props;

  return (
    <div className="block__banner">
      <img src={url} alt={alt} className="banner__img" />
    </div>
  )
}

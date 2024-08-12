export const Banner = (props: { url: string; alt: string; }) => {
  const { url, alt } = props;

  return (
    <div className="block__banner">
      <img src={url} alt={alt} className="banner__img" />
    </div>
  )
}

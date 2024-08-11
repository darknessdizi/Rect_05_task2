export const ItemList = (props) => {
  const { text, icon, children } = props;
  const pathIcon = `url(${icon})`;

  return (
    <li className="item__news">
      <div className="item__news__icon" style={{backgroundImage: pathIcon}}></div>
      <div className="item__news__content">{text}</div>
      { children }
    </li>
  )
}

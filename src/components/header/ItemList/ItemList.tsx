export const ItemList = (props) => {
  const { text, icon, children, weigth, nextTxt, color = 'black' } = props;
  const pathIcon = `url(${icon})`;

  return (
    <li className="item__news">
      <div className="item__news__icon" style={{backgroundImage: pathIcon}}></div>
      <div className="item__news__content">
        <span style={{fontWeight: weigth}}>{text}</span>
        {nextTxt ? <span style={{color: color}}>{nextTxt}</span> : ''}
      </div>
      { children }
    </li>
  )
}

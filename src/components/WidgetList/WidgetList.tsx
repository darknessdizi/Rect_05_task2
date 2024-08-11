import { ItemList } from '../header/ItemList/ItemList';

export const WidgetList = (props) => {
  const { list, children } = props;
  
  return (
    <ul className="widget__list">
      { children }
      { list.map((item, index) => <ItemList text={item.info} icon={item.icon} key={index} />) }
    </ul>
  )
}

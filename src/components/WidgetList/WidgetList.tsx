import { IWidgetListProps } from '../../modal/modal';
import { ItemList } from '../header/ItemList/ItemList';

export const WidgetList = (props: IWidgetListProps) => {
  const { list, children, weigth } = props;
  
  return (
    <ul className="widget__list">
      { children }
      { list.map((item, index) => <ItemList text={item.body} icon={item.icon} key={index} weigth={weigth} nextTxt={item.info} color={item.color} />) }
    </ul>
  )
}

import { ItemRates } from "../ItemRates/ItemRates";

export const WidgetExchangeRates = (props) => {
  const { list } = props;

  return (
    <ul className="exchange__rates">
      {
        list.map((item, index) => <ItemRates item={item} key={index} />)
      }
      <a href="#" className="exchange__rates__link">{'...'}</a>
    </ul>
  )
}

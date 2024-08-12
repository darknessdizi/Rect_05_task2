import { IItemRatesProps } from "../../../modal/modal";

export const ItemRates = (props: IItemRatesProps) => {
  const { item } = props;
  return (
    <li>
      <span className="item__rates">{item.label}</span>
      <span className="item__rates">{item.price}</span>
      <span className="item__rates__lost">{item.increment}</span>
    </li>
  )
}

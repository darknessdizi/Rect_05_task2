import { IWidgetAdvertisingProps } from "../../../modal/modal";

export const WidgetAdvertising = (props: IWidgetAdvertisingProps) => {
  const { img, text, info } = props;

  return (
    <div className="advertising">
      <img src={img} alt="" className="advertising__img" />
      <h3>{text}</h3>
      <p>{info}</p>
    </div>
  )
}

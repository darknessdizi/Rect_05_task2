import { ITitleProps } from "../../../modal/modal";

export const Title = (props: ITitleProps) => {
  const { title, active, children, curentClass = '', link = '#' } = props;
  const classNameBlock = `widget__title ${curentClass}`;
  const result = [];

  if (typeof title === 'string') {
    const secondName = active === true ? 'active' : '';
    result.push(<a href={link} className={`widget__title__item ${secondName}`} key="title-0"><span>{title}</span></a>);
  } else {
    title.forEach((item, index) => {
      if (active === true) {
        result.push(<a href={item.link} className="widget__title__item active" key={index}><span>{item.text}</span></a>);
        return;
      }
      if (index === active) {
        result.push(<a href={item.link} className="widget__title__item active" key={index}><span>{item.text}</span></a>);
      } else {
        result.push(<a href={item.link} className="widget__title__item" key={index}><span>{item.text}</span></a>);
      }
    });
  }

  return (
    <div className={classNameBlock}>
      { result }
      { children }
    </div>
  )
}

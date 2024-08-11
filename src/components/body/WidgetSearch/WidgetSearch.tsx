import { Title } from "../../header/Title/Title";

export const WidgetSearch = (props) => {
  const { menu } = props;

  return (
    <div className="widget__search">
      <nav>
        <Title title={menu} active={false}></Title>
      </nav>
      <form action="#" className="search__form">
        <label htmlFor="search" className="form__search__label">Яндекс</label>
        <input type="text" id="search" className="form__search__input" />
        <button type="button" className="form__search__btn">Найти</button>
      </form>
      <span className="form__description">Найдется всё. Например, <span className="form__example">фаза луны сегодня</span></span>
    </div>
  )
}

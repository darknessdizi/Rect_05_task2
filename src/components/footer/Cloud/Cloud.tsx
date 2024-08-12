export const Cloud = (props) => {
  const { children, icon, degree, morning, day } = props;

  return (
    <div className="widget__cloud">
      { children }
      <div className="cloud__body">
        <img src={icon} alt="Иконка" className="cloud__img" />
        <span className="cloud__body__degree">{degree}</span>
        <div className="cloud__info">
          <span className="info__morning">Утром {morning},</span>
          <span className="info__day">днем {day}</span>
        </div>
      </div>
    </div>
  )
}

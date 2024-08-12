export const WidgetColumn = (props) => {
  const { children } = props;

  return (
    <div className="footer__column">
      { children }
    </div>
  )
}

export const WidgetColumn = (props: { children: React.ReactNode; }) => {
  const { children } = props;

  return (
    <div className="footer__column">
      { children }
    </div>
  )
}

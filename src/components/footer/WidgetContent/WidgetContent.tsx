export const WidgetContent = (props) => {
  const { children } = props;
  return (
    <div className="widget__footer">
      { children }
    </div>
  )
}

export const WidgetContent = (props: { children: React.ReactNode; }) => {
  const { children } = props;
  
  return (
    <div className="widget__footer">
      { children }
    </div>
  )
}

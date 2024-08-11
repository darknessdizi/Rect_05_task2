export interface ITitleProps {
  title: string | ({
    text: string,
    link: string,
  })[],
  active?: number | boolean,
  curentClass?: string,
  children?: React.ReactNode,
  link?: string,
}

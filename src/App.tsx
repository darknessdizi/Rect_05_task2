import './App.css';
import { Banner } from './components/body/Banner/Banner';
import { Title } from './components/header/Title/Title';
import { WidgetAdvertising } from './components/header/WidgetAdvertising/WidgetAdvertising';
import { WidgetContent } from './components/footer/WidgetContent/WidgetContent';
import { WidgetNavigation } from './components/body/WidgetNavigation/WidgetNavigation';
import { WidgetList } from './components/WidgetList/WidgetList';
import { arrayHeaderNews, arrayNews, rates } from './data/const';
import { WidgetExchangeRates } from './components/header/WidgetExchangeRates/WidgetExchangeRates';

function App() {

  return (
    <div  className="conteiner">
      <header className="conteiner__header">
        <div className="news">
          <WidgetList list={arrayNews}>
            <Title title={arrayHeaderNews} active={0}>
              <span className="news__date">31 июля, среда 02 32</span>
            </Title>
          </WidgetList>
          <WidgetExchangeRates list={rates} />
        </div>
        <WidgetAdvertising></WidgetAdvertising>
      </header>
      <div className="conteiner__body">
        <WidgetNavigation></WidgetNavigation>
        <Banner></Banner>
        <WidgetContent></WidgetContent>
      </div>
    </div>
  )
}

export default App

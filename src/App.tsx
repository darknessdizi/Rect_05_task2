import './App.css';
import { Banner } from './components/body/Banner/Banner';
import { Title } from './components/header/Title/Title';
import { WidgetAdvertising } from './components/header/WidgetAdvertising/WidgetAdvertising';
import { WidgetContent } from './components/footer/WidgetContent/WidgetContent';
import { WidgetSearch } from './components/body/WidgetSearch/WidgetSearch';
import { WidgetList } from './components/WidgetList/WidgetList';
import { arrayHeaderNews, arrayNews, list1, list2, list3, navigation, rates } from './data/const';
import { WidgetExchangeRates } from './components/header/WidgetExchangeRates/WidgetExchangeRates';
import { WidgetColumn } from './components/footer/WidgetColumn/WidgetColumn';
import { Cloud } from './components/footer/Cloud/Cloud';

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

        <WidgetAdvertising 
          img="./adv.png"
          text="Работа над ошибками"
          info="Смотрите на Яндекс и запоминайте" />

      </header>

      <main className="conteiner__body">
        <WidgetSearch menu={navigation}></WidgetSearch>

        <Banner url="./banner2.jpg" alt="Баннер мстители" />

        <WidgetContent>

          <WidgetColumn>
            <Cloud icon="./cloud.svg" degree="+17°" morning="+17" day="+20">
              <Title title="Погода" active={true}></Title>
            </Cloud>

            <WidgetList list={list1} weigth={900} >
              <Title title="Посещаемое" active={true}></Title>
            </WidgetList>
          </WidgetColumn>

          <WidgetColumn>
            <WidgetList list={[{ body: 'Расписание' }]} >
              <Title title="Карта Германии" active={true}></Title>
            </WidgetList>

            <WidgetList list={list3} >
              <Title title="Телепрограмма" active={true}>
                <span className="btn__media">Эфир</span>
              </Title>
            </WidgetList>
          </WidgetColumn>

          <WidgetColumn>
            <WidgetList list={list2} >
              <Title title="Эфир" active={true}></Title>
            </WidgetList>
          </WidgetColumn>

        </WidgetContent>
      </main>
    </div>
  )
}

export default App

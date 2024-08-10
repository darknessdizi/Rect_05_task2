import './App.css';
import { Card } from './components/Card/Card';
import { ImgItem } from './components/ImgItem/ImgItem';

function App() {

  return (
    <div  className="content">

      <Card title="White card" body={white} >
        <ImgItem info={{path: "./1.jpg", alt: "Liza"}}/>
      </Card>

      <Card title="Black card" body={black} btnTitle="Перейти" >
        <ImgItem info={{path: "./3.jpg", alt: "Nika"}}/>
      </Card>

      <Card title="Red card" body={red} btnTitle="Добавить" >
        <ImgItem info={{path: "./6.jpg", alt: "Dizi"}}/>
      </Card>

      <Card title="Empty card" body="Карточка не содержит изображения." />

    </div>

  )
}

export default App

import './App.css';
import CardV from "./components/cards/CardV.jsx";
import src1 from "../src/assets/img/SP-image.png"
import src2 from "../src/assets/img/SP-image2.png"
import src3 from "../src/assets/img/DesktopImg1.png"
import src4 from "../src/assets/img/DesktopImg2.png"
import src5 from "../src/assets/img/DesktopImg3.png"
import Label from "./components/label/Sale";

const yellowLabel = {
  color: '#3E3E3E',
  background: '#FED74B',
}
const purpleLabel = {
  background: '#7553FF',
  color: '#FFFFFF',
  borderTopLeftRadius: 15,
  borderBottomRightRadius: 12,
  top: '1.6rem'
}
const blueLabel = {
  color: '#FFFFFF',
  background: '#099CE8',
}
const yellowYearLabel = {
  background: '#FFD83B',
}

const borderImg = {
  borderTopRightRadius: 16,
  borderBottomRightRadius: 16
}

const App = () => {
  return (
    <div className="App">
      <div className="cards">
        <div className="cards__card">
          <Label style={yellowLabel} name={'НОВИНКА'}/>
          <CardV img={src1}/>
        </div>
        <div className="cards__card">
          <Label style={purpleLabel} name={'НОВИНКА'}/>
          <CardV img={src2}/>
        </div>
        <div className="cards__card">
          <Label style={blueLabel} name={'НОВИНКА'}/>
          <CardV style={borderImg} img={src3}/>
        </div>
        <div className="cards__card">
          <Label style={yellowYearLabel} name={'КРУГЛЫЙ ГОД'}/>
          <CardV style={borderImg} img={src4}/>
        </div>
        <div className="cards__card">
          <CardV style={borderImg} img={src5}/>
        </div>
      </div>
    </div>
  )
}

export default App;

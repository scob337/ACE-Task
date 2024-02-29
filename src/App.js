import Navbar from './Components/Navbar/Navbar';
import RelPro from './Components/Navbar/RelPro';
import Popup from './Components/Popup/Popup';
import UpperSlider from './Components/Sliders/UpperSlider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <UpperSlider/>
      <br/>
      <br/>
      <RelPro/>
      <Popup/>
    </div>
  );
}

export default App;

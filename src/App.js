import React, { useState } from 'react';
import './App.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import ModalScreen from './components/ModalScreen';
import Header from './components/Header';
import ChefsArea from './components/ChefsArea';

function App() {
  const [zip, setZip] = useState();

  const changeZip = (value) => {
    setZip(value);
  }

  return (
    <div className="App">
      <ModalScreen zip={zip} changeZip={setZip}/>
      <Header zip={zip}/>
      <ChefsArea />
    </div>
  );
}

export default App;

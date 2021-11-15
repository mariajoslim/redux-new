import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakesContainer from './componentes/CakesContainer'
import './App.css'
import itemContainer from './componentes/itemContainer'
import HooksContainer from './componente/HooksContainer'
import newCakeContainer from './componentes/newCakeContainer'




function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <itemContainer />
      <HooksCakeContainer />
     <CakesContainer />
     <newCakeContainer />
     <iceCreamContainer />
    </div>
  </Provider >
  ) 

  }
export default App;

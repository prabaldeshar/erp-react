import Header from './components/Header'
import Body from './components/Body'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const name = "Prabal"
  return (
    <div className="App">
      <Header name="ERP" />
      <Body />
     
    </div>
  );
}

export default App;

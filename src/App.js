import {Helmet} from 'react-helmet';
import './App.css';

function App() {
  return (
      <div className="App">
        <Helmet>
          <script src="./my-form.js" type="text/javascript" />
        </Helmet>
        <h3>Angular Web Component in action</h3>
        <lib-header></lib-header>
        <my-custom-form></my-custom-form>
      </div>
  );
}

export default App;

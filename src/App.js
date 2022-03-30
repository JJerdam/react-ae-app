import * as React from "react";
import {Helmet} from 'react-helmet';
import './App.css';



function App() {
  const handleRef = (ref) => {
    ref.addEventListener('formSubmitted', (ev) => {
      console.log("Event:", ev)
    })
  }
  return (
      <div className="App">
        <Helmet>
          <script src="./my-form.js" type="text/javascript" />
        </Helmet>
        <h3>Angular Web Component in action</h3>
        {/* <lib-header></lib-header> */}
        <my-custom-form ref={handleRef}></my-custom-form>
      </div>
  );
}

export default App;

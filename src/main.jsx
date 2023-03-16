import React from 'react'
import ReactDOM from 'react-dom/client';
import Axioscrudexample from './component/AxiosCRUDExample';
// import Axiosexample from './component/AxiosExample';
// import Fetchexample from './component/FetchExample';
import './index.css'
// import ExamplePromise from './ExamplePromise';
// import Observableexample from './ObservableExample'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ExamplePromise/>
    <Observableexample/> */}
    {/* <Fetchexample/> */}
    {/* <Axiosexample/> */}
    <Axioscrudexample/>
  </React.StrictMode>,
)

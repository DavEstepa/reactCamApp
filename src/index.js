import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase/firebaseConfig';
import 'react-image-gallery/styles/css/image-gallery.css';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
    <Suspense fallback={<p>Cargando...</p>}>
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

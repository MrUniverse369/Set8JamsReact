import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './Nav';
import LandingImg from './LandingImage';
import TrueNature from './TrueNature';
import GalacticCrusade from './GalacticCrusade';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<NavBar/>
<LandingImg/>
<TrueNature/>
<GalacticCrusade/>
  </React.StrictMode>
);



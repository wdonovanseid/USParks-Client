import React from 'react';
import ParkControl from './ParkControl';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div className="contain">
        <Header />
        <div id="spacing">
          <div className="box">
            <div className="inner-box">
              <ParkControl />
              <div id="bottom-button"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

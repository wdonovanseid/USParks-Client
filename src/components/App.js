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
          <ParkControl />
        </div>
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
}

export default App;

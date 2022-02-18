import React from 'react';
import Nav from './components/Navbar/navbar';
import Content from './components/Header/firstsec';
import Grid from './components/secondsec/secondsec';
import Footer from './components/footer/footer';
import Trend from './components/trending/trending';




function App() {
  return (   
    <div>
    <Nav />
    <Content />
    <Grid />
    <Trend />
    <Footer />
    </div> 
     
  );
}

export default App;

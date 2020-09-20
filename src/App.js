import React from 'react';
import CarouselContainer from './CarouselContainer';
import './App.css';
import logoIMG from "./images/politiCards_logo.svg";
import avocadoLogoIMG from "./images/Avocado_logo.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" alt="politiCards" src={logoIMG}></img>
      </div>
      <div className="section-title">Learn about your political candidates</div>
      <div className="carousel-container">
        <CarouselContainer />
      </div>
      <div className="section-title">About politiCards</div>
      <div className="about-section">
        Every election, many elligible voters opt out of voting because they 
        feel that they don’t know enough about the candidates to make an informed decision. This sentiment 
        causes people to not only forgo voting, but also not engage in politics at all. It’s understandable 
        why people may find it difficult to educate themselves on candidates. Although there are numerous 
        articles, websites, and posts about them, their many viewpoints are often scattered, or displayed on 
        long pages using large chunks of text, making it difficult to digest the information. No wonder people 
        think that learning about politics is daunting! 
        <br /> <br />
        With politiCards, our vision is to make self-education on political candidates more approachable to the 
        general public. By organizing candidates’ viewpoints into simple cards and straightforward visualizations, 
        we prevent information overload from scaring people away from learning. Selecting cards and clicking on 
        topics allows people to dive deeper. Our hope is for this project to encourage people to engage more with politics and feel confident enough to 
        go out and vote! 
        <br/> <br />
        The data displayed is from<a className="text-link" href="https://2020election.procon.org/view.source-summary-chart.php?fbclid=IwAR2MHPThLlty_LstQDUTyR8ZBUWIYDyaJkn0WeXujYV4kA5xIFFVo3-sxMU" target="_BLANK">Brittanica’s ProCon.org,</a>which provides up-to-date information on candidates’ 
        positions on key issues.
      </div>
      <div className="footer">
        <p>brought to you by</p>
        <img className="avocado-logo" alt="avocado" src={avocadoLogoIMG}></img>
        <p>Boss Woman: Lillian Bu
          <br />
        Design Stuff: Seo Yeon (Rachel) Kwak
        <br />
        Data God: Calvin Phung</p>
      </div>
    </div>
  );
}

export default App;

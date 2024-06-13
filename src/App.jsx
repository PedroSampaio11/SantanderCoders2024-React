import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import "./styles/app.css";

import article1Img from "./assets/images/article1.png";
import article2Img from "./assets/images/article2.png";
import article3Img from "./assets/images/article3.png";
import article4Img from "./assets/images/article4.png";

// importando biblioteca react que está instalada

class App extends React.Component {
  // metodo responsavel por renderizar o conteudo do nosso componente
  render() {
    return (
      <>
        <Navbar />

        <section id="articles">
          <Article
            tittle="Designing Dashboards"
            provider="NASA"
            thumbnail={article1Img}
          />

          <Article
            tittle="Our World"
            provider="Juliana Silva"
            thumbnail={article2Img}
          />

          <Article
            tittle="Solar Eclipse"
            provider="Jhonattan Patterson"
            thumbnail={article3Img}
          />

          <Article
            tittle="Tech Talk"
            provider="Podcast"
            thumbnail={article4Img}
          />
        </section>
      </>
    );
  }
}

export default App;

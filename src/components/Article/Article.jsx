import React from "react";
import "./article.css";

// ja crio a classe exportando ela
export class Article extends React.Component {
  render() {
    return (
      <article id="article">
        <img src={this.props.thumbnail} alt={this.props.tittle} />

        <div className="article-infos">
          <h2>{this.props.tittle}</h2>
          <h3>{this.props.provider}</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            perferendis eius, recusandae a numquam consectetur esse ea
            voluptates necessitatibus reiciendis labore facilis nesciunt quaerat
            modi atque officia sequi excepturi molestias.
          </p>
        </div>
      </article>
    );
  }
}

import React, {Component} from "react";
import Movie from "./Movie";

class MovieList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.movies.map((movie, index) => {
                  return <li key={index} className="list-group-item"><Movie movie={movie} showAlert={this.props.showAlert}/></li> 
                })}
            </ul>
        );
    }
}

export default MovieList;
import React, {Component} from "react";
import {connect} from "react-redux";
import MovieActions from "../actions/MovieActions";
import ModalActions from "../actions/ModalActions";
import MovieList from "../components/movie/MovieList";

class MoviesPage extends Component {
    componentDidMount(){
        this.props.getMovies();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Movies</h1>
                </div>
                <div className="col-md-12">
                    <MovieList movies={this.props.movies} showAlert={this.props.showAlert}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    };
}

function mapDispatchToProps(dispatch){
    return{
        getMovies: () => {
            dispatch(MovieActions.getMovies());
        },
        showAlert: (message) => {
            dispatch(ModalActions.showAlert(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
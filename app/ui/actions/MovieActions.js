import * as types from "../action_types/MovieActionTypes";
import mockMovieApi from "../api/MockMoviesApi";

class MovieActions {
    static getMovies(){
        var self = this;
        return function(dispatch){
            return mockMovieApi.getMovies().then(movies => {
                dispatch(self.moviesLoaded(movies));
            });
        }
    }
    static moviesLoaded(movies){
        return {type: types.MOVIES_LOADED, movies};
    }
}

export default MovieActions;
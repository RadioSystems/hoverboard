import movies from "./Movies";

//This class just simulates an HTTP api backend
class MockMoviesApi{
    static getMovies(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], movies));
            }, 1000);
        }); 
    }
}

export default MockMoviesApi;
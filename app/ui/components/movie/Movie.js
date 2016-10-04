import React, {Component} from 'react';

class Movie extends Component {
    constructor(props){
        super(props);
        this.handlePlotSummaryClick = this.handlePlotSummaryClick.bind(this);
    }
    getCast(){
        return this.props.movie.cast.map((actor, index) => {
            return <span key={index}>{actor}, </span>
        });
    }
    handlePlotSummaryClick(){
        this.props.showAlert(this.props.movie.plotSummary);
    }
    render() {
        return (
            <div className="movie">
                <div className="row">
                    <div className="col-md-9">
                        <h3>{this.props.movie.title}</h3>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-default btn-block" onClick={this.handlePlotSummaryClick}>
                            <i className="fa fa-file-o"></i>
                            Plot Summary
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <p>{this.props.movie.year}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p><b>Starring: </b>{this.getCast()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;
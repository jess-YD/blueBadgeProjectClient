import React, { Component } from "react";
import MovieTable from "./MovieTable";
import MovieEdit from "./MovieEdit";
import APIURL from "../../helpers/environment";
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            updatePressed: false,
            movieToUpdate: {}
        }
    }
    componentDidMount = () => {
        this.fetchMovies();
    }
    fetchMovies = () => {
        console.log(this.props.token)
        fetch(`${APIURL}/movie/totallybuggin`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                return this.setState({ movies: data.movie })
            })
    }

    movieDelete = (event) => {
        fetch(`${APIURL}/movie/barfout/${event.target.id}`, {
            method: "DELETE",
            body: JSON.stringify({ movie: { id: event.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
            .then((res) => this.fetchMovies())
    }

    MoviesUpdate = (event, movie) => {
        console.log(movie)
        fetch(`${APIURL}/movies/rollingwiththehomies/${event.target.id}`, {
            method: 'PUT',
            body: JSON.stringify({ movie: movie }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchMovies();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedMovies = (event, movie) => {
        this.setState({
            movieToUpdate: movie,
            updatePressed: true
        })
    }

    toggle = () => {
        this.setState({ updatePressed: false })
    }

    render() {
        return (
            <div>
                <MovieTable movies={this.state.movies} updateTable={this.fetchMovies} token={this.props.token} delete={this.movieDelete} update={this.setUpdatedMovies} />
                {this.state.updatePressed ? <MovieEdit toggle={this.toggle} update={this.moviesUpdate} token={this.props.token}
                movie={this.state.movieToUpdate} /> : <div></div>}
            </div>
        )
    }

}

import React, { Component } from 'react';
import { Container, Table, Button, Row, Col, Collapse, Card, CardBody } from 'reactstrap';
import MovieCreate from './MovieCreate';
import { Link } from 'react-router-dom';
import './MovieTable.css';

class MovieTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
        this.toggle = this.toggle.bind(this) //toggle being open or closed
    }

    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <Container className="display">
                <Row>
                    <Col md="12">
                        <div id="header"><h2>Tubular Movies</h2></div>
                        {this.state.modalOpen ? <MovieCreate updateTable={this.props.updateTable} toggle={this.toggle} token={this.props.token} /> : <div></div>}
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Movie Title</th>
                                    <th>Release Year</th>
                                    <th>Super Sick Movie Pic</th>
                                    <th><Button id="create-movie" onClick={this.toggle}>Add Movie</Button></th>
                                 </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.movies.map((movie, id) => {
                                        return (
                                            <tr key={id}>
                                                <th scope="row">{movie.movieTitle}</th>
                                                <td>{movie.releaseYear}</td>
                                                <td><img src={movie.imageURL}></img></td>
                                                <td>
                                                    <Button id={movie.id} className="delete-button" onClick={this.props.delete} outline color="secondary">Delete</Button>
                                                    <Button id={movie.id} onClick={e => this.props.update(e, movie)} outline color="secondary">Update</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MovieTable;
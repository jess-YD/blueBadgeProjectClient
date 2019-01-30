import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


class MovieEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            movieTitle: "",
            releaseYear: "",
            imageURL: "",
        };
    }

    componentWillMount() {
        console.log(this.props)
        this.setState({
            id: this.props.movie.id,
            movieTitle: this.props.movie.movieTitle,
            releaseYear: this.props.movie.releaseYear,
            imageURL: this.props.movie.imageURL,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        console.log(event)
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader toggle={this.props.toggle} charCode="X">Edit Movie</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Input type="text" name="movieTitle" value={this.state.movieTitle} placeholder="Movie Title" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" name="releaseYear" value={this.state.releaseYear}  placeholder="Release Year" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="string" name="imageURL" value={this.state.imageURL}  placeholder="Image Url" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Update Movie</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}



export default MovieEdit;
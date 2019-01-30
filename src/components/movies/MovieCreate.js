import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import APIURL from "../../helpers/environment";

export default class ProjectCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieTitle: "",
            releaseYear: "",
            imageURL: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/movie/make`, {
            method: "POST",
            body: JSON.stringify({ movie: this.state }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
            .then((res) => res.json())
            .then((data) => {
                this.props.updateTable();
                this.setState({
                    movieTitle: "",
                    releaseYear: "",
                    imageURL: "",
                })
            })
        event.preventDefault()
        this.props.toggle()
    }

    render() {
        return (
            <div>
                <Modal isOpen={true}>
                    <ModalHeader toggle={this.props.toggle} charCode="X">Add New Movie</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Input type="text" name="movieTitle" value={this.state.movieTitle} placeholder="Movie Title" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" name="releaseYear" value={this.state.releaseYear} placeholder="Release Year" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="imageURL" value={this.state.imageURL} placeholder="Image URL" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Create Movie</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}
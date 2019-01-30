import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import APIURL from "../../helpers/environment";

export default class ShowCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: "",
            startYear: "",
            endYear: "",
            imageURL: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        fetch(`${APIURL}/show/make`, {
            method: "POST",
            body: JSON.stringify({ show: this.state }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
            .then((res) => res.json())
            .then((data) => {
                this.props.updateTable();
                this.setState({
                    showTitle: "",
                    startYear: "",
                    endYear: "",
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
                    <ModalHeader toggle={this.props.toggle} charCode="X">Add New Show</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Input type="text" name="showTitle" value={this.state.showTitle} placeholder="Show Title" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" name="startYear" value={this.state.startYear} placeholder="Start Year" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" name="endYear" value={this.state.endYear} placeholder="End Year" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="imageURL" value={this.state.imageURL} placeholder="Image URL" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Create Show</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}
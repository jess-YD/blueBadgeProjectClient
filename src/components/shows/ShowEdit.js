import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


class ShowEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTitle: "",
            startYear: "",
            endYear: "",
            imageURL: "",
        };
    }

    componentWillMount() {
        console.log(this.props.show.aid);
        this.setState({
            id: this.props.show.id,
            showTitle: this.props.show.showTitle,
            startYear: this.props.show.startYear,
            endYear: this.props.show.endYear,
            imageURL: this.props.show.imageURL,
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
        this.props.update(event, this.state)
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader toggle={this.props.toggle} charCode="X">Edit Show</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Input type="text" name="showTitle" value={this.state.showTitle} placeholder="Show Title" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" name="startYear" value={this.state.startYear}  placeholder="Start Year" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" name="endYear" value={this.state.endYear}  placeholder="End Year" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="string" name="imageURL" value={this.state.imageURL}  placeholder="Image Url" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary">Update Show</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}



export default ShowEdit;
import React, { Component } from 'react';
import { Container, Table, Button, Row, Col, Collapse, Card, CardBody } from 'reactstrap';
import ShowCreate from './ShowCreate';
import { Link } from 'react-router-dom';
import './ShowTable.css';

class ShowTable extends Component {
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
                        <div id="header"><h2>Far Out Shows</h2></div>
                        {this.state.modalOpen ? <ShowCreate updateTable={this.props.updateTable} toggle={this.toggle} token={this.props.token} /> : <div></div>}
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Show Title</th>
                                    <th>Start Year</th>
                                    <th>End Year</th>
                                    <th>Super Sick Show Pic</th>
                                    <th><Button id="create-show" onClick={this.toggle}>Add Show</Button></th>
                                 </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.shows.map((show, id) => {
                                        return (
                                            <tr key={id}>
                                                <th scope="row">{show.showTitle}</th>
                                                <td>{show.startYear}</td>
                                                <td>{show.endYear}</td>
                                                <td><img src={show.imageURL}></img></td>
                                                <td>
                                                    <Button id={show.id} className="delete-button" onClick={this.props.delete} outline color="secondary">Delete</Button>
                                                    <Button id={show.id} onClick={e => this.props.update(e, show)} outline color="secondary">Update</Button>
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

export default ShowTable;
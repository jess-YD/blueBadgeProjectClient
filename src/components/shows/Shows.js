import React, { Component } from "react";
import ShowTable from "./ShowTable";
import ShowEdit from "./ShowEdit";
import APIURL from "../../helpers/environment";
export default class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: [],
            updatePressed: false,
            showToUpdate: {}
        }
    }
    componentDidMount = () => {
        this.fetchShows();
    }
    fetchShows = () => {
        console.log(this.props.token)
        fetch(`${APIURL}/show/totallybuggin`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                return this.setState({ shows: data.show })
            })
    }

    showDelete = (event) => {
        fetch(`${APIURL}/show/barfout/${event.target.id}`, {
            method: "DELETE",
            body: JSON.stringify({ show: { id: event.target.id } }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
            .then((res) => this.fetchShows())
    }

    ShowsUpdate = (event, show) => {
        console.log(show)
        fetch(`${APIURL}/show/rollingwiththehomies/${event.target.id}`, {
            method: 'PUT',
            body: JSON.stringify({ show: show }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.fetchShows();
                this.setState({ updatePressed: false })
            })
    }

    setUpdatedShows = (event, show) => {
        this.setState({
            showToUpdate: show,
            updatePressed: true
        })
    }

    toggle = () => {
        this.setState({ updatePressed: false })
    }

    render() {
        return (
            <div>
                <ShowTable shows={this.state.shows} updateTable={this.fetchShows} token={this.props.token} delete={this.showDelete} update={this.setUpdatedShows} />
                {this.state.updatePressed ? <ShowEdit toggle={this.toggle} update={this.showsUpdate} token={this.props.token}
                show={this.state.showToUpdate} /> : <div></div>}
            </div>
        )
    }

}

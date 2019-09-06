import React from 'react'
import axios from 'axios';
import PlayerCard from './PlayerCard';

class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/players`)
            .then(response => this.setState({ data: response.data }))
            .catch(error => console.log(error));
    }

    render() {
        console.log('Class component Here');
        return (
            this.state.data.map(player => <PlayerCard player={player} />)
        );
    }
}

export default ClassComponent;
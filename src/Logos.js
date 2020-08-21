import React from 'react'

class Logos extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.callApi()
            .then((response) => {
                this.setState({ response })
            })
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/logos');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div>Logos Place holder</div>
                <div>{this.state.response.map(logo =>
                    <p key={logo.key}>{logo.name}</p>
                )}</div>
            </div>
        )
    }
}

export default Logos
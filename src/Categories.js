import React from 'react'

class Categories extends React.Component {
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
            .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/categories')
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message)

        return body
    }

    render() {
        return (
            <div>
                <div>Categories Place holder </div>
                <div>{this.state.response.map(category =>
                    <p key={category.key}>{category.name}</p>
                )}</div>
            </div>
        )
    }
}

export default Categories
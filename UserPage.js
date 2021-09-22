import React, {Component} from 'react'

class UserPage extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            data: '',
            id: this.props.match.params._id
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch(`https://nndecker.dev/js/k/${this.state.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response,
                    isLoading: false
                })
            })
    }

    render() {
        return (
            this.state.isLoading ?
                (<h1>Loading page of user {this.state.id}...</h1>)
                :
                (
                    <div>
                        <p>{this.state.data}</p>
                    </div>
                )
    )
    }
}

export default UserPage

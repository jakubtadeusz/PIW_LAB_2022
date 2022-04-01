import React from 'react';


class AddGroupPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            query: "abc"
        }
    }

    updateQuery = (event) => {
        this.setState({
            query: event.target.value
        });
    }


    render () {
        return (
            <div>
                <input value={this.state.query} onChange={this.updateQuery}/>
                Add Group
            </div>
        );
    }
}


export default AddGroupPage;
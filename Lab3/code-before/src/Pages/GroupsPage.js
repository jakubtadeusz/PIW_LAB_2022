import React from 'react';
import GroupService from '../Models/GroupService'
import GroupComponent from './Components/GroupComponent';

class GroupsPage extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            groups: [],
            searchButtonContent: "Rozwiń wyszukiwanie",
            showSearch: false,
            courseToFilter: "",
            descriptionToFilter: ""
        }

        this.navigate = props.navigate;
    }

    componentDidMount(){
        this.setState({groups: GroupService.getGroups()});
    }
  
    handleShowSearchButton = () => {
      this.setState({searchButtonContent: (!this.state.showSearch)?"Zwiń wyszukiwanie":"Rozwiń wyszukiwanie"});
      this.setState({showSearch: !this.state.showSearch});
    }

    handleAddGroupButton = () =>{
        this.navigate("/groups/add");
    }

    render () {
        return (
            <div className='GroupsPage'>
                <div className="groups-buttons">
                    <button type="button" className="btn btn-dark" onClick={this.handleShowSearchButton}>{this.state.searchButtonContent}</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleAddGroupButton}>Dodaj nową grupę!</button>
                </div>
                {this.state.groups.map(group=><GroupComponent group={group}/>)}
            </div>
        );
    }
}

export default GroupsPage;
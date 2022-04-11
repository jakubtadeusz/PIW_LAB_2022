import React from 'react';
import GroupService from '../Models/GroupService'
import GroupComponent from './Components/GroupComponent';
import GroupSearch from './Components/GroupSearch';
import './ElementsPage.css'

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

    handleAddGroupButton = () => {
        this.navigate("/groups/add");
    }

    setCourseToFilter = (course) => {
        this.setState({courseToFilter: course});
    }

    setDescToFilter = (desc) => {
        this.setState({descriptionToFilter: desc});
    }

    getGroupSearch = () => {
        return <GroupSearch updateCourse={this.setCourseToFilter} updateDesc={this.setDescToFilter}/>
    }

    filterGroups = (groups) => {
        return groups.filter(group =>{
            return group.course.toUpperCase().includes(this.state.courseToFilter.toUpperCase());
        }).filter(group => {
            return group.description.toUpperCase().includes(this.state.descriptionToFilter.toUpperCase());
        });
    }

    render () {
        return (
            <div className='ElementsPage'>
                <div className="element-buttons">
                    <button type="button" className="btn btn-dark" onClick={this.handleShowSearchButton}>{this.state.searchButtonContent}</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleAddGroupButton}>Dodaj nową grupę!</button>
                </div>
                {this.state.showSearch && this.getGroupSearch()}
                {this.filterGroups(this.state.groups).map((group)=><GroupComponent group={group} key={"group_" + group.id} navigate={this.navigate}></GroupComponent>)}
            </div>
        );
    }
}

export default GroupsPage;
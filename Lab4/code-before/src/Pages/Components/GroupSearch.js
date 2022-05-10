import React from 'react';
import "./Search.css"

class GroupSearch extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {

        }

        this.updateDesc = props.updateDesc;
        this.updateCourse = props.updateCourse;

    }

    componentDidMount(){

    }

    handleDescSearchChange = (event) => {
        this.updateDesc(event.target.value.trim());
    }

    handleCourseSearchChange = (event) => {
        this.updateCourse(event.target.value.trim());
    }
  
    render () {
        return (
        <div className="Search">
            <div className="course-search">
                <input type={"text"} placeholder="Szukaj po przedmiocie" className="form-control" onChange={(event) => this.handleCourseSearchChange(event)}></input>
            </div>
            <div className="description-search">
                <textarea placeholder="Szukaj po opisie" className="form-control" rows="2" onChange={(event) => this.handleDescSearchChange(event)}></textarea>
            </div>
        </div>
        );
    }
}

export default GroupSearch;
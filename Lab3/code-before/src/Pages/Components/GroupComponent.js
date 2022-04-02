import React from 'react';
import './GroupComponent.css'

class GroupComponent extends React.Component {
    
    constructor (props) {
        super(props);
        this.group = props.group;
    }

    componentDidMount(){
    }
  

    render () {
        return (
            <div className='GroupComponent'>
                <div className="courses" key={"courses_" + this.group.id}>
                    <div className="course" >{this.group.course}</div>
                </div>
                <h4>{this.group.name}</h4>
                <p>{this.group.description}</p>
                <h5>Skład grupy:</h5>
                {this.group.team !== undefined && 
                    <div className="members" key={"members_" + this.group.id}>
                        {this.group.team.map((member, i)=>{
                            return <div className="member" key={"member_" + i}><ul>{member.name} {member.surname}</ul><div className='occupation'>{member.occupation}</div></div>
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default GroupComponent;
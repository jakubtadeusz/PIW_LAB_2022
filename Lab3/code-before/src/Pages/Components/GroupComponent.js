import React from 'react';

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
                {this.group.team !== undefined && 
                    <div className="members" key={"members_" + this.group.id}>
                        {this.group.team.map((member, i)=>{
                            return <div className="member" key={"member_" + i}>{member.name} {member.surname} {member.occupation}</div>
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default GroupComponent;
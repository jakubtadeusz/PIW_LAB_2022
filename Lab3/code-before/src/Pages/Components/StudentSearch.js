import "./StudentSearch.css"
import {useState, useEffect} from "react"

function StudentSearch (props) {

    let [tags, setTags] = useState([]);

    const handleCourseSearchChange = (event) => {
        console.log(event.target.value);
    }

    const handleTagsSearchChange = (event) => {
        const tags = event.target.value.split(",").map(tag=>tag.trim()).filter(tag=>tag!=="");
        setTags(tags);
        props.updateTags(tags);
    }

    const handleDescSearchChange = (event) => {
        console.log(event.target.value);
    }

    return (
    <div className="StudentSearch">
        <div className="course-search">
            <input type={"text"} placeholder="Szukaj po przedmiocie" className="form-control" onChange={(event) => handleCourseSearchChange(event)}></input>
        </div>
        <div className="tags-search">
            <input type={"text"} placeholder="Szukaj po tagach, przecinek rozpoczyna nowy tag" className="form-control" onChange={(event) => handleTagsSearchChange(event)}></input>
            {(tags!==undefined && tags.length > 0) &&
                <div className="tags-preview">
                    {tags.map((tag, id)=>{
                        return <div className="tag" key={"search-tag_" + id}>{tag}</div>
                    })}                    
                </div>
            }
        </div>
        <div className="description-search">
            <textarea placeholder="Szukaj po opisie" className="form-control" rows="2" onChange={(event) => handleDescSearchChange(event)}></textarea>
        </div>
    </div>
    );
}
export default StudentSearch;

export default class Student{
    constructor(id, name, surname, email, tags, courses, description, date){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.tags = tags;
        this.courses = courses;
        this.description = description;
        this.date = date;
        this.imageUrl = "";
    }
    constructor(id, name, surname, email, tags, courses, description, date, imageUrl){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.tags = tags;
        this.courses = courses;
        this.description = description;
        this.date = date;
        this.imageUrl = imageUrl;
    }
}
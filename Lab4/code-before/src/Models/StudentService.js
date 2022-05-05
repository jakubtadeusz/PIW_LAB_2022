let newId = 0;

const students = [];

const StudentService = {

    getStudents: () => {
        return new Promise((resolve)=>{
            if(students.length === 0){
                fetch("/students/students.json").then(res=>res.json()).then(json=>{
                    var newStudents = [...json.students.values()]
                    students.push(...newStudents);
                    newId = students.length;
                    resolve(students.sort(function(a, b){return b.date-a.date}));
                })
            }else{
                console.log("xdddd", students.sort(function(a, b){return b.date-a.date}))
                resolve(students.sort(function(a, b){return b.date-a.date}));
            }
        })
    },

    addStudent: (student) => {
        return new Promise((resolve)=>{
            student.id = newId++;
            student.date = Date.now();
            students.push(student);
            resolve(student);
        })
    },

    getStudentImage: (student) => {
        return fetch("https://picsum.photos/70/100").then(resp=>resp.url);
    }
}

export default StudentService;
let newId = 0;

const students = [];

const StudentService = {

    getStudents: () => {
        return new Promise((resolve)=>{
            if(students.length === 0){
                fetch("/students/students.json").then(res=>res.json()).then(json=>{
                    var newStudents = [...json.students.values()].map(s=>{s.date = new Date(s.date); return s})
                    students.push(...newStudents);
                    newId = students.length;
                    resolve(students.sort(function(a, b){return b.date.getTime()-a.date.getTime()}));
                })
            }else{
                resolve(students.sort(function(a, b){return b.date.getTime()-a.date.getTime()}));
            }
        })
    },

    addStudent: (student) => {
        student.id = newId++;
        student.date = new Date(Date.now());
        students.push(student);
        return student.id;
    }
}

export default StudentService;
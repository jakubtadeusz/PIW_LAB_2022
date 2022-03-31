
const StudentService = {
    getStudents: () => {
        return [
            {
                id: 0,
                name: "Jakub",
                surname: "Tadeusz",
                email: "example@mail.com",
                tags: ["React.js", "Angular", "C#", "ASP.NET", ".NET 5.0", "Node.js", "TypeScript", "frontend", "backend"],
                courses: ["PIW", "AK2", "RiPO"]
            },{
                id: 1,
                name: "Jacek",
                surname: "Trzeszczyński",
                email: "example2@mail.com",
                tags: ["Unity", "C#", "frontend"],
                courses: ["PiPG"]
            },
            {
                id: 2,
                name: "Krzysztof",
                surname: "Konieczny",
                email: "example3@mail.com",
                tags: ["Java", "Spring", "backend", "Angular", "TypeScript", "frontend"],
                courses: ["PZ", "UCiSW"]
            }
        ];
    }
}

export default StudentService;
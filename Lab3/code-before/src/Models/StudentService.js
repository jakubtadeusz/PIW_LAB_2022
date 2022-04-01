
const StudentService = {
    getStudents: () => {
        return [
            {
                id: 0,
                name: "Jakub",
                surname: "Tadeusz",
                email: "example@mail.com",
                tags: ["React.js", "Angular", "C#", "ASP.NET", ".NET 5.0", "Node.js", "TypeScript", "frontend", "backend"],
                courses: ["PIW", "AK2", "RiPO"],
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                date: new Date(2022, 3, 10, 15, 27, 32, 21)
            },{
                id: 1,
                name: "Jacek",
                surname: "Trzeszczyński",
                email: "example2@mail.com",
                tags: ["Unity", "C#", "frontend"],
                courses: ["PiPG"],
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                date: new Date(2022, 3, 5, 12, 37, 6, 33)
            },
            {
                id: 2,
                name: "Krzysztof",
                surname: "Konieczny",
                email: "example3@mail.com",
                tags: ["Java", "Spring", "backend", "Angular", "TypeScript", "frontend"],
                courses: ["PZ", "UCiSW"],
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                date: new Date(2022, 2, 27, 4, 35, 10, 49)
            }
        ];
    }
}

export default StudentService;
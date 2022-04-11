
let newId = 0;

const groups = [
    {
        id: newId++,
        name: "Projekt zespołowy",
        team: [{
            name: "Jakub",
            surname: "Tadeusz",
            occupation: "ownership and management",
            email: "example@mail.com"
        },{
            name: "Jacek",
            surname: "Trzeszczyński",
            occupation: "frontend",
            email: "example@mail.com"
        },{
            name: "Krzysztof",
            surname: "Konieczny",
            occupation: "backend",
            email: "example@mail.com"
        }],
        description: "Grupa zajmująca się projektem zespołowym xyz",
        course: "PZ"
    },
    {
        id: newId++,
        name: "PIW-O help",
        team: [{
            name: "Stefan",
            surname: "Rudy",
            occupation: "HTML, CSS, JS",
            email: "example@mail.com"
        },{
            name: "Andrzej",
            surname: "Ważny",
            occupation: "React.js",
            email: "example@mail.com"
        },{
            name: "Natalia",
            surname: "Lewa",
            occupation: "TypeScript, Docker",
            email: "example@mail.com"
        }],
        description: "Wspólne opracowywanie materiałów na egzamin z PIW",
        course: "PIW"
    },
    
];

const GroupService = {

    getGroups: () =>{
        return groups.sort(function(a, b){return b.id-a.id});
    },

    addGroup: (group) =>{
        group.id = newId++;
        groups.push(group);
        return group.id;
    }

}

export default GroupService;

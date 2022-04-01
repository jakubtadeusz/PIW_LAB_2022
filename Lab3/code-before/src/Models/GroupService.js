
let newId = 0;

const groups = [
    {
        id: newId++,
        name: "Projekt zespołowy",
        owner: {
            email: "example@mail.com",
            name: "Jakub",
            surname: "Tadeusz"
        },
        team: [{
            name: "Jakub",
            surname: "Tadeusz",
            occupation: "ownership and management"
        },{
            name: "Jacek",
            surname: "Trzeszczyński",
            occupation: "frontend"
        },{
            name: "Krzysztof",
            surname: "Konieczny",
            occupation: "backend"
        }],
        description: "Grupa zajmująca się projektem zespołowym xyz",
        course: "PZ"
    },
    {
        id: newId++,
        name: "PIW-O help",
        owner: {
            email: "example@mail.com",
            name: "Stefan",
            surname: "Rudy"
        },
        team: [{
            name: "Stefan",
            surname: "Rudy",
            occupation: "HTML, CSS, JS"
        },{
            name: "Andrzej",
            surname: "Ważny",
            occupation: "React.js"
        },{
            name: "Natalia",
            surname: "Lewa",
            occupation: "TypeScript, Docker"
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

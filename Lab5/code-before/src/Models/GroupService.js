
let newId = 0;

const groups = [];

const GroupService = {

    getGroups: () =>{
        return new Promise(resolve=>{
            if(groups.length === 0){
                fetch("/groups/groups.json").then(res=>res.json()).then(json=>{
                    console.log(json.groups);
                    groups.push(...json.groups);
                    newId = groups.length;
                    resolve(groups.sort(function(a, b){return b.id-a.id}));
                })
            }else{
            resolve(groups.sort(function(a, b){return b.id-a.id}));
            }
        })
    },

    addGroup: (group) =>{
        group.id = newId++;
        groups.push(group);
        return group.id;
    }

}

export default GroupService;

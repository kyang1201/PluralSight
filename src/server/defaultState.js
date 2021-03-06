export const defaultState = {
    users: [
        {
            id: "U1",
            name: "Dev"
        },
        {
            id: "U2",
            name: "QA"
        }
    ],
    groups: [
        {
            name: "To Do",
            id: "G1",
            owner: "U1"
        },
        {
            name: "Doing",
            id: "G2",
            owner: "U1"
        },
        {
            name: "Done",
            id: "G3",
            owner: "U1"
        }
    ],
    tasks: [
        {
            name: "Refactor Tests",
            id: "T1",
            group: "G1",
            owner: "U2",
            isComplete: false
        },
        {
            name: "Compile ES6",
            id: "T2",
            group: "G2",
            owner: "U1",
            isComplete: false
        },
        {
            name: "Update component snapshots",
            id: "T3",
            group: "G2",
            owner: "U1",
            isComplete: false
        },
        {
            name: "Other 1",
            id: "T1",
            group: "G3",
            owner: "U2",
            isComplete: false
        },
        {
            name: "Other 2",
            id: "T2",
            group: "G3",
            owner: "U1",
            isComplete: false
        },
        {
            name: "Other 3",
            id: "T3",
            group: "G3",
            owner: "U1",
            isComplete: false
        }
    ],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!!!"
    }]
}
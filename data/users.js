let allusers = [
    {
        "id": 0,
        "name": "admin",
        "balance": 0,
        "dateUpdated": "2022-10-07T19:58:11.583Z"
    },
    {
        "id": 1,
        "name": "ivan",
        "balance": 0,
        "dateUpdated": "2022-10-07T20:03:51.055Z"
    },
    {
        "id": 2,
        "name": "grisha",
        "balance": 0
    },
    {
        "id": 3,
        "name": "bob",
        "balance": 0
    }
]

export function set(id, value) {
    allusers[id] = value;
}

export function get(id) {
    return allusers[id];
}
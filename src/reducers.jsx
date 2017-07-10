import { combineReducers } from 'redux'

var sampleTodos = [
    {
        id: 0,
        text: "Start practice React app",
        status: "completed",
        dateCreated: Date.parse("2017-06-19T12:30:00"),
        dateUpdated: Date.parse("2017-06-19T12:31:02"),
        edit: false
    },
    {
        id: 1,
        text: "Do initial setup",
        status: "completed",
        dateCreated: Date.parse("2017-06-19T12:30:02"),
        dateUpdated: Date.parse("2017-06-19T18:12:36"),
        edit: false
    },
    {
        id: 2,
        text: "Add adding functionality",
        status: "completed",
        dateCreated: Date.parse("2017-06-19T12:30:05"),
        dateUpdated: Date.parse("2017-06-20T13:59:12"),
        edit: false
    },
    {
        id: 3,
        text: "Add deleting functionality",
        status: "failed",
        dateCreated: Date.parse("2017-06-19T12:30:12"),
        dateUpdated: Date.parse("2017-06-21T13:42:31"),
        edit: false
    },
    {
        id: 4,
        text: "Add editing functionality",
        status: "failed",
        dateCreated: Date.parse("2017-06-19T12:30:15"),
        dateUpdated: Date.parse("2017-06-21T14:11:01"),
        edit: false
    },
    {
        id: 5,
        text: "Add status changes",
        status: "completed",
        dateCreated: Date.parse("2017-06-19T12:30:21"),
        dateUpdated: Date.parse("2017-06-21T19:21:44"),
        edit: false
    },
    {
        id: 6,
        text: "Add filtering",
        status: "completed",
        dateCreated: Date.parse("2017-06-19T12:30:25"),
        dateUpdated: Date.parse("2017-06-22T15:33:07"),
        edit: false
    },
    {
        id: 7,
        text: "Change to table format",
        status: "completed",
        dateCreated: Date.parse("2017-06-19T12:30:31"),
        dateUpdated: Date.parse("2017-06-23T10:44:29"),
        edit: false
    },
    {
        id: 8,
        text: "Add sorting",
        status: "completed",
        dateCreated: Date.parse("2017-06-19T12:30:39"),
        dateUpdated: Date.parse("2017-06-26T14:19:01"),
        edit: false
    },
    {
        id: 9,
        text: "Handle multiple tables",
        status: "active",
        dateCreated: Date.parse("2017-06-19T12:30:46"),
        dateUpdated: Date.parse("2017-06-19T12:30:46"),
        edit: false
    },
    {
        id: 10,
        text: "Add exporting and importing",
        status: "active",
        dateCreated: Date.parse("2017-06-19T12:30:53"),
        dateUpdated: Date.parse("2017-06-19T12:30:53"),
        edit: false
    },
    {
        id: 11,
        text: "Finish App",
        status: "active",
        dateCreated: Date.parse("2017-06-19T12:31:00"),
        dateUpdated: Date.parse("2017-06-19T12:31:00"),
        edit: false
    },
    {
        id: 12,
        text: "Fix Status sorting since it reverses tiebreaker as well",
        status: "active",
        dateCreated: Date.parse("2017-06-26T14:20:05"),
        dateUpdated: Date.parse("2017-06-26T14:20:05"),
        edit: false
    },
    {
        id: 13,
        text: "Re-style colours for matching",
        status: "active",
        dateCreated: Date.parse("2017-06-26T14:20:12"),
        dateUpdated: Date.parse("2017-06-26T14:20:12"),
        edit: false
    },
    {
        id: 14,
        text: "Change todo status icons to be generated from array",
        status: "active",
        dateCreated: Date.parse("2017-06-26T14:20:19"),
        dateUpdated: Date.parse("2017-06-26T14:20:19"),
        edit: false
    },
    {
        id: 15,
        text: "Convert dates to human readable strings",
        status: "active",
        dateCreated: Date.parse("2017-06-26T14:26:42"),
        dateUpdated: Date.parse("2017-06-26T14:26:42"),
        edit: false
    },
    {
        id: 16,
        text: "Make filters toggle",
        status: "active",
        dateCreated: Date.parse("2017-06-26T14:27:11"),
        dateUpdated: Date.parse("2017-06-26T14:27:11"),
        edit: false
    },
]

function todo(state=sampleTodos, action) {
    switch (action.type){
        case "ADD_TODO":
            return [...state, {
                text: action.text,
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                status: "active",
                dateCreated: Date.now(),
                dateUpdated: Date.now(),
                edit: false
            }];

        case "DELETE_TODO":
            return state.filter(item => item.id !== action.id);

        case "EDIT_TODO":
            return state.map(item => item.id == action.id ?  (item.edit ? {...item, edit: false} : {...item, edit: true}) : (item.edit ? {...item, edit: false} : item));

        case "UPDATE_TODO":
            return state.map(item => item.id == action.id ? {...item, edit: false, text: action.text, dateUpdated: Date.now()} : item);

        case "CHANGE_STATUS_TODO":
            return state.map(item => item.id == action.id ? (item.status == action.status ? {...item, status: "active", dateUpdated: Date.now()} : {...item, status: action.status, dateUpdated: Date.now()}) : item);

        default:
            return state
    }
}

function filter(state=null, action) {
    switch (action.type) {
        case "CHANGE_FILTER":
            return action.filter

        default:
            return state
    }
}

var initialSort = {
    attribute: 'dateCreated',
    ascending: true
}

function sort(state=initialSort, action) {
    switch (action.type) {
        case "CHANGE_SORT":
            return (action.attribute == state.attribute ? (state.ascending ? {...state, ascending: false} : {...state, ascending: true}) : {attribute:action.attribute, ascending: true})

        default:
            return state
    }
}

const rootReducer = combineReducers({todo, filter, sort})

export default rootReducer

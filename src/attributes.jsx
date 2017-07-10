function sortByText(a, b) {
    if (a.text <= b.text) {
        return -1;
    }

    if (a.text > b.text) {
        return 1;
    }
}

function sortByStatus(a, b) {
    if (a.status == "completed" && b.status != "completed") {
        return -1;
    }

    if (a.status != "completed" && b.status == "completed") {
        return 1;
    }

    if (a.status == "active" && b.status != "active") {
        return -1;
    }

    if (a.status != "active" && b.status == "active") {
        return 1;
    }

    if (a.status == b.status) {
        return a.dateUpdated - b.dateUpdated;
    }
}

function sortByDateCreated(a,b) {
    return a.dateCreated - b.dateCreated;
}

function sortByDateUpdated(a,b) {
    return a.dateUpdated - b.dateUpdated;
}

export const TODO_ATTRIBUTES = [
    {
        id: 0,
        name: 'text',
        displayName: 'Text',
        ascendingClassName: 'fa fa-sort-alpha-asc',
        descendingClassName: 'fa fa-sort-alpha-desc',
        sortFunction: sortByText
    },
    {
        id: 1,
        name: 'status',
        displayName: 'Status',
        ascendingClassName: 'fa fa-sort-amount-asc',
        descendingClassName: 'fa fa-sort-amount-desc',
        sortFunction: sortByStatus
    },
    {
        id: 2,
        name: 'dateCreated',
        displayName: 'Date Created',
        ascendingClassName: 'fa fa-sort-numeric-asc',
        descendingClassName: 'fa fa-sort-numeric-desc',
        sortFunction: sortByDateCreated
    },
    {
        id: 3,
        name: 'dateUpdated',
        displayName: 'Date Updated',
        ascendingClassName: 'fa fa-sort-numeric-asc',
        descendingClassName: 'fa fa-sort-numeric-desc',
        sortFunction: sortByDateUpdated
    },
]

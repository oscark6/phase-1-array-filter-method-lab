// Code your solution here
function findMatching(list, name) {
    return list.filter (element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (list, str) {
    const size = str.length;
    return list.filter (name => name.slice(0, size) === str);
}

function matchName(list, str) {
    return list.filter(obj => obj.name === str);
}
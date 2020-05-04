export const jsonData = [
    { "id": 1, "items": [{ "id": 2,  "items": [{ "id": 3 }, {"id": 14}, {"id": 15}, {"id": 16}] }] },
    { "id": 4, "items": [{ "id": 5,  "items": [{ "id": 6 }, {"id": 12}, {"id": 13}] }] },
    { "id": 7 },
    { "id": 8, "items": [{ "id": 8 }, {"id": 9}, {"id": 10}, {"id": 11}] },
    { "id": 17, "items": [{ "id": 18,  "items": [{ "id": 19 }, {"id": 20}, {"id": 21}] }, {"id": 22}] }
];

console.log(jsonData);

function ntree(arr) {
    let mapElm = {};
    for (let idx in arr) {
        if (arr.hasOwnProperty(idx)) {
            // show tree
            mapElm = arr[idx];
            // if exists leaf
            if (mapElm.items) {
                console.log("Tree: " + arr[idx].id);
                ntree(mapElm.items);
            } else {
                console.log("Leaf: " + arr[idx].id);
            }
        }
    }
}

//ntree(jsonData);
export default jsonData;

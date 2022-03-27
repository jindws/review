const csv1 = `name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;
const datas = csv1.split('\n');
const title = datas.shift().split(',');
const list = [];

for (const itm of datas) {
    if (!itm.length) continue;
    const t = itm.split(',');
    const obj = {};
    for (const key of title) {
        obj[key] = t.shift() || '';
    }
    list.push(obj);
}
const result = list.find(itm=>!itm.parent)

function addChildren(result){
    if(!result)return
    result.children = list.filter(itm=>itm.parent === result.name)
    for(let itm of result.children){
        addChildren(itm)
    }
}

addChildren(result)

console.log(result)
const handleGet = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return []
    }
}
const handleAdd = (id) => {
    const storedList = handleGet();
    if(storedList.includes(id)){
        alert(`${id} already stored`);
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list' , storedListStr)
    }
}
const handleRemove = () => {

}

export {handleAdd , handleGet}
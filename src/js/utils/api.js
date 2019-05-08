
const addNote = (arr)=> {

    return new Promise((resolve, reject) => {
        if(arr){
            localStorage.setItem('notes',JSON.stringify(arr))
            resolve('success')
        } else {
            reject( new Error('error'))
        }})
}

function saveObjToArr(obj){
    note.push(obj)
}

const deleteNote = (id) => {
    return new Promise((resolve,reject) => {
        if(typeof id === "number"){
            let arr = JSON.parse(localStorage.getItem('notes'));
            // arr.splice(arr.indexOf(arr.find(el => el.id === id)),1);
            // localStorage.setItem("notes",JSON.stringify(arr));
            const newArr = arr.filter(el => el.id !== id);
            localStorage.setItem("notes",JSON.stringify(newArr));
            resolve("success")
        }else{
            reject(new Error('Error'))
        }
    })
}


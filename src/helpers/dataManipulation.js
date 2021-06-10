class Manipulation{
    static removeNulls(roughData){
        return roughData.roughData.filter((item) => {
            if(item.name){ 
                return item;
            };
        });
    }

    static doubleSort(mildData){
        return mildData.sort((a,b) => {
            
            return a.listId - b.listId || parseInt(a.name.match(/[0-9]{1,}/)) - parseInt(b.name.match(/[0-9]{1,}/));
        });
    }

    // static sortByName(smoothData){
    //     return smoothData.sort((a, b) => {
    //         return parseInt(a.name.match(/[0-9]{1,}/)) - parseInt(b.name.match(/[0-9]{1,}/));
    //     });
    // }
}

export default Manipulation;
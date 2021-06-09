class Manipulation{
    static removeNulls(roughData){
        return roughData.roughData.map((item) => {
            if(item.name !== null && item.name.length !== 0){ 
                return item;
            };
        });
    }

    static sortById(mildData){
        return mildData.sort((a,b) => {
            a = a.listId;
            b = b.listId;
            return a - b;
        });
    }

    static sortByName(smoothData){
        return smoothData.sort((a, b) => {
            return parseInt(a.name.match(/[0-9]{1,}/)) - parseInt(b.name.match(/[0-9]{1,}/));
        });
    }
}

export default Manipulation;
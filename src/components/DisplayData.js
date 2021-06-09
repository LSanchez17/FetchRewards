import Manipulation from '../helpers/dataManipulation';

const DisplayData = (data) => {
    //manipulation here
    //done with three variables to ease testing of manipulation class
    let mildData = Manipulation.removeNulls(data);
    let sortedData = Manipulation.sortById(mildData);
    let alphabetizedData = Manipulation.sortByName(sortedData);

    console.log(alphabetizedData)
    return(
        <div>
            <p>Data goes here</p>
            {/* {alphabetizedData ? alphabetizedData : <h1>Loading....</h1>}  */}
        </div>
    );
}

export default DisplayData;
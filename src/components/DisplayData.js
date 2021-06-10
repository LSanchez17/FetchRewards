import Manipulation from '../helpers/dataManipulation';
import Tabulation from '../components/Tabulation';

const DisplayData = (data) => {
    //manipulation here
    //done with three variables to ease testing of manipulation class
    let mildData = Manipulation.removeNulls(data);
    let sortedData = Manipulation.sortById(mildData);
    let alphabetizedData = Manipulation.sortByName(sortedData);

    return(
        <div>
            <p>Data goes here</p>
            {alphabetizedData ? <Tabulation data={alphabetizedData} /> : <h1>Loading....</h1>} 
        </div>
    );
}

export default DisplayData;
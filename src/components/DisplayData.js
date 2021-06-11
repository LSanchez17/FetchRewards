import Manipulation from '../helpers/dataManipulation';
import Tabulation from '../components/Tabulation';

const DisplayData = (roughData) => {
    //manipulation here
    //done with two variables to ease testing of manipulation class
    let mildData = Manipulation.removeNulls(roughData);
    let sortedData = Manipulation.doubleSort(mildData);

    return(
        <div>
            {sortedData ? <Tabulation data={sortedData} /> : <h1>Loading....</h1>} 
        </div>
    );
}

export default DisplayData;
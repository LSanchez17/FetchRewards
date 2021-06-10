import { useEffect, useState } from 'react';
import API from '../helpers/ApiConnection';
import DisplayData from './DisplayData';

const Intro = () => {
    let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let roughData = await API.getData();

            setData(roughData);
        };

        setTimeout(() => {
        }, 5000)

        fetchData();
    });

    return(
        <div>
            <p>Welcome to the Fetch Rewards Exercise!</p>
            <ul>
                <li>Displays data grouped by "listId"</li>
                <li>Sortedby "listId" and then by "name"</li>
                <li>No "name" === null or blank</li>
            </ul>
            {data ? <DisplayData roughData={data} /> : <h1>Loading...</h1> }
        </div>
    );
}

export default Intro;
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
            <h1 className='mb-2 pt-4 '>Welcome to the Fetch Rewards Exercise!</h1>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item m-0'>Displays data without nulls or empty names</li>
                <li className='list-group-item'>Sorted by "listId" and then by "name"</li>
                <li className='list-group-item'>Make it pretty-ish</li>
            </ul>
            {data ? <DisplayData roughData={data} /> : <h1>Loading...</h1> }
        </div>
    );
}

export default Intro;
import { useEffect, useState } from "react";

const Tabulation = ({data}) => {
    let [currentPage, setCurrentPage] = useState(0);
    let [newPage, setNewPage] = useState(1);
    let [displayedRows, setDisplayedRows] = useState();

    console.log(data[data.length-1]);
    let rowsOfData = data.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>Name: {item.name}</td>
                <td>List Id:{item.listId}</td>
                <td>Id: {item.id}</td>
            </tr>
        );
    });

    const paginate = () => {
        //steps through each set of 5 items in the data at a time
        setCurrentPage(currentPage => currentPage += 1);
        setNewPage(newPage => newPage += 1);

        if(newPage*5 >= rowsOfData.length){
            document.querySelector('#next').classList = 'd-none';
        }
        if(currentPage*5 >= 5){
            document.querySelector('#back').classList = 'btn btn-warning btn-sm';
        }

        setDisplayedRows(rowsOfData.slice(currentPage*5, newPage*5));
    }

    const goBack = () => {
        setCurrentPage(currentPage => currentPage -= 1);
        setNewPage(newPage => newPage -= 1);

        if(currentPage - 1 < 0){
            document.querySelector('#back').classList = 'd-none';
        }

        setDisplayedRows(rowsOfData.slice(currentPage*5, newPage*5));
    }

    const resetView = () => {
        //return to the beginning
        setCurrentPage(0);
        setNewPage(1);
        setDisplayedRows(rowsOfData.slice(0,5));
        document.querySelector('#next').classList = 'btn btn-info btn-sm';
        document.querySelector('#back').classList = 'd-none';
    }

    const viewData = () => {
        //view the data rendering
        setDisplayedRows(rowsOfData.slice(currentPage*5, newPage*5));
        document.querySelector('#reset').classList = 'btn btn-danger btn-sm';
        document.querySelector('#next').classList = 'btn btn-info btm-sm';
    }
    
    useEffect(() => {
        setTimeout(() => {
            viewData();
        }, 2500);
    })

    return(
        <div>
            <table className='table'>
                <tbody>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>ListId</th>
                        <th scope='col'>Id</th>
                    </tr>
                    {displayedRows}
                </tbody>
            </table>

            <button id='next' className='d-none' onClick={paginate}>Next Page</button>
            <button id='back' className='d-none' onClick={goBack}>Previous Page</button>
            <button id='reset' className='d-none' onClick={resetView}>Reset</button>
        </div>    
    );
}

export default Tabulation;
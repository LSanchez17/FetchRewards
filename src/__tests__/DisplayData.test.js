import { render } from '@testing-library/react';
import DisplayData from '../components/DisplayData';
import ApiConnection from '../helpers/ApiConnection';

it('renders the component', async () => {
    let dataObj = await ApiConnection.getData();
    
    render(<DisplayData roughData={dataObj} />);
})
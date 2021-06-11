import ApiConnection from '../helpers/ApiConnection';

it('fetches data from link', async () => {
    let dataObj = await ApiConnection.getData();

    expect(dataObj.length).not.toEqual(0);
})
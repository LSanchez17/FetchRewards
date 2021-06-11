import dataManipulation from '../helpers/dataManipulation';
import ApiConnection from '../helpers/ApiConnection';

let data = {'roughData': [
    {'Name': 'test', 'listId': 0, 'id': 0},
    {'Name': '', 'listId': 0, 'id': 0},
    {'Name': 'notest', 'listId': 23, 'id': 1},
    {'Name':  null, 'listId': 30, 'id': 1},
    {'Name': 'contest', 'listId': 40, 'id': 2},
    {'Name': '', 'listId': 50, 'id': 2},
]}

it('manipulates data into smaller set', () => {
    let nextDataStep = dataManipulation.removeNulls(data);
    expect(nextDataStep.length).not.toBe(data.length);

    let finalDataStep = dataManipulation.doubleSort(nextDataStep);
    expect(finalDataStep.length).toBe(nextDataStep.length);
})

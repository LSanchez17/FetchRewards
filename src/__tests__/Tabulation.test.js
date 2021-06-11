import { render } from '@testing-library/react';
import Tabulation from '../components/Tabulation';

let testArr = [{'Name':'Pass', 'listId': 0, 'id': 0}];

it('renders component', () => {
    render(<Tabulation data={testArr} />);
});

it('renders table', () => {
    const {getByText} = render(<Tabulation data={testArr} />);

    expect(getByText('Reset')).toBeInTheDocument();
});
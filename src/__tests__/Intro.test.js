import { render } from '@testing-library/react';
import Intro from '../components/Intro';

test('Renders the intro component', () => {
    let {getByText} = render(<Intro />);

    expect(getByText('Welcome to the Fetch Rewards Exercise!')).toBeInTheDocument();
});
import React from 'react';
import { render } from '@testing-library/react';

import Page404 from './index';

test('renders NotFound text', () => {
    const { getByText } = render(<Page404 />);
    const linkElement = getByText(/Not found/i);
    expect(linkElement).toBeInTheDocument();
});

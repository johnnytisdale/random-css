import Form from '../src/components/Form';

import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Form', () => {
  it('renders Form component', () => {
    const { getByTestId } = render(<Form />);
    const top = getByTestId("top");
    expect(top).toBeInTheDocument();
  });
});
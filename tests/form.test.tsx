import Form from '../src/components/Form/Form';

import * as React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';

const defaultText = "random css";
describe(`renders default text: "${defaultText}"`, () => {
  const { getAllByTestId } = render(<Form />);
  const chars = getAllByTestId("character");
  chars.forEach((char, i) => {
    test(`renders character ${i + 1}: ${defaultText[i]}`, () => {
      expect(char.textContent).toBe(defaultText[i]);
    });
  });
});
cleanup();

const testText = 'foobar';
describe(`changes <Character /> components when input text changes to "${testText}"`, () => {
  const { getAllByTestId, getByTestId } = render(<Form />);
  fireEvent.change(getByTestId("randomcss-form-text"), {
    target: { value: testText }
  });
  const characters = getAllByTestId("character");
  characters.forEach((character, i) => {
    test(`renders character ${i + 1}: ${testText[i]}`, () => {
      expect(character.textContent).toBe(testText[i]);
    });
  });
});
cleanup();

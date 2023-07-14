import Form from '../src/components/Form';
import * as unicodeJSON from "../src/json/unicode.json";

import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

describe('Form', () => {
  const { getAllByTestId, getByTestId } = render(<Form />);
  const top = getByTestId("top");
  expect(top).toBeInTheDocument();
  const defaultText = "random css";
  describe("renders characters", () => {
    const chars = getAllByTestId("character");
    expect(chars.length).toBe(defaultText.length);
    chars.forEach((char, i) => {
      test(`renders character ${i + 1}: ${defaultText[i]}`, () => {
        expect(char.textContent).toBe(defaultText[i]);
      });
    });
  });

  describe('unicode characters work', () => {
    // const { getByTestId } = render(<Form />);
    const text = getByTestId("randomcss-form-text");
    expect(text).toBeInTheDocument();


    test(unicodeJSON['x'][0].description, () => {
      const str = String.fromCodePoint(parseInt(unicodeJSON['x'][0].unicode, 16));
      expect(str.length).toBe(1);
      fireEvent.change(text, { target: { value: str } });
      const chars = getAllByTestId("character");
      expect(chars.length).toBe(1);
    });
  });
});
import Form from '../src/components/Form';
import Letter from "../src/enums/Letter";
import * as unicodeJSON from "../src/json/unicode.json";

import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

describe('Form', () => {
  const { getByTestId } = render(<Form />);
  const top = getByTestId("top");
  expect(top).toBeInTheDocument();
  const defaultText = "random css";
  describe(`renders characters ${defaultText}`, () => {
    for (let i = 0; i < defaultText.length; i++) {
      test(`renders character ${i}: ${defaultText[i]}`, () => {
        const char = getByTestId(`character-${String(i)}`);
        expect(char).toBeInTheDocument();
        expect(char).toHaveTextContent(defaultText[i]);
      });
    }
  });

  // describe('unicode characters work', () => {
  //   // const { getByTestId } = render(<Form />);
  //   const text = getByTestId("randomcss-form-text");
  //   expect(text).toBeInTheDocument();
  //   Object.values(Letter).forEach((letter: Letter) => {
  //     unicodeJSON[letter].forEach(({ description, unicode }) => {
  //       it(description, () => {
  //         const string = String.fromCodePoint(parseInt(unicode, 16));
  //         fireEvent.change(text, { target: { value: '' } });
  //         fireEvent.change(text, { target: { value: string } });
  //         const char = getByTestId('character-0');
  //         expect(char).toBeInTheDocument();
  //       });
  //     });
  //   });
  // });
});
import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '.'



test('should render a button', () => {
  render(<Card name="hello" available={false} logo="/assets/algo.svg" />);
    expect(screen.getByTestId("card")).toBeTruthy();
})
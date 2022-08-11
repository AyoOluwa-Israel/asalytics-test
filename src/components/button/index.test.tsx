import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'



test('should render a button', async () => {
  render(<Button text="Welcome to Asalytics" styles="text-white" />);
    expect(screen.getByTestId("button")).toHaveTextContent("Welcome to Asalytics");
})
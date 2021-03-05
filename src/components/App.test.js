import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Calculator snapshot', () => {
  it('Renders the Calculator page', () => {
    const calculator = renderer
      .create(<App />)
      .toJSON();
    expect(calculator).toMatchSnapshot();
  });
});

describe('Calculator methods', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Adds two numbers', async () => {
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText('30');
    expect(display).toBeInTheDocument();
  });

  it('Substract two numbers', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('−'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText('10');
    expect(display).toBeInTheDocument();
  });

  it('Divide two numbers', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('÷'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText('15');
    expect(display).toBeInTheDocument();
  });

  it('Divide a number by 0', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('÷'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText('Math Error');
    expect(display).toBeInTheDocument();
  });

  it('Multiply two numbers', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('×'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));
    const display = await screen.findByText('60');
    expect(display).toBeInTheDocument();
  });

  it('Convert to negative', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('±'));
    const display = await screen.findByText('-2');
    expect(display).toBeInTheDocument();
  });

  it('Convert to negative', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('±'));
    await screen.findByText('-20');
    await userEvent.click(screen.getByText('±'));
    const display = await screen.findByText('20');
    expect(display).toBeInTheDocument();
  });

  it('Change to oposite operation (-)', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('−'));
    await userEvent.click(screen.getByText('±'));
    const display = await screen.findByText('+');
    expect(display).toBeInTheDocument();
  });

  it('Change to oposite operation (+)', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('±'));
    const display = await screen.findByText('−');
    expect(display).toBeInTheDocument();
  });

  it('Convert to percentage', async () => {
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('%'));
    const display = await screen.findByText('0.3');
    expect(display).toBeInTheDocument();
  });

  it('Clear all', async () => {
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('AC'));
    expect(screen.queryByText('20')).toBeNull();
  });
});

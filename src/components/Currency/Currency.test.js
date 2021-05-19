import { render, screen } from '@testing-library/react';
import Currency from '.';

describe('Currency', () => {
    test('deve ter a cor verde', () => {
        render(<Currency />)

        const pElement = screen.getByTestId('currency');

        expect(pElement).toHaveStyle('color: green');
    })

    test('deve estar formatado em BRL', () => {
        const value = 500;

        render(<Currency value={value} />);

        const formattedValue = screen.getByText(`R$ ${value},00`);

        expect(formattedValue).toBeInTheDocument();
    })

    test('deve ter font-size editável', () => {
        const size = 48;

        render(<Currency size={size} />)

        const currencyElement = screen.getByTestId('currency');

        expect(currencyElement).toHaveStyle(`font-size: ${size}px`);
    })

    test('deve aceitar somente números', () => {
        const value = 'a';

        render(<Currency value={value} />);

        const formattedValue = screen.queryByText(`R$ ${value},00`);

        expect(formattedValue).not.toBeInTheDocument();
    })
})
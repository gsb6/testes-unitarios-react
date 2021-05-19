import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
    test('deve ter a cor de fundo branca', () => {
        render(<Card />)

        const cardElement = screen.getByTestId('card');

        expect(cardElement).toHaveStyle('background-color: white');
    })

    test('deve ter padding 24px por padrão', () => {

        render(<Card />)

        const cardElement = screen.getByTestId('card');

        expect(cardElement).toHaveStyle('padding: 24px');
    })

    test('deve ter padding editável', () => {
        const padding = 48;

        render(<Card padding={padding} />)

        const cardElement = screen.getByTestId('card');

        expect(cardElement).toHaveStyle(`padding: ${padding}px`);
    })
});
    
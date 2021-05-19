import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
    test('deve ter uma label editável', () => {
        const label = "Clique aqui";

        render(<Button label={label} />);

        const buttonElement = screen.getByTestId('button');

        expect(buttonElement).toHaveTextContent(label);
    })

    test('deve executar uma ação ao ser clicado', () => {
        const onClick = jest.fn();

        render(<Button onClick={onClick} />);

        const buttonElement = screen.getByTestId('button');

        fireEvent.click(buttonElement);

        expect(onClick).toHaveBeenCalled();
    })
})
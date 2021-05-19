import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
    test('deve incrementar o valor em R$ 10,00 ao clicar no botão de incrementar', () => {
        render(<App />)

        const incrementButtonElement = screen.getByText(/incrementar/i);

        expect(incrementButtonElement).toBeInTheDocument();
    
        expect(screen.getByText('R$ 0,00')).toBeInTheDocument();

        fireEvent.click(incrementButtonElement);

        expect(screen.getByText('R$ 10,00')).toBeInTheDocument();
    })

    test('deve decrementar o valor em R$ 10,00 ao clicar no botão de decrementar', () => {
        render(<App />)

        const incrementButtonElement = screen.getByText(/incrementar/i);
        const decrementButtonElement = screen.getByText(/decrementar/i);

        fireEvent.click(incrementButtonElement);

        expect(screen.getByText('R$ 10,00')).toBeInTheDocument();

        fireEvent.click(decrementButtonElement);

        expect(screen.getByText('R$ 0,00')).toBeInTheDocument();
    })

    test('deve desabilitar o botão decrementar com valor zerado', () => {
        render(<App />)

        const incrementButtonElement = screen.getByText(/incrementar/i);
        const decrementButtonElement = screen.getByText(/decrementar/i); 

        expect(screen.getByText('R$ 0,00')).toBeInTheDocument();

        expect(decrementButtonElement).toBeInTheDocument();
        expect(decrementButtonElement).toBeDisabled();

        fireEvent.click(incrementButtonElement);

        expect(screen.getByText('R$ 10,00')).toBeInTheDocument();

        expect(decrementButtonElement).not.toBeDisabled();

        fireEvent.click(decrementButtonElement);

        expect(screen.getByText('R$ 0,00')).toBeInTheDocument();

        expect(decrementButtonElement).toBeDisabled();
    })

    test('deve exibir a mensagem de valor enviado ao clicar no botão de enviar', () => {
        render(<App />);

        const sendButtonElement = screen.getByText(/enviar/i);

        fireEvent.click(sendButtonElement);

        const messageElement = screen.getByText(/valor enviado/i);

        expect(messageElement).toBeInTheDocument();
    })
})
import Card from '.';
import { describe, it, test, expect} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';

describe('Card', () => {
    test('Should render with correct picture', async () => {
        render(
            <ThemeProvider>
                <Card
                    label='Ceci est un Travail'
                    title='Ceci est un nom'
                    picture='../../assets/profile.png'
                />
            </ThemeProvider>
        );
        const CardTitle = screen.getByText(/Ceci est un nom/i);
        const parentNode = CardTitle.closest('div');
        fireEvent.click(parentNode);
        expect(CardTitle.textContent).toBe('⭐️ Ceci est un nom ⭐️');
    })
})





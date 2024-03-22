import Footer from '.';
import { describe, it, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';

describe('Footer', () => {
    test('Should render wihout crashing', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        );
        const nightModeButton = screen.getByRole('button');
        expect(nightModeButton.textContent).toBe('Changer de mode : Jour');
        fireEvent.click(nightModeButton);
        expect(nightModeButton.textContent).toBe('Changer de mode : Nuit');
    });
});
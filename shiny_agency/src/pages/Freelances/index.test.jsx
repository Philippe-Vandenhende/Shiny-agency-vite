import { http } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import { beforeAll, afterEach, afterAll, test } from 'vitest';
import { ThemeProvider } from '../../utils/context'; 
import Freelances from '.'


const mockServer = setupServer();
 
test('test 1', async () => {
    const freelancersMockedData = [
        {
            name: 'Harry Potter',
            job: 'Magicien frontend',
            picture: '',
        },
        {
            name: 'Hermione Granger',
            job: 'Magicienne fullstack',
            picture: '',
        },
    ]

    mockServer.use(
    http.get('http://localhost:8000/freelances', (req, res, ctx) =>
        res(ctx.json({ freelancersList: freelancersMockedData }))));
    render(<ThemeProvider>
            <Freelances />
        </ThemeProvider>);
})


 
// Active la simulation d'API avant les tests depuis server
beforeAll(() => mockServer.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => mockServer.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => mockServer.close())
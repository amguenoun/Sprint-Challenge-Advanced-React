import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from './PlayerCard';

test('PlayerCard renders without crashing', async () => {
    const player = { name: "Alex Morgan", country: "United States", searches: 100 };
    render(<PlayerCard player={player} />);
})

test('Alex Morgan should show up', async () => {
    const player = { name: "Alex Morgan", country: "United States", searches: 100 };
    const { findByText } = await render(<PlayerCard player={player} />);
    findByText(/alex morgan/i)
})
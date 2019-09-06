import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from './PlayerCard';

test('PlayerCard renders without crashing', () => {
    const player = { name: "Alex Morgan", country: "United States", searches: 100 };
    render(<PlayerCard player={player} />);
})

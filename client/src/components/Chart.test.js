import React from 'react';
import { render } from '@testing-library/react';
import Chart from './Chart';

test('Chart renders without crashing', () => {
    const data = [["hey", 0]];
    render(<Chart barInput={data} />);
})
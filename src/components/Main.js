import { Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import BookingPage from './BookingPage';

function Main() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </>
    );
}

export default Main;
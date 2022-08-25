import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage';
import NavbarComponent from '../components/navbar';

function RoutesFunction() {

    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    )

}


export default RoutesFunction
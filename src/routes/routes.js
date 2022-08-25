import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage';
import NavbarComponent from '../components/navbar';
import ErrorPage from '../pages/error';

function RoutesFunction() {

    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<ErrorPage error={404}/>} />
            </Routes>
        </>
    )

}


export default RoutesFunction
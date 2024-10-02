import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.showToast) {
            toast.success("Has ingresado correctamente!!");
        }
    }, [location.state]);

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className='flex-1 p-5'>
                <h2 className="mb-2 text-lg font-semibold text-blue-500 text-center">Lista de grupos</h2>
                <ul className="max-full space-y-2 text-black list-none list-inside">
                    <li>
                        <Link to='/raiting' className="block py-2 px-3 text-white bg-blue-500 rounded font-bold" aria-current="page">Equipo 1</Link>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-white bg-blue-500 rounded font-bold" aria-current="page">Equipo 2</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-white bg-blue-500 rounded font-bold" aria-current="page">equipo 3</a>
                    </li>
                </ul>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                icon=''
            />
        </div>
    )
}

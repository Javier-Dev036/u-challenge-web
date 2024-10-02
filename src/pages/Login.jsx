import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmptyFields from "../components/alerts/EmptyFields";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IncorrectData from "../components/alerts/IncorrectData";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!email || !password) {
            setShowAlert1(true); // Mostrar alerta si los campos están vacíos
        } else {
            setShowAlert1(false); // Ocultar alerta si los campos están completos
        }
    };

    const handleLogin = () => {
        const correo = 'example@gmail.com';
        const contrasena = '12345';
        if (email === correo && password === contrasena) {
            navigate('/home', { state: { showToast: true } }); // Pasamos el estado para mostrar el toast
        } else {
            setShowAlert2(true);
        }
    };


    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="/src/assets/img/career-3-92.png"
                    alt="Sample image"
                />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center">
                    <label className="mr-1 font-bold text-2xl text-blue-500">Bienvenido 👋</label>
                </div>

                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
                {showAlert2 && <IncorrectData />}
                <input
                    className="text-sm w-full px-4 py-2 border border-solid mt-2 border-gray-400 bg-gray-200 rounded"
                    type="text"
                    placeholder="Ingrese su correo electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-400 bg-gray-200 rounded mt-4"
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="text-center md:text-left mt-5">
                    <button
                        onClick={handleLogin}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 font-bold px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit">
                        Ingresar
                    </button>
                </div>
            </div>
        </section>
    );
}

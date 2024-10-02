"use client";
import React, { useState } from 'react'
import NavBarEvaluador from '../components/NavBarEvaluador'
import { Link } from 'react-router-dom'
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Ratings() {
    const [openModal, setOpenModal] = useState(false);
    const [ratings, setRatings] = useState({
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
    });

    // Función para actualizar calificaciones
    const handleRatingChange = (e, question) => {
        setRatings({
            ...ratings,
            [question]: Number(e.target.value)
        });
    };

    // Calcular total
    const total = Object.values(ratings).reduce((acc, curr) => (acc + curr), 0);

    return (
        <div>
            <div>
                <NavBarEvaluador />
            </div>
            <div className='mt-5 flex justify-center items-center'>
                <h1 className='text-xl font-semibold'>Calificacion del equipo 1</h1>
            </div>
            <div className="p-10 relative overflow-x-auto sm:rounded-lg mt-1">
                <table className="w-full text-sm text-left rtl:text-right text-white">
                    <thead className="text-xs text-white uppercase bg-blue-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                EVALUACIÓN
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CALIFICACIÓN
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-gray-200 even:bg-gray-50 border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                ¿Cuáles son los objetivos del proyecto?
                            </th>
                            <td className="px-6 py-4 text-black">
                                <input
                                    type='number'
                                    placeholder='Calificación'
                                    className='p-1 bg-gray-200 rounded-lg'
                                    onChange={(e) => handleRatingChange(e, 'question1')}
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-black bg-white whitespace-nowrap">
                                ¿Quiénes serán los beneficiarios del proyecto?
                            </th>
                            <td className="px-6 py-4 text-black bg-white ">
                                <input
                                    type='number'
                                    maxLength={2}
                                    placeholder='Calificación'
                                    className='p-1 bg-white rounded-lg'
                                    onChange={(e) => handleRatingChange(e, 'question2')}
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-200 even:bg-gray-50 border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                ¿Cuáles son los objetivos del proyecto?
                            </th>
                            <td className="px-6 py-4 text-black ">
                                <input
                                    type='number'
                                    placeholder='Calificación'
                                    className='p-1 bg-gray-200 rounded-lg'
                                    onChange={(e) => handleRatingChange(e, 'question3')}
                                />
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-black bg-white whitespace-nowrap">
                                ¿Quiénes serán los beneficiarios del proyecto?
                            </th>
                            <td className="px-6 py-4 text-black bg-white ">
                                <input
                                    type='number'
                                    placeholder='Calificación'
                                    className='p-1 bg-white rounded-lg'
                                    onChange={(e) => handleRatingChange(e, 'question4')}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">
                                Total
                            </th>
                            <td className="px-6 py-4 text-black">
                                {total}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Link to='#' onClick={() => setOpenModal(true)} className='block w-fit mx-auto'>
                    <div className='mt-10 flex justify-center items-center bg-blue-500 w-40 h-10 rounded-md'>
                        <h1 className='text-white font-bold'>Finalizar</h1>
                    </div>
                </Link>
            </div>
            <>
                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-600" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500">
                                ¿Finalizar la calificación?
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button color="green" onClick={() => setOpenModal(false)}>
                                    {"Si"}
                                </Button>
                                <Button color="red" onClick={() => setOpenModal(false)}>
                                    No
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    )
}

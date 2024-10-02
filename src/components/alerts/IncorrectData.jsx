import { Alert } from 'flowbite-react'
import React from 'react'
import { HiInformationCircle } from "react-icons/hi";

export default function IncorrectData() {
    return (
        <div>
            <Alert color="failure" icon={HiInformationCircle}>
                <span className="font-medium">Datos incorrectos.</span> Los datos ingresados no se encuentran registrados.
            </Alert>
        </div>
    )
}

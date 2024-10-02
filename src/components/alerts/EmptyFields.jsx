import React from 'react'
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function EmptyFields() {
    return (
        <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">Campos vacios.</span> Ingrese todo los datos requeridos.
        </Alert>
    )
}

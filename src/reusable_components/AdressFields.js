import React from 'react'
import { Form, FloatingLabel, Alert } from 'react-bootstrap'

const AdressFields = ({ adressData }) => {

    return (
        <>
            <FloatingLabel
                controlId='floatingInput'
                label='Calle o Avenida'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='Calle o Avenida'
                    onChange={(e) => adressData.setStreet(e.target.value)}
                />
            </FloatingLabel>
            {
                adressData.streetAlert &&
                <Alert variant='danger'>
                    Por favor ingresa la calle.
                </Alert>
            }
            <FloatingLabel
                controlId='floatingInput'
                label='Número exterior'
                className='mb-3'
            >
                <Form.Control
                    type='number'
                    placeholder='Número exterior'
                    onChange={(e) => adressData.setExteriorNumber(e.target.value)}
                />
            </FloatingLabel>
            {
                adressData.exteriorNumberAlert &&
                <Alert variant='danger'>
                    Por favor ingresa el número exterior.
                </Alert>
            }
            <FloatingLabel
                controlId='floatingInput'
                label='Número interior'
                className='mb-3'
            >
                <Form.Control
                    type='number'
                    placeholder='Número interior'
                />
            </FloatingLabel>
            <FloatingLabel
                controlId='floatingInput'
                label='Código Postal'
                className='mb-3'
            >
                <Form.Control
                    type='number'
                    placeholder='Código Postal'
                    onChange={(e) => adressData.setPostalCode(e.target.value)}
                />
            </FloatingLabel>
            {
                adressData.postalCodeAlert &&
                <Alert variant='danger'>
                    Por favor ingresa el código postal.
                </Alert>
            }
            <FloatingLabel
                controlId='floatingInput'
                label='Colonia o Urbanización'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='Colonia o Urbanización'
                    onChange={(e) => adressData.setNeighborhood(e.target.value)}
                />
            </FloatingLabel>
            {
                adressData.neighborhoodAlert &&
                <Alert variant='danger'>
                    Por favor ingresa la colonia.
                </Alert>
            }
            <FloatingLabel
                controlId='floatingInput'
                label='Ciudad o Población'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='Ciudad o Población'
                    onChange={(e) => adressData.setCity(e.target.value)}
                />
            </FloatingLabel>
            {
                adressData.cityAlert &&
                <Alert variant='danger'>
                    Por favor ingresa la ciudad.
                </Alert>
            }
            <FloatingLabel
                controlId='floatingInput'
                label='Entidad Federativa o Estado'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='Entidad Federativa o Estado'
                    onChange={(e) => adressData.setState(e.target.value)}
                />
            </FloatingLabel>
            {
                adressData.stateAlert &&
                <Alert variant='danger'>
                    Por favor ingresa el estado.
                </Alert>
            }
            <FloatingLabel
                controlId='floatingInput'
                label='País'
                className='mb-3'
            >
                <Form.Control
                    type='text'
                    placeholder='País'
                    onChange={(e) => adressData.setCountry(e.target.value)}
                />
            </FloatingLabel>
            {
                adressData.countryAlert &&
                <Alert variant='danger'>
                    Por favor ingresa el país.
                </Alert>
            }
            <Form.Group controlId='formFile' className='mb-3'>
                <Form.Label>Adjunte comprobante de domicilio.</Form.Label>
                <Form.Control type='file' onChange={(e) => adressData.setAddressDoc(e.target.files[0].name)} />
            </Form.Group>
            {
                adressData.addressDocAlert &&
                <Alert variant='danger'>
                    Por favor adjunta el comprobante de domicilio.
                </Alert>
            }
        </>
    )
}

export default AdressFields

import { useState } from 'react'
import { Form, FloatingLabel, Button, Alert, Breadcrumb } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import AdressFields from '../reusable_components/AdressFields';

const LegalRepresentative = () => {

    const history = useHistory()

    const [name, setName] = useState('')
    const [nameAlert, setNameAlert] = useState(false)
    const [gender, setGender] = useState('')
    const [genderAlert, setGenderAlert] = useState(false)
    const [birthDate, setBirthDate] = useState('')
    const [birthDateAlert, setBirthDateAlert] = useState(false)
    const [birthState, setBirthState] = useState('')
    const [birthStateAlert, setBirthStateAlert] = useState(false)
    const [birthCountry, setBirthCountry] = useState('')
    const [birthCountryAlert, setBirthCountryAlert] = useState(false)
    const [nationality, setNationality] = useState('')
    const [nationalityAlert, setNationalityAlert] = useState(false)
    const [curp, setCurp] = useState('')
    const [curpAlert, setCurpAlert] = useState(false)
    const [rfc, setRfc] = useState('')
    const [rfcAlert, setRfcAlert] = useState(false)
    const [civilStatus, setCivilStatus] = useState('')
    const [civilStatusAlert, setCivilStatusAlert] = useState(false)
    const [email, setEmail] = useState('')
    const [emailAlert, setEmailAlert] = useState(false)
    const [telephone, setTelephone] = useState('')
    const [telephoneAlert, setTelephoneAlert] = useState(false)
    const [idDoc, setIdDoc] = useState('')
    const [idDocAlert, setIdDocAlert] = useState(false)

    const [street, setStreet] = useState('')
    const [streetAlert, setStreetAlert] = useState(false)
    const [exteriorNumber, setExteriorNumber] = useState('')
    const [exteriorNumberAlert, setExteriorNumberAlert] = useState(false)
    const [postalCode, setPostalCode] = useState('')
    const [postalCodeAlert, setPostalCodeAlert] = useState(false)
    const [neighborhood, setNeighborhood] = useState('')
    const [neighborhoodAlert, setNeighborhoodAlert] = useState(false)
    const [city, setCity] = useState('')
    const [cityAlert, setCityAlert] = useState(false)
    const [state, setState] = useState('')
    const [stateAlert, setStateAlert] = useState(false)
    const [country, setCountry] = useState('')
    const [countryAlert, setCountryAlert] = useState(false)
    const [addressDoc, setAddressDoc] = useState('')
    const [addressDocAlert, setAddressDocAlert] = useState(false)

    const adressData = {
        setStreet, streetAlert,
        setExteriorNumber, exteriorNumberAlert,
        setPostalCode, postalCodeAlert,
        setNeighborhood, neighborhoodAlert,
        setCity, cityAlert,
        setState, stateAlert,
        setCountry, countryAlert,
        setAddressDoc, addressDocAlert
    }

    const validateForm = () => {
        setNameAlert(!Boolean(name))
        setGenderAlert(!Boolean(gender))
        setBirthDateAlert(!Boolean(birthDate))
        setBirthStateAlert(!Boolean(birthState))
        setBirthCountryAlert(!Boolean(birthCountry))
        setNationalityAlert(!Boolean(nationality))
        setCurpAlert(!Boolean(curp))
        setRfcAlert(!Boolean(rfc))
        setCivilStatusAlert(!Boolean(civilStatus))
        setEmailAlert(!Boolean(email))
        setTelephoneAlert(!Boolean(telephone))
        setStreetAlert(!Boolean(street))
        setExteriorNumberAlert(!Boolean(exteriorNumber))
        setPostalCodeAlert(!Boolean(postalCode))
        setNeighborhoodAlert(!Boolean(neighborhood))
        setCityAlert(!Boolean(city))
        setStateAlert(!Boolean(state))
        setCountryAlert(!Boolean(country))
        setAddressDocAlert(!Boolean(addressDoc))
        setIdDocAlert(!Boolean(idDoc))

        const allInputsFilled = name &&
            gender &&
            birthDate &&
            birthState &&
            birthCountry &&
            nationality &&
            curp &&
            rfc &&
            civilStatus &&
            email &&
            telephone &&
            street &&
            exteriorNumber &&
            postalCode &&
            neighborhood &&
            city &&
            state &&
            country &&
            addressDoc

        if (allInputsFilled) {
            history.push('/banco')
        }
    }

    return (
        <div className='container mt-3 mb-3'>
            <Form autoComplete='off'>
                <h4>Datos del representante legal</h4>
                <Breadcrumb>
                    <Breadcrumb.Item>General</Breadcrumb.Item>
                    <Breadcrumb.Item>Domicilio</Breadcrumb.Item>
                    <Breadcrumb.Item>Contacto</Breadcrumb.Item>
                    <Breadcrumb.Item active>Representante Legal</Breadcrumb.Item>
                    <Breadcrumb.Item>Banco</Breadcrumb.Item>
                </Breadcrumb>
                <FloatingLabel
                    controlId='floatingInput'
                    label='Nombre'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Nombre'
                        onChange={(e) => setName(e.target.value)}
                    />
                </FloatingLabel>
                {
                    nameAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el nombre.
                    </Alert>
                }
                <FloatingLabel controlId="floatingSelect" label='Género' className='mb-3'>
                    <Form.Select aria-label='Floating label select example' onChange={(e) => setGender(e.target.value)}>
                        <option>Seleccione una opción</option>
                        <option value='female'>Femenino</option>
                        <option value='male'>Masculino</option>
                        <option value='other'>Otro</option>
                    </Form.Select>
                </FloatingLabel>
                {
                    genderAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el género.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Fecha de nacimiento'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Fecha de nacimiento'
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </FloatingLabel>
                {
                    birthDateAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa la fecha de nacimiento.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Entidad Federativa de nacimiento'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Entidad Federativa de nacimiento'
                        onChange={(e) => setBirthState(e.target.value)}
                    />
                </FloatingLabel>
                {
                    birthStateAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa la Entidad Federativa de nacimiento.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='País de nacimiento'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='País de nacimiento'
                        onChange={(e) => setBirthCountry(e.target.value)}
                    />
                </FloatingLabel>
                {
                    birthCountryAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el País de nacimiento.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Nacionalidad'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Nacionalidad'
                        onChange={(e) => setNationality(e.target.value)}
                    />
                </FloatingLabel>
                {
                    nationalityAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa la nacionalidad.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='CURP'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='CURP'
                        onChange={(e) => setCurp(e.target.value)}
                    />
                </FloatingLabel>
                {
                    curpAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el curp.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='RFC'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='RFC'
                        onChange={(e) => setRfc(e.target.value)}
                    />
                </FloatingLabel>
                {
                    rfcAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el rfc.
                    </Alert>
                }
                <AdressFields adressData={adressData} />
                <FloatingLabel controlId="floatingSelect" label='Estado civil' className='mb-3'>
                    <Form.Select aria-label='Floating label select example' onChange={(e) => setCivilStatus(e.target.value)}>
                        <option>Seleccione una opción</option>
                        <option value='single'>Soltero</option>
                        <option value='married'>Casado</option>
                        <option value='divorced'>Divorciado</option>
                        <option value='widower'>Viudo</option>
                        <option value='concubinage'>Concubinato</option>
                        <option value='other'>Otro</option>
                    </Form.Select>
                </FloatingLabel>
                {
                    civilStatusAlert &&
                    <Alert variant='danger'>
                        Por favor selecciona el estado civil.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Correo electrónico'
                    className='mb-3'
                >
                    <Form.Control
                        type='email'
                        placeholder='Correo electrónico'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FloatingLabel>
                {
                    emailAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el correo electrónico.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Teléfono'
                    className='mb-3'
                >
                    <Form.Control
                        type='tel'
                        placeholder='Teléfono'
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                </FloatingLabel>
                {
                    telephoneAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el teléfono.
                    </Alert>
                }
                <Form.Group controlId='formFile' className='mb-3'>
                    <Form.Label>Adjunte documento de identificación</Form.Label>
                    <Form.Control type='file' onChange={(e) => setIdDoc(e.target.files[0].name)} />
                </Form.Group>
                {
                    idDocAlert &&
                    <Alert variant='danger'>
                        Por favor adjunta el documento de identificación.
                    </Alert>
                }
                <Button onClick={validateForm}>Siguiente</Button>
            </Form>
        </div>
    )
}

export default LegalRepresentative

import { useState } from 'react'
import { Form, FloatingLabel, Button, Alert, Breadcrumb } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const General = () => {
    const history = useHistory()

    const [businessName, setBusinessName] = useState('')
    const [businessNameAlert, setBusinessNameAlert] = useState(false)
    const [commercialName, setCommercialName] = useState('')
    const [commercialNameAlert, setCommercialNameAlert] = useState(false)
    const [nationality, setNationality] = useState('')
    const [nationalityAlert, setNationalityAlert] = useState(false)
    const [constitutionDate, setConstitutionDate] = useState('')
    const [constitutionDateAlert, setConstitutionDateAlert] = useState(false)
    const [rfc, setRfc] = useState('')
    const [rfcAlert, setRfcAlert] = useState(false)
    const [taxRegime, setTaxRegime] = useState('')
    const [taxRegimeAlert, setTaxRegimeAlert] = useState(false)
    const [industry, setIndustry] = useState('')
    const [industryAlert, setIndustryAlert] = useState(false)

    const validateForm = () => {
        setBusinessNameAlert(!Boolean(businessName))
        setCommercialNameAlert(!Boolean(commercialName))
        setNationalityAlert(!Boolean(nationality))
        setConstitutionDateAlert(!Boolean(constitutionDate))
        setRfcAlert(!Boolean(rfc))
        setTaxRegimeAlert(!Boolean(taxRegime))
        setIndustryAlert(!Boolean(industry))
        const allInputsFilled = businessName &&
            commercialName &&
            nationality &&
            constitutionDate &&
            rfc &&
            taxRegime &&
            industry

        if (allInputsFilled) {
            history.push('/domicilio')
        }
    }

    return (
        <div className='container mt-3 mb-3'>
            <Form autoComplete='off'>
                <h4>Datos generales</h4>
                <Breadcrumb>
                    <Breadcrumb.Item active>General</Breadcrumb.Item>
                    <Breadcrumb.Item>Domicilio</Breadcrumb.Item>
                    <Breadcrumb.Item>Contacto</Breadcrumb.Item>
                    <Breadcrumb.Item>Representante Legal</Breadcrumb.Item>
                    <Breadcrumb.Item>Banco</Breadcrumb.Item>
                </Breadcrumb>
                <FloatingLabel
                    controlId='floatingInput'
                    label='Razón social'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Razón Social'
                        onChange={(e) => setBusinessName(e.target.value)} />
                </FloatingLabel>
                {
                    businessNameAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa la razón social.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Nombre comercial'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Nombre comercial'
                        onChange={(e) => setCommercialName(e.target.value)} />
                </FloatingLabel>
                {
                    commercialNameAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el nombre comercial.
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
                        onChange={(e) => setNationality(e.target.value)} />
                </FloatingLabel>
                {
                    nationalityAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa la nacionalidad.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Fecha de constitución (DD/MM/AAA)'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Fecha de constitución (DD/MM/AAA)'
                        onChange={(e) => setConstitutionDate(e.target.value)} />
                </FloatingLabel>
                {
                    constitutionDateAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa la fecha de constitución.
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
                        onChange={(e) => setRfc(e.target.value)} />
                </FloatingLabel>
                {
                    rfcAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el RFC.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Régimen fiscal'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Régimen fiscal'
                        onChange={(e) => setTaxRegime(e.target.value)} />
                </FloatingLabel>
                {
                    taxRegimeAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el régimen fiscal.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Industria'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Industria'
                        onChange={(e) => setIndustry(e.target.value)} />
                </FloatingLabel>
                {
                    industryAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el nombre de la industria.
                    </Alert>
                }
                <Button onClick={validateForm}>Siguiente</Button>
            </Form>
        </div>
    )
}

export default General

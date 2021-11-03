import { useState } from 'react'
import { Form, FloatingLabel, Button, Alert, Breadcrumb } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Contact = () => {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [emailAlert, setEmailAlert] = useState(false)
    const [telephone, setTelephone] = useState('')
    const [telephoneAlert, setTelephoneAlert] = useState(false)

    const validateForm = () => {
        setEmailAlert(!Boolean(email))
        setTelephoneAlert(!Boolean(telephone))

        if (email && telephone) {
            history.push('/representante-legal')
        }
    }

    return (
        <div className='container mt-3 mb-3'>
            <Form autoComplete='off'>
                <h4>Datos de contacto</h4>
                <Breadcrumb>
                    <Breadcrumb.Item >General</Breadcrumb.Item>
                    <Breadcrumb.Item>Domicilio</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contacto</Breadcrumb.Item>
                    <Breadcrumb.Item>Representante Legal</Breadcrumb.Item>
                    <Breadcrumb.Item>Banco</Breadcrumb.Item>
                </Breadcrumb>
                <FloatingLabel
                    controlId='floatingInput'
                    label='Número telefónico'
                    className='mb-3'
                >
                    <Form.Control
                        type='tel'
                        placeholder='Número telefónico'
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)} />
                </FloatingLabel>
                {
                    telephoneAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el número telefónico.
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </FloatingLabel>
                {
                    emailAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el correo electrónico
                    </Alert>
                }
                <Button onClick={validateForm}>Siguiente</Button>
            </Form>
        </div>
    )
}

export default Contact

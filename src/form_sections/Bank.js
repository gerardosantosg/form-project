import { useState } from 'react'
import { Form, FloatingLabel, Button, Alert, Breadcrumb } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Bank = () => {
    const history = useHistory();

    const [clabe, setClabe] = useState('')
    const [clabeAlert, setClabeAlert] = useState(false)
    const [bankName, setBankName] = useState('')
    const [bankNameAlert, setBankNameAlert] = useState(false)


    const validateForm = () => {
        setClabeAlert(!Boolean(clabe))
        setBankNameAlert(!Boolean(bankName))

        if (clabe && bankName) {
            history.push('/enviado')
        }
    }
    return (
        <div className='container mt-3 mb-3'>
            <Form autoComplete='off'>
                <h4>Datos bancarios</h4>
                <Breadcrumb>
                    <Breadcrumb.Item>General</Breadcrumb.Item>
                    <Breadcrumb.Item>Domicilio</Breadcrumb.Item>
                    <Breadcrumb.Item>Contacto</Breadcrumb.Item>
                    <Breadcrumb.Item>Representante Legal</Breadcrumb.Item>
                    <Breadcrumb.Item active>Banco</Breadcrumb.Item>
                </Breadcrumb>
                <FloatingLabel
                    controlId='floatingInput'
                    label='CLABE'
                    className='mb-3'
                >
                    <Form.Control
                        type='number'
                        placeholder='CLABE'
                        onChange={(e) => setClabe(e.target.value)} />
                </FloatingLabel>
                {
                    clabeAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa la CLABE.
                    </Alert>
                }
                <FloatingLabel
                    controlId='floatingInput'
                    label='Banco'
                    className='mb-3'
                >
                    <Form.Control
                        type='text'
                        placeholder='Banco'
                        onChange={(e) => setBankName(e.target.value)} />
                </FloatingLabel>
                {
                    bankNameAlert &&
                    <Alert variant='danger'>
                        Por favor ingresa el nombre del Banco.
                    </Alert>
                }
                <Button onClick={validateForm}>Siguiente</Button>
            </Form>
        </div>
    )
}

export default Bank

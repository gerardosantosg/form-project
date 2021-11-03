import { useState } from 'react'
import { Form, Button, Breadcrumb } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import AdressFields from '../reusable_components/AdressFields';

const Address = () => {
    const history = useHistory()

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
        setStreetAlert(!Boolean(street))
        setExteriorNumberAlert(!Boolean(exteriorNumber))
        setPostalCodeAlert(!Boolean(postalCode))
        setNeighborhoodAlert(!Boolean(neighborhood))
        setCityAlert(!Boolean(city))
        setStateAlert(!Boolean(state))
        setCountryAlert(!Boolean(country))
        setAddressDocAlert(!Boolean(addressDoc))

        const allInputsFilled = street &&
            exteriorNumber &&
            postalCode &&
            neighborhood &&
            city &&
            state &&
            country &&
            addressDoc

        if (allInputsFilled) {
            history.push('/contacto')
        }
    }

    return (
        <div className='container mt-3 mb-3'>
            <Form autoComplete='off'>
                <h4>Datos del domicilio</h4>
                <Breadcrumb>
                    <Breadcrumb.Item>General</Breadcrumb.Item>
                    <Breadcrumb.Item active>Domicilio</Breadcrumb.Item>
                    <Breadcrumb.Item>Contacto</Breadcrumb.Item>
                    <Breadcrumb.Item>Representante Legal</Breadcrumb.Item>
                    <Breadcrumb.Item>Banco</Breadcrumb.Item>
                </Breadcrumb>
                <AdressFields adressData={adressData} />
                <Button onClick={validateForm}>Siguiente</Button>
            </Form>
        </div>
    )
}

export default Address

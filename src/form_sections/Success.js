import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Success = () => {
    return (
        <div className='text-center mt-5'>
            <h1>¡Tu cuenta ha sido creada con éxito!</h1>
            <Link to='/'>
                <Button className='mt-5' size='lg'>Regresar al inicio</Button>
            </Link>
        </div>
    )
}

export default Success

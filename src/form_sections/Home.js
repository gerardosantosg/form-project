import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='text-center mt-5'>
            <h1>Crea tu perfil</h1>
            <Link to='/general'>
                <Button className='mt-5' size='lg'>Regístrate Aquí</Button>
            </Link>
        </div>
    )
}

export default Home

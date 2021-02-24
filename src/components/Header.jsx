import { Image } from 'react-bootstrap';
import me from '../images/me.jpg'

const Header = () => {
    return (
        <div className="header text-center p-5 text-white">
            <Image src={me} roundedCircle className="my-image mt-5" />
            <h3 className="mt-3 heading">Vishnu C Prasad</h3>
            <div className="seperator mt-3"></div>
            <p className="text-uppercase text-verdana mt-3">Web Developer</p>
        </div>
    );
}

export default Header;
import logoImage from '../../assets/SICFO.png';

function Logo() {
    return (
        <div className="flex items-center" >
            <img
                src={logoImage}
                alt="SICFO Logo"
                className="h-12 w-auto"
            />
        </div >
    );
}

export default Logo;
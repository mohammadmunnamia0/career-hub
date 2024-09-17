import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1>Oooooops! Sorry FOr Your losses Buddy.</h1>
            <Link to="/"><button>Back To Home</button></Link>
        </div>
    );
};

export default Error;
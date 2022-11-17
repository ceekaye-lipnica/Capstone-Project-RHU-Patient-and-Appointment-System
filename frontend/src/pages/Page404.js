import {Link} from 'react-router-dom'

const Page404 = () => {
    return (
        
        <div className="page404">
            <h1> PAGE NOT FOUND </h1>
            <h3>Sorry, we're having some issues</h3>
            <Link to="/"><button>Back to Homepage</button></Link>

        </div>

     );
}
 
export default Page404;
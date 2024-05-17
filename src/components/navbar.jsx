import client from "../assets/client-4_yqf75b.jpg"


const Navbar = () => {

    return (
        
        <>
            <nav className="navbar navbar-expand-lg bg-body-light">
                <div className="container nav">
                    <a className="navbar-brand" href="#">sneakers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Collection</a>
                        <a className="nav-link" href="#">Men</a>
                        <a className="nav-link" href="#">Women</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Contact</a>
                    </div>
                    </div>

                    <div className="cart">
                        <i className="bi bi-cart3"></i>
                        <img src={client} alt="Client" style={{width:"30%"}} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
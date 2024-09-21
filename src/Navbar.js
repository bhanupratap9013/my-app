import PropTypes from 'prop-types';
function Navbar(props){
    let prop1 = props.title;

    const modeLabel = document.getElementById('modeToggle');


    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{border: props.mode==='dark'? '1px solid white': "1px solid black"}}>
            <a className="navbar-brand" href="#">{prop1}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                </ul>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="modeToggle" onClick={()=>{props.toggleMode()}}/>
                <label className="form-check-label" for="modeToggle" id="modeLabel">Switch Mode</label>
            </div>
        </nav>
    );
}
  

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: "Default Title"
}

export default Navbar;
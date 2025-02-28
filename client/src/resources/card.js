
const Card = () => {

    return (
        <>
            <div className="col">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" focusable="false">
                        <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Imagen</text>
                    </svg>
                    {/* <img style={{width: '100%'}} src="https://cdn0.bodas.com.mx/review/5294/original/1280/jpg/607158.webp"/> */}
                    <div className="card-body">
                        <p className="card-text">Informacion relacionada...</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-light">Ver</button>
                                <button type="button" className="btn btn-sm btn-outline-light">Editar</button>
                            </div>
                            <small className="text-body-secondary">10 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
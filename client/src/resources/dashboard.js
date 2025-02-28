
import Carousel from "./carousel.js"
import Map from "./map.js"
import Card from "./card.js"
import { BsFacebook, BsGeoAlt, BsWhatsapp } from "react-icons/bs";

export const Darshboard = () => {

  return (
    <>
      <div className="App">
        <header data-bs-theme="dark">
          <div className="navbar navbar-dark bg-secondary-subtle shadow-sm">
            <div className="container">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2"
                  verbox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <strong>HM</strong>
              </a>
            </div>
          </div>
        </header>

        <main>
          <Carousel />

          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <h4>Paquetes</h4>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>

            <div className="container py-5">
              <h4>Nuestra ubicación</h4>
              <div id='map' className="pt-3">
                <div className="row">
                  <div className="col-md-9">
                    <Map />
                  </div>
                  <div className="col-md-3">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text"><BsGeoAlt/> Av. Hidalgo 89 A Norte, Centro, 63780 Xalisco, Nay.</p>
                        <p className="card-text"></p>
                        <a className='btn btn-sm btn-secondary' href='https://maps.app.goo.gl/a7NLzrhNANdPCr4r6' target='_blank'>Ver en Google Maps</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
        <footer className="text-body-secondary py-5 bg-secondary-subtle">
          <div className="container">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4>Acerca de</h4>
                  <p className="text-body-secondary">Haro Multimedia se dedica al registro audiovisual de los novios en su boda. Es decir, estos profesionales acuden tanto con cámaras de fotos como para realizar el video del mágico día. La empresa lleva desde 1994 inmortalizando todo tipo de eventos sociales, así que la calidad está garantizada debido a su larga experiencia.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4>Contacto</h4>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-white"><BsFacebook style={{ fontSize: '25px' }} /></a></li>
                    <li><a href="#" className="text-white"><BsWhatsapp style={{ fontSize: '25px', marginTop: '13px' }} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="float-end mb-1">
              <a href="#">Volver a arriba</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
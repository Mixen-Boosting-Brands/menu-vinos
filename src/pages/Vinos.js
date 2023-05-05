import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

// Import required modules
import { Pagination } from "swiper";

// Import Vino Tinto data
import DataTinto from '../data/tinto.json';

// Import Vino Rosado data
import DataRosado from '../data/rosado.json';

// Import Vino Blanco data
import DataBlanco from '../data/blanco.json';

// Import Vino Tinto thumbnails
import * as ThumbsTinto from '../images/vinos/tinto/thumb-vino-*.png';

// Import Vino Rosado thumbnails
import * as ThumbsRosado from '../images/vinos/rosado/thumb-vino-*.png';

// Import Vino Blanco thumbnails
import * as ThumbsBlanco from '../images/vinos/blanco/thumb-vino-*.png';

const CarruselVinos = () => {
    let location = useLocation();
    useEffect(() => {
        document.body.classList.add('carrusel-layout', 'vinos-layout')
        return () => {
            document.body.classList.remove('carrusel-layout', 'vinos-layout')
        }
    }, [location])

    switch (location.pathname) {
        case "/tinto":
            return (
                <div className="row">
                    <div className="col-8 offset-2 overflow-hidden">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="carrusel"
                        >
                            {
                                DataTinto.map((vino, i) => {
                                    let nombre = DataTinto[i].nombre;
                                    let uva = DataTinto[i].uva;
                                    let region = DataTinto[i].region;
                                    let maridaje = DataTinto[i].maridaje;
                                    let precioPorBotella = DataTinto[i].precioPorBotella;
                                    let precioPorCopa = DataTinto[i].precioPorCopa;
                                    let thumbnail = ThumbsTinto[i + 1];

                                    return (
                                        <SwiperSlide key={i}>
                                            <Link 
                                                to="/especificaciones"
                                                state={
                                                    [
                                                        nombre,
                                                        uva,
                                                        region,
                                                        maridaje,
                                                        precioPorBotella,
                                                        precioPorCopa,
                                                        thumbnail
                                                    ]
                                                }
                                            >
                                                <img src={thumbnail} alt="" className="img-fluid" loading="lazy" />
                                                <div className="swiper-lazy-preloader-white"></div>
                                            </Link>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            );
            break;
        case "/rosado":
            return (
                <div className="row">
                    <div className="col-8 offset-2 overflow-hidden">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="carrusel"
                        >
                            {
                                DataRosado.map((vino, i) => {
                                    let nombre = DataRosado[i].nombre;
                                    let uva = DataRosado[i].uva;
                                    let region = DataRosado[i].region;
                                    let maridaje = DataRosado[i].maridaje;
                                    let precioPorBotella = DataRosado[i].precioPorBotella;
                                    let precioPorCopa = DataRosado[i].precioPorCopa;
                                    let thumbnail = ThumbsRosado[i + 1];

                                    return (
                                        <SwiperSlide key={i}>
                                            <Link
                                                to="/especificaciones"
                                                state={
                                                    [
                                                        nombre,
                                                        uva,
                                                        region,
                                                        maridaje,
                                                        precioPorBotella,
                                                        precioPorCopa,
                                                        thumbnail
                                                    ]
                                                }
                                            >
                                                <img src={thumbnail} alt="" className="img-fluid" loading="lazy" />
                                                <div className="swiper-lazy-preloader-white"></div>
                                            </Link>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            );
            break;
        case "/blanco":
            return (
                <div className="row">
                    <div className="col-8 offset-2 overflow-hidden">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="carrusel"
                        >
                            {
                                DataBlanco.map((vino, i) => {
                                    let nombre = DataBlanco[i].nombre;
                                    let uva = DataBlanco[i].uva;
                                    let region = DataBlanco[i].region;
                                    let maridaje = DataBlanco[i].maridaje;
                                    let precioPorBotella = DataBlanco[i].precioPorBotella;
                                    let precioPorCopa = DataBlanco[i].precioPorCopa;
                                    let thumbnail = ThumbsBlanco[i + 1];

                                    return (
                                        <SwiperSlide key={i}>
                                            <Link
                                                to="/especificaciones"
                                                state={
                                                    [
                                                        nombre,
                                                        uva,
                                                        region,
                                                        maridaje,
                                                        precioPorBotella,
                                                        precioPorCopa,
                                                        thumbnail
                                                    ]
                                                }
                                            >
                                                <img src={thumbnail} alt="" className="img-fluid" loading="lazy" />
                                                <div className="swiper-lazy-preloader-white"></div>
                                            </Link>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            );
            break;
        default:
            return (
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Error</h1>
                        <p>
                            Error al cargar la información.
                        </p>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </Link>
                    </div>
                </div>
            );
    }
};

export default CarruselVinos;
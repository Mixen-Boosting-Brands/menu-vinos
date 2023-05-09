import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

// Import required modules
import { Pagination } from "swiper";

// Import Postres data
import Postres from '../data/postres.json';

// Import Postres thumbnails
import * as Thumbs from '../images/postres/thumb-postre-*.png';

const CarruselPostres = () => {
    useEffect(() => {
        document.body.classList.add('carrusel-layout', 'postres-layout')
        return () => {
            document.body.classList.remove('carrusel-layout', 'postres-layout')
        }
    }, [])
    
    return (
        <div className="row">
            <div className="col-12 overflow-hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="carrusel"
                >
                    {
                        Postres.map((postre, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="row">
                                        <div className="col-5 offset-1 my-auto">
                                            <div className={`thumbnail-postre thumbnail-postre-${i+1}`}>
                                                <div className="overlay">
                                                    <p className="precio">{postre.precio}</p>
                                                </div>
                                                <img src={Thumbs[i + 1]} alt="" className="img-fluid" loading="lazy" />
                                                <div className="swiper-lazy-preloader-white"></div>
                                            </div>
                                        </div>
                                        <div className="col-5 my-auto">
                                            <h1>
                                                {postre.nombre}<br></br>
                                                <span className="cursiva">{postre.cursiva}</span>
                                            </h1>
                                            <p>{postre.texto}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default CarruselPostres;
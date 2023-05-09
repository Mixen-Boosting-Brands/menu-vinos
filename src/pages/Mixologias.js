import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

// Import required modules
import { Pagination } from "swiper";

// Import Mixologia data
import Mixologia from '../data/mixologias.json';

// Import Mixologia thumbnails
import * as Thumbs from '../images/mixologias/thumb-mixologia-*.png';

const CarruselMixologia = () => {
    useEffect(() => {
        document.body.classList.add('carrusel-layout', 'mixologias-layout')
        return () => {
            document.body.classList.remove('carrusel-layout', 'mixologias-layout')
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
                        Mixologia.map((mixologia, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="row">
                                        <div className="col-5 offset-1 my-auto">
                                            <div className={`thumbnail-mixologia thumbnail-mixologia-${i+1}`}>
                                                <div className="overlay">
                                                    <p className="precio">{mixologia.precio}</p>
                                                </div>
                                                <img src={Thumbs[i + 1]} alt="" className="img-fluid" loading="lazy" />
                                                <div className="swiper-lazy-preloader-white"></div>
                                            </div>
                                        </div>
                                        <div className="col-5 my-auto">
                                            <h1>
                                                {mixologia.nombre}<br></br>
                                                <span className="cursiva">{mixologia.cursiva}</span>
                                            </h1>
                                            <p>{mixologia.texto}</p>
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

export default CarruselMixologia;
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

// Import required modules
import { Pagination } from "swiper";

// Import Vinos data
import Vinos from '../data/vinos.json';

// Import Vinos thumbnails
import * as Thumbs from '../images/vinos/thumb-vino-*.png';

const CarruselVinos = () => {
    useEffect(() => {
        document.body.classList.add('carrusel-layout')
        return () => {
            document.body.classList.remove('carrusel-layout')
        }
    }, [])
    return (
        <div className="row">
            <div className="col-12 overflow-hidden">
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
                        Vinos.map((vino, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <Link to="/Vinos">
                                        <img src={Thumbs[i + 1]} alt="" className="img-fluid" />
                                    </Link>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default CarruselVinos;
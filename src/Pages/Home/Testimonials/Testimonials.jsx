import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";



const Testimonials = () => {
    
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="my-10">
            <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map(review => <SwiperSlide key={review._id} review={review}>
                        <div className="mx-12 md:mx-40">
                            <div className="space-y-8">
                                <h1 className="text-center">{review.rating}</h1>
                                <p className="text-center">{review.details}</p>
                                <p className="text-center text-3xl font-bold text-yellow-500">{review.name}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;
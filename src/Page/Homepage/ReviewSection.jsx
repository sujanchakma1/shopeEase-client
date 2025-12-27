import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Sujan Chakma",
    photo: "https://i.ibb.co.com/B5Fq5vmD/Gemini-Generated-Image-2ob99i2ob99i2ob9.png",
    rating: 5,
    review: "Amazing product quality and fast delivery. Highly recommend!",
  },
  {
    id: 2,
    name: "Jhon Doe",
    photo: "https://i.ibb.co.com/mKBgJkG/John-Doe-born-John-Nommensen-Duchac.jpg",
    rating: 4.5,
    review: "Great experience. Customer support was very helpful.",
  },
  {
    id: 3,
    name: "Dennis Ritchie",
    photo: "https://i.ibb.co.com/8L3XNbvH/image-2.png",
    rating: 4,
    review: "Good product but delivery took a bit longer than expected.",
  },
  {
    id: 4,
    name: "Guido Van Rossum",
    photo: "https://i.ibb.co.com/wFwcxX0D/5fbd463650e71a0011557200.webp",
    rating: 5,
    review: "Excellent service, will buy again!",
  },
];

const ReviewSection = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: "40px" },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="px-16">
            <div className="bg-gradient-to-br from-base-100 to-base-200 rounded-xl shadow-lg py-6 flex flex-col items-center text-center hover:shadow-xl transition">
              <img
                src={review.photo}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
              <div className="flex mb-4">{renderStars(review.rating)}</div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ReviewSection;

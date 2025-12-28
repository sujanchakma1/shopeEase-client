import React from "react";
import { Link } from "react-router";

const VideoSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">See Our Products in Action</h2>
        <p className="text-gray-600 mb-6">
          Watch our quick showcase video to explore features, benefits, and how
          our products can help you in daily life.
        </p>
        <Link to="https://www.youtube.com/watch?=igTVqtlrLxA">
          <button className="btn btn-primary rounded-lg">Explore More</button>
        </Link>
      </div>
      <div className="md:w-1/2">
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/igTVqtlrLxA"
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

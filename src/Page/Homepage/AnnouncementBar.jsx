import { FaBullhorn } from "react-icons/fa";

const AnnouncementBar = () => {
  const message =
    "Saturday, 27 December — All our branches are open except Gazipur branch. Online services are fully operational.";

  return (
    <div className="max-w-7xl mx-auto mt-4 px-2">
      <div className="relative overflow-hidden rounded-full border border-base-300 bg-base-100 shadow-sm">
        {/* Left Icon */}
        <div className="absolute left-0 top-0 h-full flex items-center px-4 bg-base-100 z-10">
          <FaBullhorn className="text-primary text-lg" />
        </div>

        {/* Scrolling Text */}
        <div className="whitespace-nowrap pl-14 py-3 animate-marquee hover:[animation-play-state:paused]">
          <span className="mx-6 text-sm text-gray-400">
            {message}
          </span>
          <span className="mx-6 text-sm text-gray-400">
            {message}
          </span>
          <span className="mx-6 text-sm text-gray-400">
            {message}
          </span>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AnnouncementBar;

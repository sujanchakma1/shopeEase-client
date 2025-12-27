import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaSmile, FaStore } from "react-icons/fa";

const countersData = [
  {
    id: 1,
    label: "Products Sold",
    value: 15000,
    icon: <FaBoxOpen size={40} className="" />,
  },
  {
    id: 2,
    label: "Happy Customers",
    value: 8000,
    icon: <FaSmile size={40} className="" />,
  },
  {
    id: 3,
    label: "Branches",
    value: 25,
    icon: <FaStore size={40} className="" />,
  },
];

const DynamicCounters = () => {
  const [counters, setCounters] = useState(
    countersData.map((c) => ({ ...c, current: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) =>
        prev.map((counter) => {
          if (counter.current < counter.value) {
            const increment = Math.ceil(counter.value / 100);
            return {
              ...counter,
              current: Math.min(counter.current + increment, counter.value),
            };
          }
          return counter;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {counters.map((counter) => (
        <div
          key={counter.id}
          className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:scale-105 transform transition duration-300"
        >
          <div className="text-secondary">{counter.icon}</div>
          <h2 className="text-4xl font-bold ">
            {counter.current.toLocaleString()}
          </h2>
          <p className=" font-medium text-gray-500">{counter.label}</p>
        </div>
      ))}
    </section>
  );
};

export default DynamicCounters;

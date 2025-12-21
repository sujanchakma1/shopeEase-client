const partners = [
  {
    name: "Samsung",
    img: "https://i.ibb.co.com/RphKJZJ2/logo-samsung-electronics-organization-samsung-galaxy-png-favpng-ws-Wzg4-CPd3-Ks-EUd-Zza0vdij-Fb.jpg",
  },
  {
    name: "Apple",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Aarong",
    img: "https://i.ibb.co.com/Kc3m8m4g/aarong-logo-png-seeklogo-173336.png",
  },
  {
    name: "Bata",
    img: "https://i.ibb.co.com/MDMJ8tKS/png-clipart-bata-text-bata-logo-icons-logos-emojis-shop-logos.png",
  },
  {
    name: "Daraz",
    img: "https://i.ibb.co.com/cKTg2G5b/daraz-logo-png-seeklogo-429501.png",
  },
  {
    name: "Regal Furniture",
    img: "https://i.ibb.co.com/HLTYbrDf/regal-furniture-logo-png-seeklogo-425963.png",
  },
  {
    name: "Hatil Furniture",
    img: "https://i.ibb.co.com/DHJgZypP/hatil-furniture-logo-png-seeklogo-478634.png",
  },
];

const MarqueeRow = ({ direction = "left" }) => (
  <div className="overflow-hidden">
    <div
      className={`flex gap-6 ${
        direction === "left"
          ? "animate-marquee-left"
          : "animate-marquee-right"
      }`}
    >
      {[...partners, ...partners].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-white shadow-sm rounded-lg px-4 py-3 min-w-[160px]"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-10 h-10 object-contain"
          />
          <span className="text-sm font-medium whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);


const PartnerMarquee = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Partners
        </h2>

        <div className="space-y-5">
          {/* Lower row → RIGHT */}
          <MarqueeRow direction="right" />
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;



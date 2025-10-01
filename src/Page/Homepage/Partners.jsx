import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Samsung",
    body: "Samsung is a global electronics brand known for its smartphones, TVs, and home appliances.",
    img: "https://i.ibb.co.com/RphKJZJ2/logo-samsung-electronics-organization-samsung-galaxy-png-favpng-ws-Wzg4-CPd3-Ks-EUd-Zza0vdij-Fb.jpg",
  },
  {
    name: "Apple",
    body: "Apple is an American multinational company famous for iPhone, iPad, MacBook, and other premium products.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Aarong",
    body: "Aarong is a leading Bangladeshi lifestyle and fashion brand offering clothes, handicrafts, and home decor.",
    img: "https://i.ibb.co.com/Kc3m8m4g/aarong-logo-png-seeklogo-173336.png",
  },
  {
    name: "Bata",
    body: "Bata is an international footwear brand well-known in Bangladesh for quality shoes.",
    img: "https://i.ibb.co.com/MDMJ8tKS/png-clipart-bata-text-bata-logo-icons-logos-emojis-shop-logos.png",
  },
  {
    name: "Daraz",
    body: "Daraz is a leading e-commerce platform in Bangladesh with millions of products across categories.",
    img: "https://i.ibb.co.com/cKTg2G5b/daraz-logo-png-seeklogo-429501.png",
  },
  {
    name: "Regal Furniture",
    body: "Regal Furniture is a popular Bangladeshi brand offering modern and durable furniture.",
    img: "https://i.ibb.co.com/HLTYbrDf/regal-furniture-logo-png-seeklogo-425963.png",
  },
  {
    name: "Hatil Furniture",
    body: "Hatil is a top Bangladeshi furniture brand recognized for innovative designs and premium quality.",
    img: "https://i.ibb.co.com/DHJgZypP/hatil-furniture-logo-png-seeklogo-478634.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-md",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Partners() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <div>
        <h1 className=" text-3xl font-bold flex justify-center pb-5">
          Our Trusted Partners
        </h1>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

import wedding from "../../assets/wedding.webp";
import portrait from "../../assets/portrait.webp";
import fashion from "../../assets/fashion.webp";
import commercial from "../../assets/commercial.webp";
import cinematic from "../../assets/Cinematic.jpg";
import event from "../../assets/event.webp";

const serviceData = [
  {
    id: 1,
    title: "Wedding Photography",
    description: "Capturing every beautiful moment of your special day.",
    image: wedding,
    route: "/wedding",
  },
  {
    id: 2,
    title: "Portrait Photography",
    description: "Professional indoor and outdoor portrait sessions.",
    image: portrait,
    route: "/portrait",
  },
  {
    id: 3,
    title: "Fashion Photography",
    description: "Creative fashion and editorial photoshoots.",
    image: fashion,
    route: "/fashion",
  },
  {
    id: 4,
    title: "Commercial Photography",
    description: "Professional product and branding photography.",
    image: commercial,
    route: "/commercial",
  },
  {
    id: 5,
    title: "Cinematic Videos",
    description: "High-quality cinematic videos for every occasion.",
    image: cinematic,
    route: "/cinematic",
  },
  {
    id: 6,
    title: "Event Coverage",
    description: "Birthday, concerts, corporate and special events.",
    image: event,
    route: "/event",
  },
];

export default serviceData;
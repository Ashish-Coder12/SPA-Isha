import React from "react";
import {
  Phone,
  Instagram,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// --- CONFIGURATION: Update your image paths here ---
const IMAGE_GALLERY = [
  {
    id: 1,
    src: "",
    title: "Luxury Bridal HD",
    category: "Bridal",
  },
  {
    id: 2,
    src: "/images/cocktail.jpg",
    title: "Evening Glam",
    category: "Non-Bridal",
  },
  {
    id: 3,
    src: "/images/hair-style.jpg",
    title: "Hollywood Waves",
    category: "Styling",
  },
  {
    id: 4,
    src: "/images/reception.jpg",
    title: "Reception Look",
    category: "Bridal",
  },
  {
    id: 5,
    src: "/images/mehendi.jpg",
    title: "Mehendi Fresh",
    category: "Non-Bridal",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      {/* --- Floating WhatsApp CTA --- */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <Phone size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-medium whitespace-nowrap">
          Book Appointment
        </span>
      </a>

      {/* --- Modern Nav --- */}
      <nav className="flex justify-between items-center px-8 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-[90]">
        <div className="text-xl font-serif tracking-[0.2em] uppercase font-semibold">
          Makeup <span className="text-stone-400 font-light">by</span> Isha
        </div>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-medium">
          <a href="#services" className="hover:text-amber-700 transition">
            Services
          </a>
          <a href="#work" className="hover:text-amber-700 transition">
            Portfolio
          </a>
          <a href="#about" className="hover:text-amber-700 transition">
            The Studio
          </a>
        </div>
        <a href="#services">
        <button className="text-[11px] uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-300 transition">
          Contact
        </button>
        </a>

      </nav>

      {/* --- Hero Section --- */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-[10px] uppercase tracking-[0.2em] font-bold">
              <Star size={12} className="text-amber-600 fill-amber-600" />
              Top Rated in Delhi NCR
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tighter">
              Enhancing <br /> Your{" "}
              <span className="italic text-stone-400">Natural</span> <br />{" "}
              Radiance.
            </h1>
            <p className="text-lg text-stone-500 max-w-md leading-relaxed">
              Luxury bridal and editorial makeup services tailored for the
              modern woman. Based in South Delhi, available worldwide.
            </p>
            <div className="flex gap-4">
              <button className="bg-stone-900 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-stone-800 transition">
                Explore Packages <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Main Hero Image */}
          <div className="relative aspect-[4/5] bg-stone-200 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={"https://ik.imagekit.io/apylsa7sp/Screenshot%202025-12-22%20at%203.42.06%E2%80%AFPM.png"}
              // src={IMAGE_GALLERY[0].src}
              alt="Bridal Makeup"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* --- Bento Grid Portfolio (Local Photos) --- */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif italic">The Gallery</h2>
            <p className="text-stone-500 mt-2 tracking-wide">
              A glimpse into our recent transformations.
            </p>
          </div>
          <a
            href="https://www.instagram.com/ig.gleam"
            className="flex items-center gap-2 text-sm font-medium border-b border-stone-300 pb-1"
          >
            Follow on Instagram <Instagram size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Large Item */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl">
            <img
              src={"https://ik.imagekit.io/apylsa7sp/Screenshot%202025-12-22%20at%203.36.36%E2%80%AFPM.png"}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-serif text-2xl">
                {IMAGE_GALLERY[0].title}
              </p>
            </div>
          </div>
          {/* Medium Items */}
          {/* <div className="col-span-2 relative group overflow-hidden rounded-3xl">
            <img
              src={"https://ik.imagekit.io/apylsa7sp/hair-styles.jpg"}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div> */}
          {/* Small Items */}
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src={"https://ik.imagekit.io/apylsa7sp/bridal-main.jpg"}
              className="w-full h-full object-cover transition"
            />
          </div>
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src={"https://ik.imagekit.io/apylsa7sp/cocktail.jpg"}
              className="w-full h-full object-cover transition"
            />
          </div>
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src={"https://ik.imagekit.io/apylsa7sp/mehendi.jpg"}
              className="w-full h-full object-cover transition"
            />
          </div>
          <div className="relative group overflow-hidden rounded-3xl">
            <img
              src={"https://ik.imagekit.io/apylsa7sp/reception.jpg"}
              className="w-full h-full object-cover transition"
            />
          </div>
        </div>
      </section>

      {/* --- Modern Service Tiers --- */}
      <section id="services" className="py-24 bg-stone-100 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-stone-200/50">
            <h3 className="text-sm uppercase tracking-widest text-amber-700 font-bold mb-6">
              Ceremony
            </h3>
            <h4 className="text-4xl font-serif mb-6">The Royal Bride</h4>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Luxury HD/Airbrush makeup tailored for long hours under heavy
              lights, ensuring you look flawless from Varmala to Vidai.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Signature 3D Lashes",
                "Hair Padding & Accessories",
                "Outfit Draping",
                "Premium Kit (Dior/Chanel)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-stone-700"
                >
                  <CheckCircle2 size={18} className="text-stone-400" /> {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/918076791133?text=I'm%20interested%20in%20your%20services"
              target="_blank"
            >
              <button className="w-full py-4 rounded-full border border-stone-900 font-medium hover:bg-stone-900 hover:text-white transition">
                Inquire for Dates
              </button>
            </a>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-stone-200/50">
            <h3 className="text-sm uppercase tracking-widest text-amber-700 font-bold mb-6">
              Celebration
            </h3>
            <h4 className="text-4xl font-serif mb-6">Party & Engagement</h4>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Perfect for your pre-wedding events, cocktail nights, or being the
              best-dressed bridesmaid.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Soft Glam Finish",
                "Advanced Hairstyling",
                "Eyelash Application",
                "Studio or On-location",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-stone-700"
                >
                  <CheckCircle2 size={18} className="text-stone-400" /> {item}
                </li>
              ))}
            </ul>
            <a href="https://www.instagram.com/ig.gleam/">
              <button className="w-full py-4 rounded-full border border-stone-900 font-medium hover:bg-stone-900 hover:text-white transition">
                View Rate Card
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 px-6 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <h5 className="text-2xl font-serif mb-6 uppercase tracking-widest">
              Artistry
            </h5>
            <p className="text-stone-400 max-w-xs leading-relaxed">
              Crafting beauty and confidence in the heart of New Delhi.
              Available for bookings across the city and destination weddings.
            </p>
          </div>
          <div>
            <h6 className="text-[10px] uppercase tracking-widest font-bold mb-6">
              Connect
            </h6>
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} /> South Delhi, New Delhi
            </div>
            <a
              className="flex items-center gap-2 mb-2"
              href="https://www.instagram.com/ig.gleam/"
              target="_blank"
            >
              <Instagram size={16} /> @ig.gleam
            </a>
          </div>
          <div>
            <h6 className="text-[10px] uppercase tracking-widest font-bold mb-6">
              Working Hours
            </h6>
            <p className="text-stone-600">Daily: 09:00 - 19:00</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-100 text-[10px] uppercase tracking-widest text-stone-400">
          © 2025 All Rights Reserved. Created for Artistry by Isha Gupta.
        </div>
      </footer>
    </div>
  );
}

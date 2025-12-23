import React from "react";
import {
  Phone,
  Instagram,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2,
  Info,
  ShieldCheck,
  Sparkles,
  Camera,
  Heart,
  Brush
} from "lucide-react";

// --- CONFIGURATION: Update your image paths here ---
const IMAGE_GALLERY = [
  { id: 1, src: "https://ik.imagekit.io/apylsa7sp/Screenshot%202025-12-22%20at%203.36.36%E2%80%AFPM.png", title: "Luxury Bridal HD", category: "Bridal" },
  { id: 2, src: "https://ik.imagekit.io/apylsa7sp/bridal-main.jpg", title: "Evening Glam", category: "Non-Bridal" },
  { id: 3, src: "https://ik.imagekit.io/apylsa7sp/cocktail.jpg", title: "Hollywood Waves", category: "Styling" },
  { id: 4, src: "https://ik.imagekit.io/apylsa7sp/mehendi.jpg", title: "Reception Look", category: "Bridal" },
  { id: 5, src: "https://ik.imagekit.io/apylsa7sp/reception.jpg", title: "Mehendi Fresh", category: "Non-Bridal" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 selection:bg-stone-200">
      
      {/* --- Floating WhatsApp CTA --- */}
      <a
        href="https://wa.me/918076791133?text=Hi%20Isha,%20I%20would%20like%20to%20inquire%20about%20a%20booking."
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <Phone size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-medium whitespace-nowrap text-sm">
          Book Appointment
        </span>
      </a>

      {/* --- Modern Nav --- */}
      <nav className="flex justify-between items-center px-8 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-[90]">
        <div className="text-xl font-serif tracking-[0.2em] uppercase font-semibold text-stone-800">
          Makeup <span className="text-stone-400 font-light">by</span> Isha
        </div>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-widest font-medium text-stone-500">
          <a href="#about-work" className="hover:text-stone-900 transition">Our Philosophy</a>
          <a href="#work" className="hover:text-stone-900 transition">Portfolio</a>
          <a href="#pricing" className="hover:text-stone-900 transition">Rates</a>
        </div>
        <a href="#pricing">
          <button className="text-[11px] uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-300 transition">
            Check Availability
          </button>
        </a>
      </nav>

      {/* --- Hero Section --- */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-[10px] uppercase tracking-[0.2em] font-bold">
              <Star size={12} className="text-amber-600 fill-amber-600" />
              Luxury Artistry in New Delhi
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tighter">
              Enhancing <br /> Your <span className="italic text-stone-400">Natural</span> <br /> Radiance.
            </h1>
            <p className="text-lg text-stone-500 max-w-md leading-relaxed">
              Professional makeup services using high-end original brands. Specializing in HD finishes for brides and party glam.
            </p>
            <div className="flex gap-4">
              <a href="#pricing" className="bg-stone-900 text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-stone-800 transition shadow-lg">
                Explore Services <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-stone-200 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://ik.imagekit.io/apylsa7sp/Screenshot%202025-12-22%20at%203.42.06%E2%80%AFPM.png"
              alt="Bridal Makeup by Isha"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Philosophy & Detail --- */}
      <section id="about-work" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 border-b border-stone-100 pb-20">
            <div className="md:col-span-1">
              <h2 className="text-4xl font-serif leading-tight">The Art of <br/><span className="italic">Transformation</span></h2>
              <div className="mt-6 w-12 h-1 bg-stone-900"></div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-xl text-stone-600 leading-relaxed font-light">
                At <span className="font-semibold text-stone-900">Makeup by Isha</span>, we believe that makeup isn't a mask, but a celebration of who you are. Whether it's the most important day of your life or a gala night with friends, our goal is to provide a <span className="italic underline underline-offset-4 decoration-stone-200">weightless, HD finish</span> that looks just as stunning in person as it does on camera.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center"><Brush size={20} className="text-stone-600"/></div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">Bespoke Bridal</h4>
                  <p className="text-sm text-stone-500 leading-relaxed text-balance">Meticulous skin preparation followed by HD or Airbrush techniques to withstand long Indian wedding hours and high-flash photography.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center"><Camera size={20} className="text-stone-600"/></div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">Editorial & Party</h4>
                  <p className="text-sm text-stone-500 leading-relaxed text-balance">From Hollywood waves to bold cocktail eyes, we tailor every look to your outfit's aesthetic and the event's vibe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Quality Pillars --- */}
      <section className="bg-stone-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-6 hover:bg-white transition-colors rounded-3xl group">
            <ShieldCheck className="text-stone-300 group-hover:text-amber-700 transition-colors shrink-0" size={32} />
            <div>
              <h5 className="font-semibold uppercase text-[10px] tracking-widest mb-2">Original Brands Only</h5>
              <p className="text-[13px] text-stone-500">Charlotte Tilbury, Huda Beauty, MAC, and Dior. Only the best for your skin.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 border-y md:border-y-0 md:border-x border-stone-200 hover:bg-white transition-colors rounded-3xl group">
            <Sparkles className="text-stone-300 group-hover:text-amber-700 transition-colors shrink-0" size={32} />
            <div>
              <h5 className="font-semibold uppercase text-[10px] tracking-widest mb-2">Cleanliness & Hygiene</h5>
              <p className="text-[13px] text-stone-500">Strict sanitation protocols for all tools and products for every appointment.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 hover:bg-white transition-colors rounded-3xl group">
            <MapPin className="text-stone-300 group-hover:text-amber-700 transition-colors shrink-0" size={32} />
            <div>
              <h5 className="font-semibold uppercase text-[10px] tracking-widest mb-2">Travel Services</h5>
              <p className="text-[13px] text-stone-500">Based in South Delhi. Doorstep services available across Delhi NCR & destination weddings.</p>
            </div>
          </div>
        </div>
      </section>

       {/* --- Portfolio Section --- */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto border-t border-stone-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-serif italic text-stone-800 tracking-tight text-center md:text-left">The Portfolio</h2>
            <p className="text-stone-400 mt-2 tracking-widest text-[10px] uppercase font-bold text-center md:text-left">Selected works & Transformations</p>
          </div>
          <a href="https://www.instagram.com/ig.gleam" className="flex items-center gap-2 text-sm font-medium border-b border-stone-300 pb-1 hover:text-amber-700 hover:border-amber-700 transition">
            See more on Instagram <Instagram size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-stone-200">
            <img src={IMAGE_GALLERY[0].src} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Work"/>
          </div>
          <div className="relative group overflow-hidden rounded-3xl bg-stone-200 shadow-md">
            <img src={IMAGE_GALLERY[1].src} className="w-full h-full object-cover transition group-hover:scale-105" alt="Work"/>
          </div>
          <div className="relative group overflow-hidden rounded-3xl bg-stone-200 shadow-md">
            <img src={IMAGE_GALLERY[2].src} className="w-full h-full object-cover transition group-hover:scale-105" alt="Work"/>
          </div>
          <div className="relative group overflow-hidden rounded-3xl bg-stone-200 shadow-md">
            <img src={IMAGE_GALLERY[3].src} className="w-full h-full object-cover transition group-hover:scale-105" alt="Work"/>
          </div>
          <div className="relative group overflow-hidden rounded-3xl bg-stone-200 shadow-md">
            <img src={IMAGE_GALLERY[4].src} className="w-full h-full object-cover transition group-hover:scale-105" alt="Work"/>
          </div>
        </div>
      </section>

      {/* --- Pricing: Makeup Packages --- */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 italic text-stone-800">Rate Card</h2>
          <p className="text-stone-400 uppercase text-[10px] tracking-[0.4em] font-bold">All-Inclusive Makeup Services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "Party Makeup", price: "4,500", desc: "Sleek & Stunning Glam" },
            { name: "Haldi / Mehendi", price: "5,999", desc: "Radiant, Long-lasting Freshness" },
            { name: "Engagement / Reception", price: "9,999", desc: "Ultra HD Luxury Finish" }
          ].map((pkg) => (
            <div key={pkg.name} className="bg-white p-8 rounded-[32px] border border-stone-200 hover:shadow-2xl hover:border-amber-100 transition-all group relative overflow-hidden">
              <h4 className="text-xl font-serif mb-1 group-hover:text-amber-900">{pkg.name}</h4>
              <p className="text-stone-400 text-[10px] mb-6 uppercase tracking-widest font-bold">{pkg.desc}</p>
              <div className="text-4xl font-light mb-8 text-stone-800 tracking-tighter">₹{pkg.price}</div>
              <ul className="space-y-3 mb-10 border-t border-stone-50 pt-6">
                {['HD Makeup', 'Desired Hairstyles', 'Lenses & Premium Lashes', 'Outfit Draping', 'Jewellery Assistance'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle2 size={14} className="text-stone-300 group-hover:text-amber-600" /> {item}
                  </li>
                ))}
              </ul>
              <a href={`https://wa.me/918076791133?text=Hi%20Isha,%20I%20want%20to%20book%20the%20${pkg.name}%20package.`} 
                 className="block text-center py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-700 transition shadow-md">
                Reserve Your Date
              </a>
            </div>
          ))}
        </div>

        {/* --- Pricing: Hairstyling Only --- */}
        <div className="bg-stone-900 text-white p-10 md:p-16 rounded-[40px] overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
            <Brush size={200} />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif mb-4 flex items-center gap-3 italic">Hairstyling Only <Heart size={24} className="text-amber-600 fill-amber-600"/></h3>
              <p className="text-stone-400 mb-8 max-w-sm text-sm leading-relaxed">Professional styling ranging from contemporary updos to classic Hollywood waves.</p>
              <div className="space-y-4">
                {[
                  { n: "Party Hair", p: "2,000" },
                  { n: "Haldi / Mehendi", p: "2,500" },
                  { n: "Engagement / Reception", p: "3,500" },
                  { n: "Bridal Styling", p: "5,000" }
                ].map((item) => (
                  <div key={item.n} className="flex justify-between border-b border-stone-800 pb-2 hover:border-amber-700 transition">
                    <span className="text-stone-300 font-medium">{item.n}</span>
                    <span className="font-semibold italic text-amber-500 text-lg">₹{item.p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 ring-1 ring-white/5">
              <h5 className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest mb-6 text-amber-500"> <Info size={16}/> Essential Booking Policy</h5>
              <ul className="space-y-4 text-xs text-stone-400 leading-relaxed">
                <li className="flex gap-2"><span>•</span> <span>Prices include services within <span className="text-white font-bold tracking-widest underline decoration-amber-600">DELHI NCR</span> only.</span></li>
                <li className="flex gap-2"><span>•</span> <span>Travel & conveyance charges are added separately for locations outside the NCR region.</span></li>
                <li className="flex gap-2"><span>•</span> <span><strong>Bridal Services:</strong> We highly encourage and are open for pre-wedding trials.</span></li>
                <li className="flex gap-2"><span>•</span> <span>Hygiene is our top priority. All tools are sanitized before every appointment.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

      {/* --- Footer --- */}
      <footer className="py-20 px-6 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-2">
            <h5 className="text-2xl font-serif mb-6 uppercase tracking-widest">Isha Gupta</h5>
            <p className="text-stone-400 max-w-xs leading-relaxed">
              Crafting beauty and confidence in the heart of New Delhi. Available for bookings across the city and destination weddings worldwide.
            </p>
          </div>
          <div>
            <h6 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-stone-500">Contact Details</h6>
            <div className="flex items-center gap-2 mb-3"><MapPin size={16} className="text-stone-400"/> South Delhi, New Delhi</div>
            <a href="https://www.instagram.com/ig.gleam/" target="_blank" className="flex items-center gap-2 hover:text-amber-700 transition">
              <Instagram size={16} className="text-stone-400"/> @ig.gleam
            </a>
          </div>
          <div>
            <h6 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-stone-500">Booking Hours</h6>
            <p className="text-stone-600">Daily: 09:00 AM - 07:00 PM</p>
            <p className="text-stone-400 mt-2 italic text-xs underline decoration-stone-200 underline-offset-4">Trials by appointment only</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-100 text-[10px] uppercase tracking-widest text-stone-400 flex justify-between">
          <span>© 2025 Isha Gupta. All Rights Reserved.</span>
          <span className="hidden md:inline italic">Designed for Artistry</span>
        </div>
      </footer>
    </div>
  );
}
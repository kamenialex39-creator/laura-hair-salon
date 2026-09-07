import { useState } from 'react'
import heroImage from "./assets/hero.jpg";
import gallery1Image from "./assets/gallery1.jpg";
import gallery2Image from "./assets/gallery2.jpg";
import gallery3Image from "./assets/gallery3.jpg";
import gallery4Image from "./assets/gallery4.jpg";
import gallery5Image from "./assets/gallery5.jpg";
import gallery6Image from "./assets/gallery6.jpg";
import aboutImage from "./assets/about.jpg";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-[#FBF7F1] text-[#1E1712]">
      {/* Navigation */}
      <header className="relative border-b border-[#1E1712]/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#"
            className="font-serif text-2xl font-semibold tracking-tight"
          >
            Laura Hair Salon
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-[#4A4038] transition hover:text-[#A9814D]"
            >
              About
            </a>

            <a
              href="#services"
              className="text-sm text-[#4A4038] transition hover:text-[#A9814D]"
            >
              Services
            </a>

            <a
              href="#gallery"
              className="text-sm text-[#4A4038] transition hover:text-[#A9814D]"
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="text-sm text-[#4A4038] transition hover:text-[#A9814D]"
            >
              Contact
            </a>

            <a
              href="#booking"
              className="rounded-full bg-[#1E1712] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#A9814D]"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-[#1E1712]/20 px-4 py-2 text-sm md:hidden"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>

                {menuOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-[#1E1712]/10 bg-[#FBF7F1] px-6 py-6 shadow-sm md:hidden">
          <div className="flex flex-col gap-5 text-sm">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#A9814D]"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#A9814D]"
            >
              Services
            </a>

            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#A9814D]"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="transition hover:text-[#A9814D]"
            >
              Contact
            </a>

            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-[#1E1712] px-5 py-3 text-center text-white transition hover:bg-[#A9814D]"
            >
              Book Appointment →
            </a>

          </div>
        </div>
      )}
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div className="max-w-xl fade-up">
            <p className="mb-6 text-sm font-medium tracking-wide text-[#A9814D]">
              BEAUTY • STYLE • CONFIDENCE
            </p>

            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Your hair.
              <br />
              Your beauty.
              <br />
              <span className="italic text-[#B8626B]">
                Your confidence.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#4A4038]">
              A warm, welcoming beauty experience designed to help you
              look beautiful, feel confident, and leave feeling like your
              very best self.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#booking"
                className="rounded-full bg-[#1E1712] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#A9814D]"
              >
                Book an Appointment
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#1E1712]/20 px-7 py-4 text-sm font-medium transition hover:border-[#A9814D] hover:text-[#A9814D]"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative fade-up-delay">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={heroImage}
                alt="Hair styling at Laura Hair Salon"
                className="h-[550px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-6 py-5 shadow-xl sm:block">
              <p className="font-serif text-2xl">
                Feel beautiful.
              </p>

              <p className="mt-1 text-sm text-[#4A4038]">
                Leave feeling confident.
              </p>
            </div>
          </div>
        </section>

{/* Services */}
<section
  id="services"
  className="border-t border-[#1E1712]/10 px-6 py-20 lg:px-8 lg:py-28"
>
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      
      <div>
        <p className="text-sm font-medium tracking-wide text-[#A9814D]">
          OUR SERVICES
        </p>

        <h2 className="mt-4 max-w-md font-serif text-5xl leading-tight sm:text-6xl">
          Beauty that feels like you.
        </h2>

        <p className="mt-6 max-w-md text-base leading-7 text-[#4A4038]">
          From beautiful protective styles to detailed beauty
          treatments, every service is designed with care,
          creativity, and attention to detail.
        </p>

        <a
          href="#booking"
          className="mt-8 inline-block text-sm font-medium underline underline-offset-8 decoration-[#A9814D]"
        >
          Book your appointment →
        </a>
      </div>

      <div className="divide-y divide-[#1E1712]/10 border-y border-[#1E1712]/10">

        {/* Braiding */}
        <div className="group flex items-center justify-between border-l-2 border-transparent py-6 pl-4 transition-all duration-300 hover:border-[#A9814D] hover:pl-6">
          <div>
            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#A9814D]">
              Braiding
            </h3>

            <p className="mt-1 text-sm text-[#4A4038]">
              Beautiful protective and statement styles.
            </p>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

        {/* Hair Installations */}
        <div className="group flex items-center justify-between border-l-2 border-transparent py-6 pl-4 transition-all duration-300 hover:border-[#A9814D] hover:pl-6">
          <div>
            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#A9814D]">
              Hair Installations
            </h3>

            <p className="mt-1 text-sm text-[#4A4038]">
              Seamless styles created to complement you.
            </p>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

        {/* Dreadlocks */}
        <div className="group flex items-center justify-between border-l-2 border-transparent py-6 pl-4 transition-all duration-300 hover:border-[#A9814D] hover:pl-6">
          <div>
            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#A9814D]">
              Dreadlocks
            </h3>

            <p className="mt-1 text-sm text-[#4A4038]">
              Styling and care for beautiful locs.
            </p>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

        {/* Nail Services */}
        <div className="group flex items-center justify-between border-l-2 border-transparent py-6 pl-4 transition-all duration-300 hover:border-[#A9814D] hover:pl-6">
          <div>
            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#A9814D]">
              Nail Services
            </h3>

            <p className="mt-1 text-sm text-[#4A4038]">
              Polished details to complete your look.
            </p>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

        {/* Eyelash Extensions */}
        <div className="group flex items-center justify-between border-l-2 border-transparent py-6 pl-4 transition-all duration-300 hover:border-[#A9814D] hover:pl-6">
          <div>
            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#A9814D]">
              Eyelash Extensions
            </h3>

            <p className="mt-1 text-sm text-[#4A4038]">
              Soft, defined lashes with a beautiful finish.
            </p>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

        {/* Eyebrow Treatments */}
        <div className="group flex items-center justify-between border-l-2 border-transparent py-6 pl-4 transition-all duration-300 hover:border-[#A9814D] hover:pl-6">
          <div>
            <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-[#A9814D]">
              Eyebrow Treatments
            </h3>

            <p className="mt-1 text-sm text-[#4A4038]">
              Shape and definition tailored to your features.
            </p>
          </div>

          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>
    </div>
  </div>
</section>

                {/* About */}
        <section
          id="about"
          className="border-t border-[#1E1712]/10 px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              
              {/* About image */}
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={aboutImage}
                  alt="Beautiful woman at Laura Hair Salon"
                  className="h-[550px] w-full object-cover"
                />
              </div>

              {/* About text */}
              <div className="max-w-xl lg:pl-10">
                <p className="text-sm font-medium tracking-wide text-[#A9814D]">
                  ABOUT LAURA HAIR SALON
                </p>

                <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
                  Where beauty meets confidence.
                </h2>

                <p className="mt-6 text-base leading-7 text-[#4A4038]">
                  At Laura Hair Salon, beauty is more than just a hairstyle.
                  It is about feeling confident, comfortable, and completely
                  yourself.
                </p>

                <p className="mt-5 text-base leading-7 text-[#4A4038]">
                  We create a warm and welcoming experience where every
                  client receives personal attention, thoughtful service,
                  and a look that makes them feel beautiful inside and out.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#1E1712]/10 pt-8">
                  <div>
                    <p className="font-serif text-3xl text-[#B8626B]">
                      100%
                    </p>

                    <p className="mt-1 text-sm text-[#4A4038]">
                      Personalized care
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-3xl text-[#B8626B]">
                      6+
                    </p>

                    <p className="mt-1 text-sm text-[#4A4038]">
                      Beauty services
                    </p>
                  </div>
                </div>

                <a
                  href="#booking"
                  className="mt-8 inline-block rounded-full bg-[#1E1712] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#A9814D]"
                >
                  Book Your Appointment
                </a>
              </div>
            </div>
          </div>
        </section>

                {/* Gallery */}
        <section
          id="gallery"
          className="border-t border-[#1E1712]/10 px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            {/* Gallery heading */}
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-[#A9814D]">
                OUR GALLERY
              </p>

              <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
                A little inspiration for your next look.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#4A4038]">
                Explore a selection of beautiful styles and beauty looks.
                Your next transformation could be waiting here.
              </p>
            </div>

            {/* Gallery images */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={gallery1Image}
                  alt="Hair styling inspiration"
                  className="h-[420px] w-full object-cover object-[50%_35%] transition duration-500 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-[2rem] sm:mt-12">
                <img
                  src={gallery2Image}
                  alt="Beautiful salon hairstyle"
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={gallery3Image}
                  alt="Hair salon beauty look"
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={gallery4Image}
                  alt="Professional hair styling"
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-[2rem] sm:mt-12">
                <img
                  src={gallery5Image}
                  alt="Beauty and hair inspiration"
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={gallery6Image}
                  alt="Elegant beauty look"
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

            </div>

            {/* Gallery CTA */}
            <div className="mt-12 text-center">
              <a
                href="#booking"
                className="inline-block rounded-full border border-[#1E1712]/20 px-7 py-4 text-sm font-medium transition hover:border-[#A9814D] hover:text-[#A9814D]"
              >
                Book Your Look →
              </a>
            </div>
          </div>
        </section>

                {/* Why Choose Us */}
        <section
          className="border-t border-[#1E1712]/10 bg-[#1E1712] px-6 py-20 text-[#FBF7F1] lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              
              {/* Section heading */}
              <div>
                <p className="text-sm font-medium tracking-wide text-[#A9814D]">
                  WHY LAURA
                </p>

                <h2 className="mt-4 max-w-lg font-serif text-5xl leading-tight sm:text-6xl">
                  Because you deserve to feel your best.
                </h2>

                <p className="mt-6 max-w-md text-base leading-7 text-[#FBF7F1]/70">
                  Every appointment is an opportunity to slow down,
                  feel cared for, and leave with a look that feels
                  completely you.
                </p>
              </div>

              {/* Reasons */}
              <div className="divide-y divide-[#FBF7F1]/15 border-y border-[#FBF7F1]/15">
                
                <div className="flex gap-6 py-7">
                  <span className="font-serif text-2xl text-[#A9814D]">
                    01
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl">
                      Personalized Care
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#FBF7F1]/65">
                      Your style, your preferences, and your beauty goals
                      come first. Every service is approached with you
                      in mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 py-7">
                  <span className="font-serif text-2xl text-[#A9814D]">
                    02
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl">
                      Attention to Detail
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#FBF7F1]/65">
                      From the smallest finishing touches to the final
                      look, we believe the details make all the difference.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 py-7">
                  <span className="font-serif text-2xl text-[#A9814D]">
                    03
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl">
                      Beauty With Confidence
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#FBF7F1]/65">
                      We want you to leave feeling beautiful, confident,
                      and excited about your new look.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 py-7">
                  <span className="font-serif text-2xl text-[#A9814D]">
                    04
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl">
                      A Welcoming Experience
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[#FBF7F1]/65">
                      A warm atmosphere where you can relax, enjoy your
                      appointment, and take a little time for yourself.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 flex flex-col gap-6 border-t border-[#FBF7F1]/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-serif text-3xl sm:text-4xl">
                Ready for your next look?
              </p>

              <a
                href="#booking"
                className="inline-block rounded-full bg-[#FBF7F1] px-7 py-4 text-center text-sm font-medium text-[#1E1712] transition hover:bg-[#A9814D] hover:text-white"
              >
                Book an Appointment →
              </a>
            </div>
          </div>
        </section>

                {/* Testimonials */}
        <section
          className="border-t border-[#1E1712]/10 px-6 py-20 lg:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium tracking-wide text-[#A9814D]">
                CLIENT LOVE
              </p>

              <h2 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
                Beautiful words from beautiful clients.
              </h2>

              <p className="mt-6 text-base leading-7 text-[#4A4038]">
                We believe the best part of what we do is seeing our
                clients leave feeling confident and beautiful.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">

              {/* Testimonial 1 */}
              <div className="rounded-[2rem] border border-[#1E1712]/10 bg-white p-8">
                <div className="font-serif text-5xl text-[#B8626B]">
                  “
                </div>

                <p className="mt-4 text-base leading-7 text-[#4A4038]">
                  Placeholder testimonial — replace this with a real
                  Laura Hair Salon client review.
                </p>

                <div className="mt-8 border-t border-[#1E1712]/10 pt-5">
                  <p className="font-medium">
                    Client Name
                  </p>

                  <p className="mt-1 text-sm text-[#4A4038]">
                    Hair Service
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="rounded-[2rem] border border-[#1E1712]/10 bg-white p-8 lg:mt-10">
                <div className="font-serif text-5xl text-[#B8626B]">
                  “
                </div>

                <p className="mt-4 text-base leading-7 text-[#4A4038]">
                  Placeholder testimonial — replace this with a real
                  Laura Hair Salon client review.
                </p>

                <div className="mt-8 border-t border-[#1E1712]/10 pt-5">
                  <p className="font-medium">
                    Client Name
                  </p>

                  <p className="mt-1 text-sm text-[#4A4038]">
                    Beauty Service
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="rounded-[2rem] border border-[#1E1712]/10 bg-white p-8">
                <div className="font-serif text-5xl text-[#B8626B]">
                  “
                </div>

                <p className="mt-4 text-base leading-7 text-[#4A4038]">
                  Placeholder testimonial — replace this with a real
                  Laura Hair Salon client review.
                </p>

                <div className="mt-8 border-t border-[#1E1712]/10 pt-5">
                  <p className="font-medium">
                    Client Name
                  </p>

                  <p className="mt-1 text-sm text-[#4A4038]">
                    Hair Service
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

{/* Booking */}
<section
  id="booking"
  className="border-t border-[#1E1712]/10 bg-[#B8626B] px-6 py-20 lg:px-8 lg:py-28"
>
  <div className="mx-auto max-w-5xl text-center">

    <p className="text-sm font-medium tracking-[0.15em] text-white/80">
      YOUR NEXT LOOK STARTS HERE
    </p>

    <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
      Ready to feel beautiful?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80">
      Book your appointment and let us create a look that makes
      you feel confident, beautiful, and completely yourself.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

      <a
        href="https://wa.me/27746979536"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-full bg-white px-8 py-4 text-sm font-medium text-[#1E1712] transition duration-300 hover:-translate-y-1 hover:bg-[#A9814D] hover:text-white sm:w-auto"
      >
        Book on WhatsApp →
      </a>

      <a
        href="#contact"
        className="w-full rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
      >
        Contact Us
      </a>

    </div>

    <p className="mt-8 text-xs text-white/60">
      Please contact us to confirm availability and appointment details.
    </p>

  </div>
</section>

{/* Contact */}
<section
  id="contact"
  className="border-t border-[#1E1712]/10 px-6 py-20 lg:px-8 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">

      {/* Contact introduction */}
      <div>
        <p className="text-sm font-medium tracking-[0.15em] text-[#A9814D]">
          GET IN TOUCH
        </p>

        <h2 className="mt-4 max-w-lg font-serif text-5xl leading-tight sm:text-6xl">
          Let's make your next look beautiful.
        </h2>

        <p className="mt-6 max-w-md text-base leading-7 text-[#4A4038]">
          Have a question about a service or want to book your
          next appointment? We'd love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <a
            href="https://wa.me/27746979536"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1E1712] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A9814D]"
          >
            WhatsApp Us →
          </a>

          <a
            href="tel:+27746979536"
            className="rounded-full border border-[#1E1712]/20 px-7 py-4 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-[#A9814D] hover:text-[#A9814D]"
          >
            Call Us
          </a>

        </div>

        <p className="mt-8 text-xs leading-5 text-[#4A4038]/70">
          We’re happy to help with services, availability, and
          appointment questions.
        </p>
      </div>

      {/* Contact details */}
      <div className="grid gap-5 sm:grid-cols-2">

        {/* Address */}
        <div className="group rounded-[2rem] border border-[#1E1712]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A9814D]/40 hover:shadow-lg hover:shadow-[#1E1712]/5">

          <p className="text-sm font-medium tracking-wide text-[#A9814D]">
            VISIT US
          </p>

          <h3 className="mt-3 font-serif text-2xl">
            Our Salon
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#4A4038]">
            88 St George's Mall
            <br />
            Cape Town City Centre
            <br />
            Cape Town, South Africa
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=88%20St%20George's%20Mall%2C%20Cape%20Town%20City%20Centre%2C%20Cape%20Town"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-medium underline underline-offset-4 decoration-[#A9814D] transition hover:text-[#A9814D]"
          >
            Get Directions →
          </a>
        </div>

        {/* Phone & WhatsApp */}
        <div className="group rounded-[2rem] border border-[#1E1712]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A9814D]/40 hover:shadow-lg hover:shadow-[#1E1712]/5">

          <p className="text-sm font-medium tracking-wide text-[#A9814D]">
            CALL OR WHATSAPP
          </p>

          <h3 className="mt-3 font-serif text-2xl">
            Let's chat
          </h3>

          <a
            href="tel:+27746979536"
            className="mt-3 block text-sm leading-6 text-[#4A4038] transition hover:text-[#A9814D]"
          >
            +27 74 697 9536
          </a>

          <a
            href="https://wa.me/27746979536"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium underline underline-offset-4 decoration-[#A9814D] transition hover:text-[#A9814D]"
          >
            Message us on WhatsApp →
          </a>
        </div>

        {/* Email */}
        <div className="group rounded-[2rem] border border-[#1E1712]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A9814D]/40 hover:shadow-lg hover:shadow-[#1E1712]/5">

          <p className="text-sm font-medium tracking-wide text-[#A9814D]">
            EMAIL
          </p>

          <h3 className="mt-3 font-serif text-2xl">
            Send us a message
          </h3>

          <a
            href="mailto:edwigelaure5@gmail.com"
            className="mt-3 block break-all text-sm leading-6 text-[#4A4038] transition hover:text-[#A9814D]"
          >
            edwigelaure5@gmail.com
          </a>
        </div>

        {/* Opening Hours */}
        <div className="group rounded-[2rem] border border-[#1E1712]/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#A9814D]/40 hover:shadow-lg hover:shadow-[#1E1712]/5">

          <p className="text-sm font-medium tracking-wide text-[#A9814D]">
            OPENING HOURS
          </p>

          <h3 className="mt-3 font-serif text-2xl">
            When to visit
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#4A4038]">
            8:00 AM – 6:00 PM
          </p>

          <p className="mt-2 text-xs leading-5 text-[#4A4038]/70">
            Please contact us to confirm availability.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
      </main>

<footer className="border-t border-[#1E1712]/10 bg-[#FBF7F1] px-6 py-14 lg:px-8">

  <div className="mx-auto max-w-7xl">

    {/* Main footer */}
    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">

      {/* Brand */}
      <div>
        <a
          href="#"
          className="font-serif text-4xl font-semibold tracking-tight"
        >
          Laura Hair Salon
        </a>

        <p className="mt-4 max-w-sm text-sm leading-6 text-[#4A4038]">
          Beautiful hair, personalized care, and confidence
          in every look.
        </p>

        <a
          href="https://wa.me/27746979536"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full bg-[#1E1712] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#A9814D]"
        >
          WhatsApp Us →
        </a>
      </div>

      {/* Explore */}
      <div>
        <p className="text-sm font-medium tracking-[0.15em] text-[#A9814D]">
          EXPLORE
        </p>

        <div className="mt-5 flex flex-col gap-3 text-sm">

          <a
            href="#about"
            className="transition hover:translate-x-1 hover:text-[#A9814D]"
          >
            About
          </a>

          <a
            href="#services"
            className="transition hover:translate-x-1 hover:text-[#A9814D]"
          >
            Services
          </a>

          <a
            href="#gallery"
            className="transition hover:translate-x-1 hover:text-[#A9814D]"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="transition hover:translate-x-1 hover:text-[#A9814D]"
          >
            Contact
          </a>

        </div>
      </div>

      {/* Appointment */}
      <div>
        <p className="text-sm font-medium tracking-[0.15em] text-[#A9814D]">
          APPOINTMENTS
        </p>

        <p className="mt-5 max-w-xs text-sm leading-6 text-[#4A4038]">
          Ready for your next look? Get in touch with us
          to check availability and book your appointment.
        </p>

        <a
          href="#booking"
          className="mt-6 inline-flex rounded-full border border-[#1E1712]/20 px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:border-[#A9814D] hover:text-[#A9814D]"
        >
          Book Appointment →
        </a>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-14 flex flex-col gap-3 border-t border-[#1E1712]/10 pt-6 text-xs text-[#4A4038] sm:flex-row sm:items-center sm:justify-between">

      <p>
        © 2026 Laura Hair Salon. All rights reserved.
      </p>

      <p>
        Cape Town, South Africa
      </p>

    </div>

  </div>
</footer>
    </div>
  )
}

export default App
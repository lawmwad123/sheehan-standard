import Image from "next/image";
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Sheehan Standard Primary School",
    "description": "Leading educational institution in Lubaga, providing both day and boarding facilities",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lubaga - Bulwa Zone",
      "addressLocality": "Kampala",
      "addressCountry": "Uganda"
    },
    "telephone": "0700 390999",
    "email": "sheehanprimary@gmail.com",
    "url": "https://sheehan-standard.vercel.app"
  };

  return (
    <div className="min-h-screen">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section */}
      <section className="hero-section relative h-[80vh] flex items-center justify-center bg-primary text-white animate-fade-in">
        <div className="absolute inset-0">
          <Image
            src="/images/students.jpg"
            alt="Sheehan Standard School Building"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <Image
            src="https://png.pngtree.com/png-clipart/20230413/original/pngtree-education-logo-and-school-badge-design-template-png-image_9052583.png"
            alt="School Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
          <h1 className="text-4xl md:text-6xl font-bold">
            Sheehan Standard Primary School
          </h1>
          <p className="text-xl md:text-2xl">"We invest in Education"</p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
            <a
              href="#programs"
              className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-all"
            >
              Our Programs
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: "Day & Boarding", text: "Flexible learning options for all students" },
            { title: "Location", text: "Lubaga - Bulwa Zone, Kampala-Uganda" },
            { title: "Contact", text: "0700 390999\nsheehanprimary@gmail.com" }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Sheehan Standard Primary School is a leading educational institution in Lubaga, 
                providing both day and boarding facilities. Our commitment to excellence in education 
                has made us one of the most respected schools in Kampala.
              </p>
              <p className="text-lg">
                Founded with a vision to nurture young minds, we focus on holistic development 
                through academic excellence, character building, and extra-curricular activities.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/tour.jpg"
                alt="School Campus"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Academic Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Education",
                description: "Comprehensive primary education from P1 to P7",
                icon: "📚"
              },
              {
                title: "Special Programs",
                description: "Extra coaching and talent development",
                icon: "🎯"
              },
              {
                title: "Co-Curricular",
                description: "Sports, music, art, and cultural activities",
                icon: "🎨"
              }
            ].map((program, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 animate-bounce-slow">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Modern Classrooms", 
                image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800"
              },
              { 
                name: "Library", 
                image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800"
              },
              { 
                name: "Computer Lab", 
                image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800"
              },
              { 
                name: "Boarding Facilities", 
                image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800"
              },
              { 
                name: "Sports Grounds", 
                image: "https://images.unsplash.com/photo-1543633550-f431af584afd?auto=format&fit=crop&w=800"
              },
              { 
                name: "Dining Hall", 
                image: "https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?auto=format&fit=crop&w=800"
              }
            ].map((facility, index) => (
              <div 
                key={index} 
                className="group relative h-64 rounded-lg overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end p-4 transition-opacity duration-300 group-hover:bg-black/70">
                  <h3 className="text-white text-xl font-bold transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    {facility.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Admissions</h2>
          <div className="bg-primary text-white rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Join Our School</h3>
                <p>We welcome applications throughout the year. Our admission process is designed to be straightforward and parent-friendly.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span>✓</span> Complete application form
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Previous academic records
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Interview process
                  </li>
                </ul>
                <button className="bg-white text-primary px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                  Download Application Form
                </button>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                  alt="Students in classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">News & Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Sports Day",
                date: "March 1, 2024",
                description: "Join us for our annual sports day celebration with exciting competitions and events.",
                image: "https://images.unsplash.com/photo-1576860525375-4e7b4e00155c?auto=format&fit=crop&w=800"
              },
              {
                title: "Science Fair 2024",
                date: "March 15, 2024",
                description: "Students showcase their innovative science projects and experiments.",
                image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800"
              },
              {
                title: "Cultural Day",
                date: "March 30, 2024",
                description: "Celebrating our diversity through music, dance, and traditional performances.",
                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800"
              }
            ].map((news, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600">{news.description}</p>
                  <a href="#" className="text-primary mt-4 inline-block hover:underline">Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p>Lubaga - Bulwa Zone, Kampala-Uganda</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p>0700 390999</p>
                <p>0773 733059</p>
                <p>0757 062696</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p>sheehanprimary@gmail.com</p>
              </div>
            </div>
            <form className="space-y-6">
              {[
                { label: "Name", type: "text", id: "name" },
                { label: "Email", type: "email", id: "email" },
                { label: "Message", type: "textarea", id: "message" }
              ].map((field, index) => (
                <div 
                  key={field.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <label className="block text-sm font-medium mb-2" htmlFor={field.id}>
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transform transition-all duration-300 focus:scale-[1.02]"
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transform transition-all duration-300 focus:scale-[1.02]"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer can be added here */}

    </div>
  );
}

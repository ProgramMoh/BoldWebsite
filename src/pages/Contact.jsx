import { useState, useEffect } from "react";

// Icons (unchanged)
const MailIcon = () => (
  <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const LocationIcon = () => (
  <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const FacebookIcon = () => (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);
const InstagramIcon = () => (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
    </svg>
);
const YouTubeIcon = () => (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);


function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setSuccess("Thanks for your message! We’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setTimeout(() => setSuccess(""), 5000);
  }

  const inputClass = "w-full rounded-md border-2 border-transparent bg-white p-3 shadow-lg transition duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-200 dark:text-black dark:border-blue-500 dark:placeholder:text-gray-600";
  const errorClass = "mt-1 text-sm text-red-500";

  return (
    <div className="min-h-[82vh] bg-blue-50 px-4 py-16 dark:bg-gray-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className={`text-center transition-all duration-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Have a question or a comment? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className={`flex flex-col gap-8 transition-all duration-700 ease-out ${isLoaded ? 'translate-x-0 opacity-100 delay-200' : '-translate-x-4 opacity-0'}`}>
            <div className="flex items-start gap-4 rounded-lg bg-blue-800 p-6 text-white shadow-lg">
              <div className="md:col-span-2">
            <h4 className="font-sora text-lg font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <LocationIcon />
                <span className="text-blue-50">6101 N Hollywood Blvd, Ste 120 Las Vegas, Nv. 89115</span>
              </li>
            </ul>
          </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg bg-blue-800 p-6 text-white shadow-lg">
              <MailIcon />
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="mt-1 text-blue-50 dark:text-gray-300">Our team is here to help. Drop us a line for any inquiries.</p>
                <a href="mailto:contact@mybrand.com" className="mt-2 inline-block font-semibold underline">contact@mybrand.com</a>
              </div>
            </div>
            <div className="rounded-lg bg-blue-800 p-6 text-white shadow-lg">
                <h3 className="text-xl font-semibold">Follow Our Journey</h3>
                <p className="mt-1 text-blue-50 dark:text-gray-300">Check out our socials for updates and news.</p>
                <div className="mt-3 flex gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110"><FacebookIcon /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110"><InstagramIcon /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110"><YouTubeIcon /></a>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* --- CHANGE 1: Added flex and flex-col to this div --- */}
          <div className={`flex flex-col transition-all duration-700 ease-out ${isLoaded ? 'translate-x-0 opacity-100 delay-300' : 'translate-x-4 opacity-0'}`}>
            {success ? (
              <div className="flex h-full items-center justify-center rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-700">
                <p className="text-2xl font-semibold text-blue-800 dark:text-white">{success}</p>
              </div>
            ) : (
              // --- CHANGE 2: Added flex-grow to the form ---
              <form onSubmit={handleSubmit} className="flex flex-grow flex-col gap-8 rounded-lg bg-white p-8 shadow-xl dark:bg-gray-700">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="Your Name" className={inputClass} />
                  {errors.name && <p className={errorClass}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" value={form.email} onChange={handleChange} placeholder="Your Email" className={inputClass} />
                  {errors.email && <p className={errorClass}>{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea name="message" id="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="5" className={inputClass}></textarea>
                  {errors.message && <p className={errorClass}>{errors.message}</p>}
                </div>
                <button className="transform rounded-md bg-blue-800 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 active:scale-95 dark:bg-brand-accent dark:text-brand-dark dark:hover:bg-yellow-300">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
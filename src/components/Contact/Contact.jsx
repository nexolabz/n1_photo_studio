import contactBg from "../../assets/contact.webp";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";


function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted")
    const url ="https://script.google.com/macros/s/AKfycbw-Xr-kFK3X7bCy5okyYlkLOT9Md0gaPpS5UmgfsbLD7QpzfJ7ujH1Hfo52rJlU2mkFaQ/exec"
    fetch(url,{
      method:"POST",
      headers:{ "Content-Type": "application/x-www-form-urlencoded"},
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Phone_Number=${e.target.phone.value}&Message=${e.target.message.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
  }


  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center"
    >
      
      <img
        src={contactBg}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 "></div>

      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          

          <div>

            <p className="uppercase tracking-[6px] text-yellow-400">
              Contact
            </p>

            <h2 className="text-6xl font-black mt-4">
              GET IN
              <span className="text-yellow-400">
                {" "}TOUCH
              </span>
            </h2>

            <p className="text-yellow-500 text-xl mt-8 leading-8">
              We'd love to hear your story.
              Whether it's your wedding,
              portrait session or commercial
              shoot, let's create something
              unforgettable together.
            </p>

            <div className="space-y-6 mt-12">

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-500 text-xl" />
                <span>Bhopal, Madhya Pradesh</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-500 text-xl" />
                
                <span>+91 9999999999</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-yellow-500 text-xl" />
                <span>lensstudio@gmail.com</span>
              </div>

            </div>

          

            <div className="flex gap-5 mt-10">

              <div className="w-12 h-12 rounded-full border border-yellow-500 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-full border border-yellow-500 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

            </div>

          </div>

         

          <div className=" backdrop-blur-xl rounded-2xl p-10 shadow-2xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
              name="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-zinc-600 rounded-lg px-5 py-4 outline-none focus:border-yellow-400"
              />

              <input
              name="email"
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-zinc-600 rounded-lg px-5 py-4 outline-none focus:border-yellow-400"
              />

              <input
              name="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full bg-transparent border border-zinc-600 rounded-lg px-5 py-4 outline-none focus:border-yellow-400"
              />

              <textarea
              name="message"
                rows="5"
                placeholder="Write Your Message..."
                className="w-full bg-transparent border border-zinc-600 rounded-lg px-5 py-4 outline-none focus:border-yellow-400 resize-none"
              ></textarea>

              <button
              type="submit"
                className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg hover:bg-yellow-300 duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
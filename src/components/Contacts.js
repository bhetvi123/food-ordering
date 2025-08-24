let Contacts = () => {
    return(
 <div className="min-h-screen bg-yellow-50 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] flex items-center justify-center px-4 py-10 font-serif">
      <div className="w-full max-w-5xl bg-white bg-opacity-90 shadow-2xl rounded-3xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Info Section */}
        <div className="md:w-1/2 p-8 bg-gradient-to-b from-yellow-100 to-rose-200">
          <h2 className="text-4xl font-bold text-green-900 mb-2">Hwetvi Barot</h2>
          <p className="text-gray-800 mb-1">Frontend Developer (MERN)</p>
          <p className="text-gray-700 italic mb-4">“Building beautiful UIs with React & Tailwind.”</p>
            <div className="text-sm text-gray-600 space-y-2">
            <p>📧 bhetvi123@gmail.com</p>
            <p>📍 Ahmedabad, India</p>
            <p>📱 +91 9662077907</p>
            <p>🌐 www.vrajeshdev.com</p>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="md:w-1/2 p-8">
          <h3 className="text-3xl font-semibold text-green-800 mb-6">Contact Me</h3>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-300 resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-green-700 text-white rounded-lg font-bold hover:bg-green-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    );
};
export default Contacts;
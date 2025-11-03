import { Mail, MapPin, Phone } from "lucide-react";

function ContactPage() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h2>
                    <p className="text-gray-600">
                        Have questions or suggestions? We’d love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Side – Contact Info */}
                    <div className="space-y-6">
                        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-teal-100 text-teal-600 rounded-full">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Our Address</h4>
                                    <p className="text-gray-600">123 Library Street, BookTown, BD</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-teal-100 text-teal-600 rounded-full">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
                                    <p className="text-gray-600">+880 1737096775</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-auto p-4 sm:p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                {/* Icon */}
                                <div className="flex-shrink-0 p-4 bg-teal-100 text-teal-600 rounded-full">
                                    <Mail size={28} />
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
                                        Email Us
                                    </h4>
                                    <p className="text-gray-600 text-sm sm:text-base break-words">
                                        junayedmuhammad.jm@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side – Contact Form */}
                    <form className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                              rows={5}
                                placeholder="Write your message..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;

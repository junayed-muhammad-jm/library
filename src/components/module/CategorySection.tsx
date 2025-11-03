import { BookOpen, PenTool, Globe, Heart, Lightbulb, Code } from "lucide-react";

function CategorySection() {
    const categories = [
        { name: "Fiction", icon: <BookOpen size={28} />, color: "bg-blue-100 text-blue-700" },
        { name: "Poetry", icon: <PenTool size={28} />, color: "bg-pink-100 text-pink-700" },
        { name: "Science", icon: <Lightbulb size={28} />, color: "bg-yellow-100 text-yellow-700" },
        { name: "Technology", icon: <Code size={28} />, color: "bg-green-100 text-green-700" },
        { name: "Romance", icon: <Heart size={28} />, color: "bg-red-100 text-red-700" },
        { name: "World Literature", icon: <Globe size={28} />, color: "bg-purple-100 text-purple-700" },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore by Category</h2>
                <p className="text-gray-600 mb-10">Browse books from your favorite genres and discover new interests.</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer border border-gray-100"
                        >
                            <div className={`p-4 rounded-full ${cat.color} mb-3 group-hover:scale-110 transition-transform`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-base font-semibold text-gray-800 group-hover:text-teal-600 transition">
                                {cat.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategorySection;

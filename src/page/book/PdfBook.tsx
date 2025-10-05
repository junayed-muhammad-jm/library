import LinkData from "@/data/Link";
import BookCarts from "@/page/book/BookCarts";

function PdfBook() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-8">
      <h2 className="text-2xl font-semibold text-center text-[#595635] mb-8">
        📚 PDF BOOKS LIBRARY 
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {LinkData.map((target) => (
          <BookCarts key={target.id} target={target} />
        ))}
      </div>
    </div>
  );
}

export default PdfBook;

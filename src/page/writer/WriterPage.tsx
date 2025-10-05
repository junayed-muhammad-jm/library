import WriterData from "@/data/writer.data";
import Writer from "@/page/writer/Writer";


function WriterPage() {
    return ( <div>
         <div>
            <section className="min-h-screen py-12 px-6 bg-[#f2f2f2]">
                {/* Section Title */}
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 ">
                        লেখক ফরাম 
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base  border-b-2 pb-2">
                     লেখকদের  বইগুলোর সুন্দর সংগ্রহ উপভোগ করুন
                    </p >
                </div>

                {/* Books Grid */}
                <div
                    className="
                    max-w-7xl mx-auto
                    grid 
                    
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-5 
                    gap-8">


                        {WriterData.map(writer => <Writer key={writer.id} writer={writer}/>)}
                        



                </div>
            </section>
        </div>

    </div> );
}

export default WriterPage;
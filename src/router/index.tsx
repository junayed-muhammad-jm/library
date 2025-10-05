import FrontLayout from "@/components/layout/FrontLayout";
import AboutPage from "@/page/about/AboutPage";
import PdfBook from "@/page/book/PdfBook";
import HomePage from "@/page/home";
import WriterPage from "@/page/writer/WriterPage";
import { createBrowserRouter } from "react-router";




const router = createBrowserRouter([
    {
        path: "/",
        Component: FrontLayout,
        children: [
            {
                index: true,
                Component: HomePage

            },
            {
                path: "/about",
                Component: AboutPage
            },
            {
                path : "/writer",
                Component : WriterPage
            },
            {
                path : "/pdf-book",
                Component : PdfBook
            }

        ]
    }

])

export default router;
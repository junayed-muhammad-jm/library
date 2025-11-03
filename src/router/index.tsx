import LoginPage from "@/components/auth/LoginPage";
import RegisterPage from "@/components/auth/RegisterPage";
import FrontLayout from "@/components/layout/FrontLayout";
import CategorySection from "@/components/module/CategorySection";
import ContactPage from "@/components/module/ContactPage";
import BookLibrary from "@/page/book/BookLibrary";

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
                path: "/category-section",
                Component: CategorySection
            },
            {
                path: "/writer",
                Component: WriterPage
            },
            {
                path: "/pdf-book",
                Component: PdfBook
            },
            {
                path: "/contact",
                Component: ContactPage
            },
            {
                path: "/login",
                Component: LoginPage
            },
            {
                path: "/register",
                Component: RegisterPage
            },

            {
                path: "/library",
                Component: BookLibrary
            }

        ]
    }

])

export default router;
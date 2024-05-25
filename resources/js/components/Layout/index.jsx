import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container mx-auto">{children}</div>
            </main>
        </>
    );
}

export default Layout;

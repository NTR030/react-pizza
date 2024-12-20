import Header from "./Header";

function Layout({children}){
    return(
        <>
            <Header />
            <main className="flex-1 w-[90%] mx-auto border-x-2">

            {children}
            </main>
        </>
    )
}

export default Layout

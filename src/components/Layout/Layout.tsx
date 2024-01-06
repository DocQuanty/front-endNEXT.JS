import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <main >
        <Header />
        {children}
        {/* <Footer/> */}
    </main>
};
export default Layout;
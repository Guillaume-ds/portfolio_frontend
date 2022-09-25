import Head from 'next/head';
import NavBar from './navBar';
import Favicon from "../assets/images/favicon.ico"

const Layout = ({ title, content, children, activeNavName }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta 
                    name="description" 
                    content={content} />
                <link rel="shortcut icon" href={Favicon.src} type="image/x-icon" />
            </Head>

            <NavBar activeNavName={activeNavName}/>

            {children}

        </>
    );
};

Layout.defaultProps = {
    title: 'Guillaume de Surville | Portoflio',
    content: "Guillaume de Surville's portfolio. ML and Data scientist student at HEC Paris and Polytechnique. "
}

export default Layout;

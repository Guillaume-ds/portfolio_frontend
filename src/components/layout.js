import Head from 'next/head';
import NavBar from './navBar';

const Layout = ({ title, content, children, activeNavName }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta 
                    name="description" 
                    content={content} />
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

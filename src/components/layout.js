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
                <script src="https://kit.fontawesome.com/9267fd29be.js" crossorigin="anonymous"></script>
            </Head>

            <NavBar activeNavName={activeNavName}/>

            {children}

        </>
    );
};

Layout.defaultProps = {
    title: 'Apokl',
    content: "Guillaume de Surville's portfolio. ML and Data scientist student at HEC Paris and Polytechnique. "
}

export default Layout;

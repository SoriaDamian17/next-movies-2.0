import React from 'react';
import Link from 'next/link';

class HeaderComponent extends React.Component {

    render() {
        // debugger;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Next.Js</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto justify-content-end">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Home</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a className="nav-link">About</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/portfolios"><a className="nav-link">Portfolio</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blogs"><a className="nav-link">Blogs</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cv"><a className="nav-link">Cv</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default HeaderComponent;
import React from 'react';
import BaseLayout from '../components/layouts/baselayout';
import CardComponent from '../components/shared/card';
import {Link} from '../routes'
import axios from 'axios';

import "../styles/main.scss";

export default class Portfolios extends React.Component {
    
    static async getInitialProps() {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=94949e42&s=batman&page=1`);
        const movies = response.data.Search;

        return { movies: movies.splice(0, 10) };
    }

    renderMovies(movies) {
        return movies.map( (p, index) => {
            return (
                <div className="col-md-2 m-t-10" key={index}>
                    <Link route={`/portfolio/${p.Title}`}>
                        <a><CardComponent {...p} /></a>
                    </Link>
                </div>
            )
        })
    }

    render() {
        const { movies } = this.props;
        return(
            <BaseLayout>
                <div className="container-fluid">
                    <div className="row mt-5">
                    {this.renderMovies(movies)}
                    </div>
                </div>
            </BaseLayout>
        );
    }
}
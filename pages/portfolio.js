import React from 'react';
import BaseLayout from '../components/layouts/baselayout';
import { withRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import "../styles/main.scss";
class Portfolio extends React.Component {

    static async getInitialProps({query}) {
        const posttitle = query.title;
        let portfolio = {};

        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=94949e42&t=${posttitle}&plot=full`);
            portfolio = response.data;
        } catch(err) {
            console.error(err);
        }

        return { portfolio };
    }

    render() {
        const { portfolio } = this.props;
        return(
            <BaseLayout>
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center ">
                        <img src={portfolio.Poster} className="rounded img-fluid img-thumbnail"/>
                    </div>
                    <div className="col">
                        <h1>{portfolio.Title}</h1>
                        <h4>Year: {portfolio.Year}</h4>
                        <h4>Genre: {portfolio.Genre}</h4>
                        <p>
                            {portfolio.Plot}
                        </p>
                        <h4>Web: <Link href={portfolio.Website}><a target="_blank">click me</a></Link></h4>
                    </div>
                </div>
            </div>
                
            </BaseLayout>
        );
    }
}

export default withRouter(Portfolio);
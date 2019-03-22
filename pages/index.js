import React from 'react';
import BaseLayout from '../components/layouts/baselayout';
import SuperComponents from '../components/superComponents';

import "../styles/main.scss";

export default class extends SuperComponents {

    constructor() {
        super();
        this.state = {
            title: 'I am Index Page'
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <BaseLayout>
                <h1 className="example">Hello world</h1>
            </BaseLayout>
        );
    }
}
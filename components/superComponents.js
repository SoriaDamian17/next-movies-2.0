import React from 'react';
import BaseLayout from '../components/layouts/baselayout';

class SuperComponent extends React.Component {

    constructor() {
        super();
        this.someVariable = 'Just some variable';
    }

    alertName(title) {
        this.someVariable = title;
    }

    render() {
        return (
            <BaseLayout>
                <h1>Hello About</h1>
            </BaseLayout>
        );
    }
}

export default SuperComponent;
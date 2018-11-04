import React, {Component} from 'react';
import PropTypes from "prop-types";
import QRCode from 'qrcode.react';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {

        return (
            <div>
                <QRCode value="jedaan " />
            </div>
        );

    }
}

Home.propTypes = {}

export default Home;

import React, {Component} from "react"
require('./logo.less')

export default class Logo extends Component {

    render() {

        return (
            <div className="row components-logo">
                <img src="/static/images/logo.png" width="40" alt="" className="-col-auto"/>
                <h1 className="caption">Music Player Build By React</h1>
            </div>
        )
    }
}
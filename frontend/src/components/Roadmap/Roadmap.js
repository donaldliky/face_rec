import React, { Component } from 'react';
import JsonData from '../../json-server/db.json';

// import axios from 'axios';
// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/seller";


class Roadmap extends Component {
    state = {
        data: {},
        roadmapData: []
    }
    componentDidMount() {
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             roadmapData: res.data.roadmapData
        //         })
        //         // console.log(this.state.data)
        //     })
        //     .catch(err => console.log(err))
        this.setState({
            data: JsonData['roadmap'],
            roadmapData: JsonData['roadmap']['roadmapData'],
        })
    }
    render() {
        return (
            <section className="top-seller-area p-0 mb-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro m-0">
                                <div className="intro-content">
                                    {/* <span>{this.state.data.preHeading}</span> */}
                                    <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.roadmapData.map((item, idx) => {
                        if (idx % 2 == 0) {
                            return (
                                <div className="row items">
                                    <div className="col-12 col-sm-6 col-lg-6 item">
                                    </div>
                                    <div key={`ts_${idx}`} className="col-12 col-sm-6 col-lg-6 item roadmap-border-left">
                                        {/* Single Roadmap */}
                                        <div className="process-number-wrapper">
                                            <div class="number-timeline">{item.timeline}</div>
                                            <div class="process-number-title">{item.timelineTitle}</div>
                                            <div class="process-dot progress"></div>
                                        </div>
                                        <div className="card no-hover roadmap-card-right">
                                            <div className="single-seller d-flex align-items-center">
                                                <div class="process-triangle"></div>
                                                {/* Roadmap Info */}
                                                <div className="seller-info ml-3">
                                                    <h4 className="seller mb-2">{item.title}</h4>
                                                    {item.action.map((action_item, idx) => {
                                                        return (<span>{action_item.title}</span>);
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="row items">
                                    <div key={`ts_${idx}`} className="col-12 col-sm-6 col-lg-6 item roadmap-border-right">
                                        <div className="card no-hover roadmap-card-left">
                                            <div className="single-seller d-flex align-items-center">
                                                <div class="process-triangle flipped"></div>
                                                {/* Roadmap Info */}
                                                <div className="seller-info ml-3">
                                                    <h4 className="seller mb-2">{item.title}</h4>
                                                    {item.action.map((action_item, idx) => {
                                                        return (<span>{action_item.title}</span>);
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Roadmap */}
                                        <div className="process-number-wrapper flipped">
                                            <div class="number-timeline">{item.timeline}</div>
                                            <div class="process-number-title">{item.timelineTitle}</div>
                                            <div class="process-dot progress"></div>
                                        </div>

                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6 item">
                                    </div>
                                </div>
                            );
                        }

                    })}
                </div>
            </section>
        );
    }
}

export default Roadmap;
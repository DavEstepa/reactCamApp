import React, { Component } from "react";

export default class ListImages extends Component {
    render(){
        return(
            <div>{Object.values(this.props.data).map(
                image => {
                    return(
                        <img src={image.image64} />
                    );
                }
            )}</div>
        );
    }
};
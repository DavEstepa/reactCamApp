import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';

export default class ListImages extends Component {
    render(){
        return(
            <div
            style={{
                backgroundColor: '#333',
                borderColor: '#333'
            }}
            >
                <ImageGallery items={Object.values(this.props.data).map(
                    image => {
                        return(
                            {original: image.image64, thumbnail: image.image64, originalTitle: image.imageName, description: image.legend}
                            );
                        }
                        )
                    }/>
            </div>
        );
    }
};
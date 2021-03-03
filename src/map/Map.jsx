import React, { Component } from 'react';
import { Map as GoogleMap, GoogleApiWrapper, Marker } from 'google-maps-react';

import './map.scss';

class Map extends Component {
    render() {
        const {currentPosition} = this.props;
        return <div className="map-component">
            <GoogleMap
                    google={this.props.google} 
                    onGoogleApi
                    initialCenter={currentPosition}
                    >
                      <Marker />
                    </GoogleMap>
        </div>;
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAQbF-zpr-SYF1p7klSG9ApxMM4a-vLxd8',
})(Map);
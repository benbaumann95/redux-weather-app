import React from 'react';

class GoogleMap extends React.Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        //weather maps api comes back as lon for longitude
        lng: this.props.lon
      }
    });
  }

  render() {
    //this.refs.map
    return <div ref="map" />
  }
}

export default GoogleMap;

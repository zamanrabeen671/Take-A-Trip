import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import fakeData from '../../fake api/FakaData';
import map from '../../images/Map.png';
import VehicleInfo from '../VehicleInfo/VehicleInfo';
import './SelectDestination.css';
// import { Map, InfoWindow, Marker, GoogleApiWrapper, google, onInfoWindowClose, onMarkerClick } from 'google-maps-react';

const SelectDestination = () => {
    const [selection, setSelection] = useState(true);
    const [destination, setDestination] = useState({
        pickForm: '',
        pickTo: ''
    });
    const { id } = useParams();
    console.log(id)
    const vehicle = fakeData.find(info => info.id == id);
    console.log('vehicle', vehicle);
    const { register, handleSubmit, watch, errors } = useForm();
    // console.log(watch("example"));
    const handleDestination = (e) => {
        console.log(e.target.name, e.target.value)
        const newDestination = { ...destination };
        newDestination[e.target.name] = e.target.value;
        setDestination(newDestination);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        {selection ?
                            <div className="destination-card">
                                <form className="ship-form" onSubmit={() => handleSubmit(setSelection(!selection))}>
                                    <p>Pick From</p>
                                    < input name="pickForm" onBlur={handleDestination} ref={register({ required: true })} placeholder="pick from" />
                                    {errors.pickUpForm && <span className="error">Name is required</span>}
                                    <p>Pick To</p>
                                    < input name="pickTo" onBlur={handleDestination} ref={register({ required: true })} placeholder="pick to" />
                                    {errors.pickUpForm && <span className="error">Name is required</span>}

                                    <input className="submit-btn" type="submit" value="submit"/>
                                </form>
                            </div> :

                            <div className="destination-container">
                                <div className="destination-div">
                                    <p>{destination.pickForm}</p>
                                    <p>{destination.pickTo}</p>
                                </div>
                                <div className="vehicle-info">
                                    <VehicleInfo vehicle={vehicle} key = {id}></VehicleInfo>
                                </div>
                            </div>

                        }
                    </div>
                    <div className="col-lg-8 col-sm-12 col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3280951562897!2d90.36650911429808!3d23.806929392532837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1616252904848!5m2!1sen!2sbd"  className="map-style" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectDestination;
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyBAvyD4SWQoQYmHahMSXM8eYSm9cZmwBxk")
// })(SelectDestination)
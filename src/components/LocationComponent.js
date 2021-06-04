import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <div>
                    <br></br>
                <h2 class="text-center" id="location">Location</h2>
                    <br></br>
                <iframe title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.588436312121!2d-86.80598028478879!3d36.12788331295373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88646418ce2f0509%3A0x5d53b499c263d401!2s2323%2021st%20Ave%20S%2C%20Nashville%2C%20TN%2037212!5e0!3m2!1sen!2sus!4v1619211757479!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    loading="lazy"
                />
            </div>
        );
    }
}

export default Location;
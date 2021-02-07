import React from 'react';


function CheckList(){
    return (
        <div className="container">
            <input className="form-check-input" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label className="form-check-label" for="vehicle1"> I have a bike</label><br/>
            <input className="form-check-input" type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label className="form-check-label" for="vehicle2"> I have a car</label><br/>
            <input className="form-check-input" type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
            <label className="form-check-label" for="vehicle3"> I have a boat</label><br></br>
        </div>
    );
}

export default CheckList;
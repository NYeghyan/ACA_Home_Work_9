import React from 'react';

const dogsName = {
    select: "Select from List",
    akita: "Akita",
    beagle : "Beagle",
    dalmatian : "Dalmatian",
    germanshepherd: "German Shepherd",
    husky: "Husky",
    labrador : "Labrador",
    pug : "Pug",
}



const select = Object.entries(dogsName).map(([key, value]) => 
<option key = {key} value={key}>{value}</option>
)

export default select
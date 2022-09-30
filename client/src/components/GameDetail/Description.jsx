import React from 'react';

const Description = (props) => {

let descri= ""
const htmlObjecto = document.getElementById("description")
if(props.des){
descri=props.des;
htmlObjecto.innerHTML = descri;
}
    return (
        <div id="description"></div>
    );
};

export default Description;
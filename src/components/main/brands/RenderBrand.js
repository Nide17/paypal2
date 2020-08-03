import React from 'react';

const RenderBrand = (props) => {
    
    return (
        <div key={props.brand.id}>
            <img src={props.brand.src} alt={props.brand.alt} className="brand-image" />
        </div>
    );
}
export default RenderBrand;

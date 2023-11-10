import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToy = () => {
    const singleToy = useLoaderData();
    const {_id, image} = singleToy;
    return (
        <div>
           {_id}
              {image}
        </div>
    );
};

export default SingleToy;
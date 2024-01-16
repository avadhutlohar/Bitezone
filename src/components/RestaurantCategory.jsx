import React from 'react'

const RestaurantCategory = ({data}) => {

    console.log(data);
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default RestaurantCategory
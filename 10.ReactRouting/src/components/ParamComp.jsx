import React from 'react'
import { useParams } from 'react-router'

const ParamComp = () => {
  
//    const param = useParams();
   const {id} = useParams();

  return (
    <div>
     {/* Params: {param.id}; */}
     Params: {id};

    </div>
  )
}

export default ParamComp

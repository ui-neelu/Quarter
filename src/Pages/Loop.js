import React from 'react'

export const Loop  = () => {
  const columns = [
    { 
      title: 'Transaction Name / ID',
      headign: 'bom',
    },
    { 
      title: 'Transaction Name / ID',
    },
    { 
      title: 'Transaction Name / ID',
    }
]
 const abc =  columns.map((item, index) =>
  <div> 
     <p>{item.title}</p>
     <h1>{item.headign}</h1>
  </div>
 )
  return (
     <div> {abc}</div>
  )
}

export default Loop;
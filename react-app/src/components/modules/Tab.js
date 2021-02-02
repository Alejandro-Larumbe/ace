import React, { useState } from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function TabComponent(props) {
  const {
    value,
    handleChange,
    options
  } = props

  useState(() => {

  }, [value])

  // console.log('options', options)

  return (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {/* {options.map(each => { */}
          {/* // console.log(each.value)
          // console.log(each.label)
          // return ( */}
            <Tab value={1}  label={'Pieces'} />
            <Tab value={2}  label={'Books'} />
        {/* //   )
        // })} */}
      </Tabs>
    </>
  )
}

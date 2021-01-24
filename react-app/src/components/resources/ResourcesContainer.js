import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitleView } from '../../store/actions/ui'
import UploadResource from './UploadResource';
import ViewResources from './ViewResources';
import { getResources } from './actions';

export default function ResourcesContainer() {
  const id = localStorage.getItem('user_id')
  const dispatch = useDispatch();
  const [resources, setResources] = useState()

  useEffect(() => {
    (async () => {
      const data = await dispatch(getResources(id))
      setResources(data)
    }
    )()
  }, [ dispatch ]);
  return (
    <>
      {/* <UploadResource /> */}
      <ViewResources resources={resources} dispatch={dispatch} setResources={setResources}/>

    </>
  )
}

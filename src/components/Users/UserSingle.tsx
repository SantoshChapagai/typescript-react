import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../../features/usersSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const UserSingle=()=>{
const dispatch = useAppDispatch();
const user = useAppSelector((state)=>state.users.data);
const {userId} = useParams();

useEffect(()=>{
  if(user.length===0)dispatch(getUsers());
}, [dispatch, user])

// return a table of users album data, user table has 3 fields and we are only interested in id and title.

  return(
  <div>
   
  </div>
  );

}


export default UserSingle;
import React, { useEffect, useState } from "react";
import s from "./News.module.css";

const News = (props) => {
  return(
    <div>news</div>
  )

  // let [editMode, setEditMode] = useState(false);
  // let [status, setStatus] = useState(status);

  // useEffect(() => setStatus(status), [status]);

  // const activateEditMofe = () => setEditMode(true);

  // const deActivateEditMofe = () => {
  //   setEditMode(false);    
  // };
  // const onStatusChenge = (e) => setStatus(e.currentTarget.value);

  // return (
  //   <div>
  //     <div>
  //       My status:
  //       <span onDoubleClick={activateEditMofe}>{status || "add status"}</span>
  //     </div>
  //     <div>
  //       Enter status
  //       <input          
  //         autoFocus={true}
  //         onBlur={deActivateEditMofe}         
  //       ></input>
  //       <button onClick={onStatusChenge}>send</button>
  //     </div>
  //   </div>
  // );
};

export default News;

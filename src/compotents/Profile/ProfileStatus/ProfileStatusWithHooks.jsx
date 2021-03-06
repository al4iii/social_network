import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => setStatus(props.status), [props.status]);

  const activateEditMofe = () => setEditMode(true);
  const deActivateEditMofe = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChenge = (e) => setStatus(e.currentTarget.value);
  return (
    <div>
      {!editMode && (
        <div>
          My status:
          <span onDoubleClick={activateEditMofe}>{props.status || "--"}</span>
        </div>
      )}
      {editMode && (
        <div>
          Enter status
          <input
            onChange={onStatusChenge}
            autoFocus={true}
            onBlur={deActivateEditMofe}
            value={status}
          ></input>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

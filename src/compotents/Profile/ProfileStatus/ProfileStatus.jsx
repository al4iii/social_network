import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMofe: false,
  };

  activateEditMofe = () => {
    this.setState({
      editMofe: true,
    });
  }
    deActivateEditMofe = () => {
      this.setState({
        editMofe: false,
      })
    }
  render() {
    return (
      <div>
        {!this.state.editMofe && (
          <div>
            Status:
            <span onDoubleClick={this.activateEditMofe.bind(this)}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMofe && (
          <div>
            Enter status<input autoFocus={true} onBlur={this.deActivateEditMofe.bind(this)} value={this.props.status}></input>
          </div>
        )}
      </div>
    );
  }
}
  
export default ProfileStatus;

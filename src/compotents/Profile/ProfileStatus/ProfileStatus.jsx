import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMofe: false,
    status: this.props.status,
  };

  activateEditMofe = () => {
    this.setState({
      editMofe: true,
    });
  };
  deActivateEditMofe = () => {
    this.setState({
      editMofe: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChenge = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({});
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMofe && (
          <div>
            My status:
            <span onDoubleClick={this.activateEditMofe || "No status"}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMofe && (
          <div>
            Enter status
            <input
              onChange={this.onStatusChenge}
              autoFocus={true}
              onBlur={this.deActivateEditMofe}
              value={this.state.status}
            ></input>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

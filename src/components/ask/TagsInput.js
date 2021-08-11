import React from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

class InputTag extends React.PureComponent {
  constructor() {
    super();
    this.tagsinput = React.createRef();
    this.state = {
      tags: [],
      tag: ""
    };
  }
  handleChange = tags => {
    this.setState({ tags });
  };
  handleInputChange = value => {
    if (value.length > 8) {
      return this.tagsinput.current.accept();
    }
    this.setState({ tag: value });
  };
  render() {
    return (
      <TagsInput
        onlyUnique
        ref={this.tagsinput}
        inputProps={{
          placeholder: "Add some tags"
        }}
        value={this.state.tags}
        onChange={this.handleChange}
        inputValue={this.state.tag}
        onChangeInput={this.handleInputChange}
        id="tags"
      />
    );
  }
}

export default InputTag;

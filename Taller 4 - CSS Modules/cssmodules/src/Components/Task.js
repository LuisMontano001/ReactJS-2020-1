class Task extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
      return (
      <div id={this.state.index}>
          <h4>{this.props.name} </h4>
          <h5>{this.props.date}</h5>
          <input type="checkbox"/>
      </div>
      );
    }
  }
export default Task
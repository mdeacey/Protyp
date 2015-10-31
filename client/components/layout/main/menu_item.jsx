class MenuItem extends React.Component {
  render() {
    return (
      <div draggable="true" {...this.props}
        style={{backgroundColor : this.props.bgcolor, width:this.props.width, height: this.props.height}}>
      </div>
    )
  }
}

this.MenuItem = MenuItem

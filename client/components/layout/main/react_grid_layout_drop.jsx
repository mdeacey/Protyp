ReactGridLayoutDrop = React.createClass({
  propTypes: {
    onDrop: React.PropTypes.func
  },

  onDrop(){
    console.log('conchale');
  },

	onEndDrop () {
		console.log('dnd ended');
	}, 
	
  renderGrid() {
    return React.createElement(ReactGridLayout,
      _.extend({
        children: this.props.children,
      })
    );
  },

  render() {
    return <div onDrop={this.onDrop.bind(this)}>
      {this.renderGrid()}
    </div>
  }
})

this.ReactGridLayoutDrop = ReactGridLayoutDrop;

DropPlatter1 = React.createClass({
	getInitialState() {
    return {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {i: i, x: i * 2, y: 0, w: 2, h: 2, add: i === list.length - 1};
      }),
      counter: 0
    };
  },
	
  propTypes: {
    onDrop: React.PropTypes.func
  },

  onDrop(){
    console.log('conchale');
  },
	
  onDrag (){
		this.onDrag();
    console.log('dragging');
  },
	
  onDragStart(){
    console.log('drag_start');
  },
	
  onDragStop(){
    console.log('drag_stopped');
  },
	
	addItem (i, x, y) {
		console.log(i, x, y, 'addItem');
		this.setState({
      items: this.state.items.concat({
        i: i,
        x: x,
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      counter: this.state.counter + 1
    });
	}, 
	
  renderGrid() {
    return React.createElement(ReactGridLayout,
      _.extend({
        children: this.props.children,
      })
    );
  },

  render() {
    return <div 
			onDrop={this.onDrop.bind(this)} 
			onDragStop={this.onDragStop.bind(this)}>
				{this.renderGrid()}
    </div>
  }
});
this.DropPlatter1 = DropPlatter1
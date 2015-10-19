MainLayout = React.createClass({
  getInitialState() {
    return {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {i: i, x: 0, y: i * 2, w: 3, h: 1};
      }),
      counter: 0,
    };
  },

  onClick: function(){
    console.log(this.state.counter);

    this.setState({
      items: this.state.items.concat({
        i: this.state.counter,
        x: 0,
        y: this.state.items.length * 2, // puts it at the bottom
        w: 3,
        h: 1
      })
    });

    this.state.counter++;
  },

  addElement(item){
    this.state.counter++;
    return <div key={item.i} _grid={{x: item.x, y: item.y, w: item.w, h: item.w}}>{item.i+1}</div>;
  },

  render() {
    this.state.counter = 0;
    return (
      <div>
        <div className="workshop">
          <div className="sidebar">
            <ReactGridLayout className="layout" cols={3} rowHeight={30}>
              {_.map(this.state.items, this.addElement)}
            </ReactGridLayout>

            <button className="btn btn-success" onClick={this.onClick.bind(this)}>+</button>

          </div>
          <div className="main-content">
          </div>
        </div>
      </div>
    )
  }
});

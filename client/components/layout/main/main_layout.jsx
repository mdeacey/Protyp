MainLayout = React.createClass({
  getInitialState() {
    items = Items.find({userId: Meteor.userId()}).fetch();
    counter = items.length;
    if( counter == 0 ){
      items = [0, 1, 2].map(function(i, key, list) {
        return {i: i, x: 0, y: i * 2, w: 3, h: 1};
      });
    }

    return {
      items: items,
      counter: counter,
      workItems: []
    };
  },

  onClick: function(){
    var item = {
      i: this.state.counter,
      x: 0,
      y: this.state.items.length * 2,
      w: 3,
      h: 1,
      userId: Meteor.userId()
    };

    this.setState({
      items: this.state.items.concat(item)
    });

    Items.insert(item);

    this.state.counter++;
  },

  onDrag: function(layout, oldItem, newItem, placeholder, e){
    if(e.clientX > 350){
      toWorkItem = null;
      items = _.reject(this.state.items, function(item){
        if( item.i == newItem.i ){
          toWorkItem = item;
          return true;
        }
      });
      this.setState({
        items: items,
        workItems: this.state.workItems.concat(toWorkItem)
      });
    }
  },

  onDragStop: function(layout, oldItem, newItem, placeholder, e){
    _.each(layout, function(item){
      console.log(item._id);
      Items.update(item._id, {
        $set: {
          x: item.x,
          y: item.y
        }
      });
    });
  },

  onResize: function(layout, oldItem, newItem, placeholder, e){
    _.each(layout, function(item){
      Items.update(item._id, {
        $set: {
          w: item.w,
          h: item.h
        }
      });
    });
  },

  addElement(item){
    this.state.counter++;
    return <div key={item.i} _grid={{x: item.x, y: item.y, w: item.w, h: item.w, _id: item._id}}>{item.i+1}</div>;
  },

  render() {
    this.state.counter = 0;
    return (
      <div>
        <div className="workshop">
          <div className="sidebar">
            <ReactGridLayout className="layout" cols={3} rowHeight={30} onDrag={this.onDrag.bind(this)} onResize={this.onResize.bind(this)} onDragStop={this.onDragStop.bind(this)}>
              {_.map(this.state.items, this.addElement)}
            </ReactGridLayout>

            <button className="btn btn-success" onClick={this.onClick.bind(this)}>+</button>

          </div>
          <div className="main-content">
            <ReactGridLayout className="layout" cols={12} rowHeight={30}>
              {_.map(this.state.workItems, this.addElement)}
            </ReactGridLayout>
          </div>
        </div>
      </div>
    )
  }
});

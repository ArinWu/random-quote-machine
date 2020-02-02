import React, { Component } from 'react';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import { random } from 'lodash';
import { Grid, withStyles } from '@material-ui/core'
import { data } from './components/store'
//nihao
const style = {
  container: {
    // type: 'dark',
    alignItems: 'center',
    display: 'flex',
    height: '100vh'
  },
  Grid: {
    height: '140'
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //if failed show 默认数据
      quotes: [
        {
          "quote": "get faild",
          "author": "吴书琪",
        },

      ],
      //通过index来选择数据
      selectedIndex: null,
      color: null
    }
    this.assignIndex = this.assignIndex.bind(this)
    this.setSelectedIndex = this.setSelectedIndex.bind(this)
  }

  nextClickHandler() {
    console.log("success");
  }

  //可以使用localstoreage其实
  componentDidMount() {
    localStorage.setItem('example_project', 'Randowm Quote Machine');

    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")

      .then(d => d.json())
      .then(quotes => this.setState({ quotes }, this.assignIndex))
      .catch(function (error) {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
          .then(d => d.json())
          .then(quotes => this.setState({ quotes }, this.assignIndex))
          .then(function (error) {
            this.setState(data, this.assignIndex)
          })
      })
  }

  //返回如果有返回这条数据，并更新state
  //每一次会返回不同的数值
  //get是有数据才返回
  get selectedQuote() {
    if (!this.state.quotes.length && !Number.isInteger(this.state.selectedIndex)) {
      return;
    }
    return this.state.quotes[this.state.selectedIndex];
  }

  // Pick a index for get quotes
  //产生index
  setSelectedIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1)
  }
  //更新index
  assignIndex() {
    // let newIndex = this.randomIndexGenerator();
    let newColor = this.randomColorGenerator();
    this.setState({
      selectedIndex: this.setSelectedIndex(),
      color: newColor
    })
  }

  randomColorGenerator = () => {
    let baseColor = Math.floor(Math.random() * 360);
    return { light: "hsl(" + baseColor + ",30%,70%)", dark: "hsl(" + baseColor + ",30%,30%)" };
  }

  render() {
    // let newColor = this.randomColorGenerator(); 
    return (
      <div>
        <Grid className={this.props.classes.container + ' ' + this.props.classes.Grid} id="quote-box" justify="center" container>

          <Grid item xs={12} lg={6} className={this.props.classes.Grid} fixed>

            <QuoteMachine assignIndex={this.assignIndex} selectedQuote={this.selectedQuote} />

          </Grid>
        </Grid>
      </div>
    )
  }

}

export default withStyles(style)(App);

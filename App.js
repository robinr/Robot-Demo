import React, { Component } from 'react';
import * as d3 from 'd3';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
      this._handleKeyDown = this._handleKeyDown.bind(this);
      this.robotxpos = 10;
      this.robotypos = 600;

      this.originx = 10;     // origin
      this.originy = 600;    // origin

      this.originxbound = 600;
      this.originybound = 10;

    }

  componentDidMount() {
    if (this.first) return; this.first = true;
    this.drawChart();
    document.addEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown = (event) => {
    
    switch(event.keyCode) {
      case 82:
           console.log("Pressed R");
           var test = this.robotxpos + 10;
           if (test > this.originxbound) { break; } 
           else { 
               d3.selectAll('#robot').remove();
               this.robotxpos = this.robotxpos + 10;
               d3.selectAll('svg').append('rect')
                        .attr("id", "robot")
                        .attr('x', this.robotxpos)
                        .attr('y', this.robotypos)
                        .attr('width', 10)
                        .attr('height', 10)
                        .attr('stroke', 'black')
                        .attr('fill', 'yellow'); 
                  }
           break;
      case 76:
           console.log("Pressed L");
           var test = this.robotxpos - 10; 
           if (test < this.originx ) { break; }
           else {
               d3.selectAll('#robot').remove();
               this.robotxpos = this.robotxpos - 10;
               d3.selectAll('svg').append('rect')
                        .attr("id", "robot")
                        .attr('x', this.robotxpos)
                        .attr('y', this.robotypos)
                        .attr('width', 10)
                        .attr('height', 10)
                        .attr('stroke', 'black')
                        .attr('fill', 'yellow');
                }
           break;
      case 85:
           console.log("Pressed U");
           var test = this.robotypos - 10;
           if(test < this.originybound) { break; }
           else {
                 d3.selectAll('#robot').remove();
                 this.robotypos = this.robotypos - 10;
                 d3.selectAll('svg').append('rect')
                          .attr("id", "robot")
                          .attr('x', this.robotxpos)
                          .attr('y', this.robotypos)
                          .attr('width', 10)
                          .attr('height', 10)
                          .attr('stroke', 'black')
                          .attr('fill', 'yellow');
                  }
           break;
      case 68:
           console.log("Pressed D");
           var test = this.robotypos + 10;
           if(test > this.originy ) { break; }
           else {
                 d3.selectAll('#robot').remove();
                 this.robotypos = this.robotypos + 10;
                 d3.selectAll('svg').append('rect')
                          .attr("id", "robot")
                          .attr('x', this.robotxpos)
                          .attr('y', this.robotypos)
                          .attr('width', 10)
                          .attr('height', 10)
                          .attr('stroke', 'black')
                          .attr('fill', 'yellow');
                 }
           break;
    }
  }

  drawChart() {
    
  const svg = d3.select("#robot-boundary").append("svg").attr("width", 700).attr("height", 700);
  
  

  svg.append('rect')
  .attr('x', 10)
  .attr('y', 10)
  .attr('width', 600)
  .attr('height', 600)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');

  svg.append('text')
    .style("fill", "green")
    .style("font-size", "14px")
    .attr("dy", ".35em")
    .attr('x',10)
    .attr('y', 620)
    .style("style", "label")
    .text("0,0 origin");

  svg.append('rect')
  .attr("id", "robot")
  .attr('x', this.originx)
  .attr('y', this.originy)
  .attr('width', 10)
  .attr('height', 10)
  .attr('stroke', 'black')
  .attr('fill', 'yellow');

}

  render() {
  return (
    <div id="robot-boundary">        
    </div>

  );
 }

}
 

export default App;

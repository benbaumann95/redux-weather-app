import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

// function average(data) {
//   return data.reduce((previous, number) => {
//     const average = (previous += number/data.length);
//     return Math.round(average)
//   } ,0);
// }

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={100} svgWidth={200} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}

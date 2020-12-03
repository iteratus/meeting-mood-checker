import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import {
  FlexibleXYPlot,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries
} from 'react-vis';
import styles from './Stats.module.scss';
import Header from '../../components/Header/Header';

class Stats extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        session: PropTypes.string
      }).isRequired
    }).isRequired
  };

  render() {
    const {
      match: {
        params: { session }
      }
    } = this.props;

    let allValues = null;

    try {
      allValues = JSON.parse(localStorage.moodCheck);
    } catch {
      allValues = { [session]: {} };
    }

    if (!allValues[session]) {
      allValues[session] = { happy: 0, neutral: 0, sad: 0 };
    } else {
      if (!allValues[session].happy) {
        allValues[session].happy = 0;
      }
      if (!allValues[session].neutral) {
        allValues[session].neutral = 0;
      }
      if (!allValues[session].sad) {
        allValues[session].sad = 0;
      }
    }

    const data = [
      { x: 0, y: allValues[session].happy },
      { x: 1, y: allValues[session].neutral },
      { x: 2, y: allValues[session].sad }
    ];

    const axisStyle = {
      text: { stroke: 'none', fill: '#6b6b76', fontWeight: 600 }
    };
    const xTicks = ['Happy', 'Neutral', 'Sad'];
    const xTicksTotal = xTicks.length;
    const yTicksTotal = Math.max(
      allValues[session].happy,
      allValues[session].neutral,
      allValues[session].sad
    );

    return (
      <>
        <Header />
        Hier steht ein Text. Random BS.
        <div className={styles.stats}>
          <FlexibleXYPlot>
            <HorizontalGridLines style={{ stroke: '#444444' }} />
            <XAxis
              style={axisStyle}
              tickFormat={v => xTicks[v]}
              tickTotal={xTicksTotal}
            />
            <YAxis style={axisStyle} tickTotal={yTicksTotal} />
            <VerticalBarSeries data={data} color="#666666" />
          </FlexibleXYPlot>
        </div>
      </>
    );
  }
}

export default withRouter(Stats);

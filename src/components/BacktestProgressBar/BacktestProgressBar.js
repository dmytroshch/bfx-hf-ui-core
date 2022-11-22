import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useStopwatch } from 'react-timer-hook'
import { pad2 } from '@ufx-ui/utils'
import { Line } from 'rc-progress'
import { useTranslation } from 'react-i18next'

import scssVariables from '../../variables.scss'

import './style.css'

const BacktestProgressBar = ({ percent, startedOn }) => {
  const { t } = useTranslation()

  const { greenColor, backgroundColor } = scssVariables

  const stopWatchParams = useMemo(() => {
    const stopwatchOffset = new Date()
    stopwatchOffset.setMilliseconds(
      stopwatchOffset.getMilliseconds() + (Date.now() - startedOn),
    )

    return {
      offsetTimestamp: stopwatchOffset,
      autoStart: true,
    }
  }, [startedOn])

  const { hours, minutes, seconds } = useStopwatch(stopWatchParams)

  const runnedForValue = `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`

  return (
    <div className='hfui-backtest-progress'>
      <div className='hfui-backtest-progress__time'>
        <span className='hfui-backtest-progress__field'>
          {t('strategyEditor.elapsedTime')}
        </span>
        &nbsp;
        <span className='hfui-backtest-progress__value '>{runnedForValue}</span>
      </div>
      <Line
        className='hfui-backtest-progress__line'
        percent={percent}
        strokeColor={greenColor}
        trailColor={backgroundColor}
      />
      <div className='hfui-backtest-progress__percentage'>
        <span className='hfui-backtest-progress__field'>{t('ui.proceed')}</span>
        &nbsp;
        <span className='hfui-backtest-progress__value '>
          {percent}
          %
        </span>
      </div>
    </div>
  )
}

BacktestProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  startedOn: PropTypes.number.isRequired,
}

export default BacktestProgressBar

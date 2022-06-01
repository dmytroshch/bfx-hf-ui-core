import React, { useEffect, useMemo, useState } from 'react'
import _map from 'lodash/map'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Icon } from 'react-fa'
import { Button as UfxButton } from '@ufx-ui/core'
import Dropdown from '../../ui/Dropdown'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const OTHER_OPTION_VALUE = 'other'

const getStrategyTypesOptions = () => [
  {
    value: 'strategyEditor.strategyTypes.momentum',
    label: 'strategyEditor.strategyTypes.momentum',
  },
  {
    value: 'strategyEditor.strategyTypes.meanReverting',
    label: 'strategyEditor.strategyTypes.meanReverting',
  },
  {
    value: 'strategyEditor.strategyTypes.trendFollowing',
    label: 'strategyEditor.strategyTypes.trendFollowing',
  },
  {
    value: 'strategyEditor.strategyTypes.technicalAnalysis',
    label: 'strategyEditor.strategyTypes.technicalAnalysis',
  },
  {
    value: OTHER_OPTION_VALUE,
    label: 'strategyEditor.strategyTypes.other',
  },
]

const StrategyTypeSelect = ({
  strategy, onSaveAsStrategy, isExecuting, isDisabled,
}) => {
  const [showCustomStrategyTypeInput, setShowCustomStrategyTypeInput] = useState(false)
  const [customTypeValue, setCustomTypeValue] = useState('')
  const [strategyTypeDropdownValue, setStrategyTypeDropdownValue] = useState(null)
  const [strategyTypesOptions, setStrategyTypesOptions] = useState(
    getStrategyTypesOptions(),
  )

  const { i18n, t } = useTranslation()

  const { strategyType } = strategy

  const onSelectStrategyType = (option) => {
    if (option === OTHER_OPTION_VALUE) {
      setStrategyTypeDropdownValue(OTHER_OPTION_VALUE)
      setShowCustomStrategyTypeInput(true)
      return
    }
    const isI18nKey = i18n.exists(option)
    const newStrategy = {
      ...strategy,
      strategyType: isI18nKey ? { i18nKey: option } : { customValue: option },
    }

    onSaveAsStrategy(newStrategy)
  }

  const saveCustomStrategyType = (e) => {
    e.preventDefault()
    if (!customTypeValue) {
      return
    }
    setShowCustomStrategyTypeInput(false)
    setCustomTypeValue('')
    onSaveAsStrategy({
      ...strategy,
      strategyType: { customValue: customTypeValue },
    })
  }

  const onRemoveStrategyType = () => {
    const newStrategy = {
      ...strategy,
      strategyType: null,
    }
    setShowCustomStrategyTypeInput(false)
    setStrategyTypeDropdownValue(null)
    onSaveAsStrategy(newStrategy)
  }

  const strategyTypesOptionsMemo = useMemo(() => {
    return _map(strategyTypesOptions, ({ label: l, value }) => {
      const isI18nKey = i18n.exists(l)
      return { label: isI18nKey ? t(l) : l, value }
    })
  }, [i18n, t, strategyTypesOptions])

  useEffect(() => {
    if (!strategyType) {
      setStrategyTypeDropdownValue(null)
      return
    }
    const { i18nKey, customValue } = strategyType
    if (i18nKey) {
      setStrategyTypeDropdownValue(i18nKey)
      return
    }
    if (customValue) {
      const newOptionsList = [
        { value: customValue, label: customValue },
        ...strategyTypesOptions,
      ]
      setStrategyTypesOptions(newOptionsList)
      setStrategyTypeDropdownValue(customValue)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategyType])

  return (
    <div className='hfui-strategy-options__type-selection item'>
      <div className='hfui-strategy-options__input'>
        <Dropdown
          value={strategyTypeDropdownValue}
          options={strategyTypesOptionsMemo}
          onChange={onSelectStrategyType}
          disabled={isDisabled || isExecuting || showCustomStrategyTypeInput}
          placeholder={isExecuting || isDisabled ? t('ui.notSelected') : ''}
        />
        <p className='hfui-orderform__input-label'>
          {isExecuting || isDisabled
            ? t('strategyEditor.strategyTypeDescriptionDisabled')
            : t('strategyEditor.strategyTypeDescription')}
        </p>
      </div>

      {showCustomStrategyTypeInput && (
        <form
          className='hfui-strategy-options__strategy-type-input'
          onSubmit={saveCustomStrategyType}
        >
          <Input
            type='input'
            onChange={setCustomTypeValue}
            value={customTypeValue}
            placeholder={t('strategyEditor.customStrategyTypeInputPlaceholder')}
          />
          <Button
            label='OK'
            isSubmit
            className='hfui-strategy-options__ok-btn'
          />
        </form>
      )}

      {strategyTypeDropdownValue && !isExecuting && (
        <UfxButton
          onClick={onRemoveStrategyType}
          className='hfui-strategy-options__search-btn'
          minimal
        >
          <Icon name='times' className='search-icon' />
        </UfxButton>
      )}
    </div>
  )
}

StrategyTypeSelect.propTypes = {
  strategy: PropTypes.shape({
    strategyType: PropTypes.shape({
      i18nKey: PropTypes.string,
      customValue: PropTypes.string,
    }),
  }),
  onSaveAsStrategy: PropTypes.func.isRequired,
  isExecuting: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
}

StrategyTypeSelect.defaultProps = {
  strategy: {
    strategyType: null,
  },
  isDisabled: false,
}

export default StrategyTypeSelect

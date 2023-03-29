import React from 'react'
import { Icon } from 'react-fa'

import { defaultCellRenderer } from '../../util/ui'
import AlgoOrderActions from './AlgoOrderActions'

export default ({
  t, getMarketPair, showActions, setMoreInfoGID,
}) => {
  const columns = [
    {
      label: t('table.alias'),
      dataKey: 'alias',
      width: 175,
      flexGrow: 2.5,
      cellRenderer: ({ rowData = {} }) => defaultCellRenderer(rowData.alias || rowData.label),
    },
    {
      label: t('table.created'),
      dataKey: 'createdAt',
      width: 175,
      flexGrow: 1.75,
      cellRenderer: ({ rowData = {} }) => defaultCellRenderer(
        new Date(rowData.createdAt || +rowData.gid).toLocaleString(),
      ),
    },
    {
      label: t('table.lastActive'),
      dataKey: 'lastActive',
      width: 175,
      flexGrow: 1.75,
      cellRenderer: ({ rowData = {} }) => {
        const { lastActive } = rowData
        return defaultCellRenderer(
          lastActive ? new Date(lastActive).toLocaleString() : '-',
        )
      },
    },
    {
      label: t('table.symbol'),
      dataKey: 'args.symbol',
      width: 150,
      flexGrow: 1.5,
      cellRenderer: ({ rowData = {} }) => defaultCellRenderer(getMarketPair(rowData.args?.symbol)),
    },
  ]

  if (showActions) {
    // 'Actions' column
    columns.push({
      dataKey: 'cid',
      width: 170,
      minWidth: 120,
      cellRenderer: (
        { rowData = {} } // eslint-disable-line
      ) => (
        <div className='hfui-aolist__wrapper_actions_container'>
          <div
            className='hfui-aolist__wrapper_more_info'
            onClick={() => setMoreInfoGID(rowData.gid)}
          >
            <Icon
              name='info-circle'
              aria-label='More info'
              onClick={() => { }}
            />
            <span className='more_info_action'>{t('table.moreInfo')}</span>
          </div>
          <AlgoOrderActions key={rowData.gid} order={rowData} />
        </div>
      ),
      disableSort: true,
    })
  }

  return columns
}

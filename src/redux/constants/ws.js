export const SOCKET_STATUS_MAP = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  CONNECTING: 'connecting',
}

export const WS_CONNECTION = {
  OPENED: 2,
  CLOSED: 0,
  CONNECTING: 1,
}

export default {
  SOCKET_ERROR: 'WS_SOCKET_ERROR',
  SEND: 'WS_SEND',
  BUFF_SEND: 'WS_BUFF_SEND',
  CONNECT: 'WS_CONNECT',
  DISCONNECT: 'WS_DISCONNECT',
  CONNECTED: 'WS_CONNECTED',
  DISCONNECTED: 'WS_DISCONNECTED',
  FLUSH_QUEUE: 'WS_FLUSH_QUEUE',

  DATA_AUTH_CONFIGURED: 'WS_DATA_AUTH_CONFIGURED',
  DATA_AUTH_TOKEN: 'WS_DATA_AUTH_TOKEN',
  DATA_WEB_AUTH_SUCCESS: 'WS_DATA_WEB_AUTH_SUCCESS',
  AUTH_API_VALIDATING: 'WS_AUTH_API_VALIDATING',
  DATA_MARKETS: 'WS_DATA_MARKETS',
  DATA_STRATEGY: 'WS_DATA_STRATEGY',
  DATA_REMOVE_STRATEGY: 'WS_DATA_REMOVE_STRATEGY',
  DATA_STRATEGIES: 'WS_DATA_STRATEGIES',
  ADD_STRATEGY_BACKTESTS_LIST: 'WS_ADD_STRATEGY_BACKTESTS_LIST',
  DATA_API_CREDENTIALS_CONFIGURED: 'WS_DATA_API_CREDENTIALS_CONFIGURED',
  UPDATE_API_CREDENTIALS_CONFIGURED: 'WS_UPDATE_API_CREDENTIALS_CONFIGURED',
  DATA_CLIENT_STATUS_UPDATE: 'WS_DATA_CLIENT_STATUS_UPDATE',
  DATA_POSITIONS: 'WS_DATA_POSITIONS',
  DATA_POSITION: 'WS_DATA_POSITION',
  DATA_POSITION_CLOSE: 'WS_DATA_POSITION_CLOSE',
  DATA_BALANCES: 'WS_DATA_BALANCES',
  SET_BALANCES: 'WS_SET_BALANCES',
  DATA_BALANCE: 'WS_DATA_BALANCE',
  SET_BALANCE: 'WS_SET_BALANCE',
  DATA_ORDERS: 'WS_DATA_ORDERS',
  DATA_ORDER: 'WS_DATA_ORDER',
  DATA_ORDER_CLOSE: 'WS_DATA_ORDER_CLOSE',
  DATA_ORDER_CLOSE_ASYNC: 'WS_DATA_ORDER_CLOSE_ASYNC',
  DATA_ALGO_ORDER_STOPPED: 'WS_DATA_ALGO_ORDER_STOPPED',
  DATA_ALGO_ORDER: 'WS_DATA_ALGO_ORDER',
  DATA_ALGO_ORDERS: 'WS_DATA_ALGO_ORDERS',
  DATA_NOTIFICATION: 'WS_DATA_NOTIFICATION',
  CLEAR_ALGO_ORDERS: 'WS_CLEAR_ALGO_ORDERS',

  REMOVE_ALGO_ORDER: 'WS_REMOVE_ALGO_ORDER',
  DATA_ALGO_ORDERS_HISTORY: 'WS_DATA_ALGO_ORDERS_HISTORY',
  SET_ALGO_ORDER_TO_HISTORY: 'WS_SET_ALGO_ORDER_TO_HISTORY',
  REMOVE_ALGO_ORDER_FROM_HISTORY: 'WS_REMOVE_ALGO_ORDER_FROM_HISTORY',

  PURGE_DATA_BACKTEST: 'WS_PURGE_DATA_BACKTEST',

  RESET_DATA_EXECUTION: 'WS_RESET_DATA_EXECUTION',
  AUTH_RESET_DATA: 'WS_AUTH_RESET_DATA',
  EXPORT_STRATEGIES_ON_RESET: 'WS_EXPORT_STRATEGIES_ON_RESET',

  DATA_SYNC_START: 'WS_DATA_SYNC_START',
  DATA_SYNC_END: 'WS_DATA_SYNC_END',

  BACKTEST_EXECUTE: 'WS_BACKTEST_EXECUTE',
  BACKTEST_CANDLE: 'WS_BACKTEST_CANDLE',
  BACKTEST_PROGRESS: 'WS_BACKTEST_PROGRESS',
  BACKTEST_TRADE: 'WS_BACKTEST_TRADE',
  BACKTEST_START: 'WS_BACKTEST_START',
  BACKTEST_RESULTS: 'WS_BACKTEST_RESULTS',
  BACKTEST_STOPPED: 'WS_BACKTEST_STOPPED',
  BACKTEST_STARTED: 'WS_BACKTEST_STARTED',
  BACKTEST_SET_FAVORITE: 'WS_BACKTEST_SET_FAVORITE',
  BACKTEST_REMOVE: 'WS_BACKTEST_REMOVE',
  EXECUTION_LOADING: 'WS_EXECUTION_LOADING',
  EXECUTION_LOADING_GID: 'WS_EXECUTION_LOADING_GID',
  EXECUTION_CONNECTION_LOST: 'WS_EXECUTION_CONNECTION_LOST',
  SET_EXECUTION_RESULTS: 'WS_SET_EXECUTION_RESULTS',
  SET_PRICE_UPDATE: 'WS_SET_PRICE_UPDATE',
  SET_LIVE_EXECUTION_TRADES: 'WS_SET_LIVE_EXECUTION_TRADES',
  SET_PAST_STRATEGIES: 'WS_SET_PAST_STRATEGIES',
  SET_STARTED_LIVE_STRATEGY: 'WS_SET_STARTED_LIVE_STRATEGY',
  SET_STOPPED_LIVE_STRATEGY: 'WS_SET_STOPPED_LIVE_STRATEGY',
  SET_BACKTEST_LOADING: 'WS_SET_BACKTEST_LOADING',
  SET_BACKTEST_TO_HISTORY: 'WS_SET_BACKTEST_TO_HISTORY',
  SET_HISTORY_BACKTEST_ID: 'WS_SET_HISTORY_BACKTEST_ID',
  UPDATE_FAVORITE_PAIRS: 'WS_UPDATE_FAVORITE_PAIRS',

  BUFFER_DATA_FROM_EXCHANGE: 'WS_BUFFER_DATA_FROM_EXCHANGE',

  ALIAS_API_SERVER: 'bfx-hf-server',
  ALIAS_DATA_SERVER: 'bfx-hf-data-server',

  UPDATING_API_KEY: 'WS_UPDATING_API_KEY',

  DATA_ORDER_HIST: 'WS_DATA_ORDER_HIST',
  SET_ORDER_HIST: 'WS_SET_ORDER_HIST',
  RESET_ORDER_HIST: 'WS_RESET_ORDER_HIST',

  SET_USERNAME: 'WS_SET_USERNAME',
}

import _get from 'lodash/get'
import { REDUCER_PATHS } from '../../config'
import t from '../../constants/ws'

const path = REDUCER_PATHS.WS

const EMPTY_OBJ = {}

export default (alias = t.ALIAS_API_SERVER) => (state) => {
  return _get(state, `${path}.socket.${alias}`, EMPTY_OBJ)
}

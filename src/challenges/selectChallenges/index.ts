import selectBase from './select-base'
import selectField from './select-field'
import selectAs from './select-as'
import selectAggregate from './select-aggregate'
import selectDistinct from './select-distinct'
import selectWhere from './select-where'
import selectNull from './select-null'
import selectIn from './select-in'
import selectLike from './select-like'
import whereAndOr from './select-and-or'
import selectLimitOffset from './select-limit-offset'
import selectOrderBy from './select-order-by'
import selectGroupBy from './select-group-by'
import selectUnion from './select-union'
import selectSubquery from './select-subquery'
import selectAllAny from './select-all-any'
import selectCase from './select-case'
import selectHaving from './select-having'
import selectExists from './select-exists'
import selectInnerJoin from './select-inner-join'
import selectLeftJoin from './select-left-join'
import selectFullJoin from './select-full-join'
import selectSelfJoin from './select-self-join'
import selectCrossJoin from './select-cross-join'

const selectChallenges = [
  selectBase,
  selectField,
  selectAs,
  selectAggregate,
  selectWhere,
  selectNull,
  selectIn,
  selectLike,
  whereAndOr,
  selectDistinct,
  selectOrderBy,
  selectGroupBy,
  selectLimitOffset,
  selectUnion,
  selectSubquery,
  selectAllAny,
  selectCase,
  selectHaving,
  selectExists,
  selectInnerJoin,
  selectLeftJoin,
  selectFullJoin,
  selectSelfJoin,
  selectCrossJoin
]

export default selectChallenges

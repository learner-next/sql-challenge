import createTable from './create-table'
import tableConstraints from './table-constraints'
import tableIndex from './table-index'
import insertValues from './insert-values'

const createChallenges = [
  createTable,
  tableConstraints,
  tableIndex,
  insertValues
]

export default createChallenges

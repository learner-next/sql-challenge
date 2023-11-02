import createTable from './create-table'
import dataTypes from './data-types'
import tableConstraints from './table-constraints'
import tableIndex from './table-index'
import insertValues from './insert-values'

const createChallenges = [
  createTable,
  dataTypes,
  tableConstraints,
  tableIndex,
  insertValues
]

export default createChallenges

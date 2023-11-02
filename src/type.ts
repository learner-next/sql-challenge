export type Challenge = {
  /* challenge id */
  id: string
  /* challenge title */
  title: string
  /* challenge content description */
  content: string
  /* challenge difficulty */
  difficulty: number
  /* challenge category */
  category: string
  /* challenge tags */
  tags: string[]
  /* challenge answerSql */
  answerSql: string
  /* challenge author */
  author: string
  /* challenge hit */
  hit?: string
  /* challenge initSql */
  initSql: string
  /* challenge defaultSql */
  defaultSql: string
  /* challenge type */
  type: 'main' | 'custom'
  /* challenge sqlType */
  sqlType: 'create' | 'select' | 'delete' | 'update'
  /* challenge showTableSql */
  showTableSql: string
  /* challenge need run answerSql */
  needRunAnswerSql?: boolean
}

export type SqlResultType = Record<string, string | number>[]

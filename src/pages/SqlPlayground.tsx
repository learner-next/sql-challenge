import SqlEditor from '@/components/common/SqlEditor'
import SqlResult from '@/components/common/SqlResult'
import { useState } from 'react'
import type { Challenge, SqlResultType } from '@/type'

const initSql = `
CREATE TABLE IF NOT EXISTS students (
  id INT AUTOINCREMENT,
  name VARCHAR(256) NOT NULL,
  age INT NOT NULL,
  gender CHAR(4) NOT NULL,
  birthday DATE NULL,
  address VARCHAR(256) NULL,
  PRIMARY KEY (id)
);
INSERT INTO students (name, age, gender, birthday, address)
VALUES ('小明', 20, '男', '1998-12-20', null);
INSERT INTO students (name, age, gender, birthday, address)
VALUES ('小丽', 18, '女', null, '上海市浦东区');
INSERT INTO students (name, age, gender, birthday, address)
VALUES ('小王', 28, '男', '1997-08-11', '北京市海淀区');
INSERT INTO students (name, age, gender, birthday, address)
VALUES ('小李', 36, '男', '1989-02-18', '北京市朝阳区');
`

const challenge: Challenge = {
  id: 'sql-playground',
  title: 'Playground',
  content: 'playground content',
  difficulty: 0,
  category: 'playground',
  tags: ['playground'],
  answerSql: '',
  initSql,
  author: '',
  defaultSql: 'SELECT * FROM students;',
  sqlType: 'select',
  showTableSql: 'SELECT * FROM students;'
}

const SqlPlayground = () => {
  const [userResults, setUserResults] = useState<SqlResultType>([])
  const [errorMessage, setErrorMessage] = useState<string>()
  const onSubmit = (
    _sql: string,
    userResults: SqlResultType,
    _answerResults: SqlResultType,
    message?: string
  ) => {
    setUserResults(userResults)
    setErrorMessage(message)
  }
  const getAllTableResults = (allTableResults: SqlResultType) => {
    setUserResults(allTableResults)
  }
  return (
    <div className="flx my-4 ml-4 p-2">
      <SqlEditor
        challenge={challenge}
        onSubmit={onSubmit}
        getAllTableResults={getAllTableResults}
        className="rounded-md border border-gray-300 p-2"
        editorStyle={{ height: '300px' }}
        sqlDefaultHit="-- students 表已经创建，可以直接使用"
      />
      <SqlResult
        className="mt-2"
        sqlResults={userResults}
        errorMessage={errorMessage}
        type="user"
      />
    </div>
  )
}

export default SqlPlayground

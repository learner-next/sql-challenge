import { FC } from 'react'
import type { QueryExecResult } from 'sql.js'
import { RESULT_STATUS_MAP } from '@/sql/result'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

interface SqlResultProps {
  resultStatus: number
  errorMessage?: string
  sqlResults: QueryExecResult[]
}

const SqlResult: FC<SqlResultProps> = ({
  resultStatus,
  errorMessage,
  sqlResults
}) => {
  return (
    <Card className="h-[420px] w-1/2 rounded-md border border-gray-300 p-2">
      <CardHeader>
        <div className="flex justify-between">
          <div className="text-lg font-bold">执行结果</div>
          <div className="">
            {RESULT_STATUS_MAP[resultStatus as keyof typeof RESULT_STATUS_MAP]}
          </div>
        </div>
      </CardHeader>
      {errorMessage ? (
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {sqlResults[0].columns.map((column, index) => (
                  <TableHead key={index}>{column}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {sqlResults[0].values.map((row, index) => (
                <TableRow key={index}>
                  {row.map((value, index) => (
                    <TableCell key={index}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      ) : (
        <div>❌ 语句错误：{errorMessage}</div>
      )}
    </Card>
  )
}

export default SqlResult

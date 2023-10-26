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
import { ScrollArea } from '@/components/ui/scroll-area'

interface SqlResultProps {
  resultStatus?: number
  errorMessage?: string
  sqlResults: QueryExecResult[]
  type: 'user' | 'system'
  className?: string
}

const SqlResult: FC<SqlResultProps> = ({
  resultStatus,
  errorMessage,
  sqlResults,
  type = 'user',
  className
}) => {
  return (
    <Card
      className={`max-h-[420px] w-full rounded-md border border-gray-300 p-2 ${className}`}
    >
      <CardHeader>
        <div className="flex justify-between">
          <div className="text-lg font-bold">
            {type === 'user' ? '查看执行结果' : '数据表'}
          </div>
          {typeof resultStatus === 'number' && (
            <div className="text-lg font-bold">
              {
                RESULT_STATUS_MAP[
                  resultStatus as keyof typeof RESULT_STATUS_MAP
                ]
              }
            </div>
          )}
        </div>
      </CardHeader>
      {!errorMessage ? (
        <CardContent className="p-2">
          <ScrollArea className="h-[300px]">
            <Table>
              <TableHeader>
                <TableRow>
                  {sqlResults?.[0]?.columns?.map((column, index) => (
                    <TableHead key={index}>{column}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sqlResults?.[0]?.values?.map((row, index) => (
                  <TableRow key={index}>
                    {row.map((value, index) => (
                      <TableCell key={index}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      ) : (
        type === 'user' && <div>❌ 语句错误：{errorMessage}</div>
      )}
    </Card>
  )
}

export default SqlResult

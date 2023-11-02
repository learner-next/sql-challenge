import { FC } from 'react'
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
import type { SqlResultType } from '@/type'

interface SqlResultProps {
  resultStatus?: number
  errorMessage?: string
  sqlResults: SqlResultType
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
          <ScrollArea className="max-h-[300px]">
            <Table>
              <TableHeader>
                <TableRow>
                  {sqlResults?.[0] &&
                    Object.keys(sqlResults?.[0])?.map((column, index) => (
                      <TableHead key={index}>{column}</TableHead>
                    ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {sqlResults?.map((row, index) => (
                  <TableRow key={index}>
                    {Object.keys(row)?.map((key, index) => (
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      <TableCell key={index}>{row?.[key]}</TableCell>
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

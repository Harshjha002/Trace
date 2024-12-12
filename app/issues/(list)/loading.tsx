import { Table } from '@radix-ui/themes'
import {Skeleton} from '@/app/components'

const LoadingIssuePage = () => {
    const issues = [1,2,3,4,5]
  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] rounded-2xl shadow-xl border border-gray-300">
      <Skeleton height='8rem'/>
      {issues.length > 0 ? (
        <Table.Root className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <Table.Header className="bg-[#B590CA] text-white">
            <Table.Row>
              <Table.ColumnHeaderCell className="py-4 px-6 text-left font-semibold">
                Issue
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell py-4 px-6 text-left font-semibold">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell py-4 px-6 text-left font-semibold">
                Created At
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row
                key={issue}
                className="hover:bg-[#F5CAB3] transition-all duration-150"
              >
                <Table.Cell className="py-4 px-6 font-medium text-gray-900">
                <Skeleton/>
                  <div className="block md:hidden mt-1 text-sm text-gray-600">
                  <Skeleton/>
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell py-4 px-6 text-gray-700">
                <Skeleton/>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell py-4 px-6 text-gray-500">
                <Skeleton/>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <div className="text-center py-8">
         <Skeleton/>
        </div>
      )}
    </div>
  )
}

export default LoadingIssuePage

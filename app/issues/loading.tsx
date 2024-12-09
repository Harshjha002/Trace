import { Button, Flex, Link, Table,Text } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IssuesActions from './IssuesActions'

const LoadingIssuePage = () => {
    const issues = [1,2,3,4,5]
  return (
    <div>
       <IssuesActions/>
      {/* Issues Table */}
      {issues.length > 0 ? (
        <Table.Root className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Table.Header className="bg-purple-100">
            <Table.Row>
              <Table.ColumnHeaderCell className="py-3 px-4">Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell py-3 px-4">Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell py-3 px-4">Created At</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row
                key={issue}
                className="hover:bg-purple-50 transition-colors duration-200"
              >
                <Table.Cell className="py-3 px-4 font-medium text-purple-900">
                <Skeleton/>
                  <div className="block md:hidden text-gray-600 text-sm">
                    <Skeleton/>
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell py-3 px-4 text-gray-700">
                <Skeleton/>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell py-3 px-4 text-gray-500">
                <Skeleton/>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <Text className="text-gray-600 text-center">
          No issues found. Start by creating a new issue!
        </Text>
      )}
    </div>
  )
}

export default LoadingIssuePage

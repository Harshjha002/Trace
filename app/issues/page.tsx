import prisma from '@/prisma/client';
import { Table, Text } from '@radix-ui/themes';
import React from 'react';
import delay from 'delay';
import IssuesActions from './IssuesActions';
import IssueStatusBadge from '../components/IssueStatusBadge';

const IssuesPage = async () => {
  // Fetch issues from the database
  const issues = await prisma.issue.findMany();
  await delay(2000); // Simulating a delay for demonstration

  return (
    <div className="space-y-8 p-6 bg-gradient-to-b from-violet-100 to-violet-200 rounded-xl shadow-lg border border-violet-300">
      {/* Actions Section */}
      <IssuesActions />

      {/* Issues Table */}
      {issues.length > 0 ? (
        <Table.Root className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <Table.Header className="bg-violet-200">
            <Table.Row>
              <Table.ColumnHeaderCell className="py-4 px-6 text-gray-700 font-semibold">
                Issue
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell py-4 px-6 text-gray-700 font-semibold">
                Status
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden md:table-cell py-4 px-6 text-gray-700 font-semibold">
                Created At
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row
                key={issue.id}
                className="hover:bg-violet-50 transition-colors duration-200"
              >
                <Table.Cell className="py-4 px-6 font-medium text-gray-900">
                  {issue.title}
                  <div className="block md:hidden mt-1 text-sm text-gray-600">
                    <IssueStatusBadge status={issue.status} />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell py-4 px-6 text-gray-700">
                  <IssueStatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell py-4 px-6 text-gray-500">
                  {new Date(issue.createdAt).toLocaleDateString()}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      ) : (
        <div className="text-center py-6">
          <Text size="4" className="text-gray-600">
            No issues found. Start by creating a new issue!
          </Text>
        </div>
      )}
    </div>
  );
};

export default IssuesPage;

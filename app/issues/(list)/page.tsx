import prisma from '@/prisma/client';
import { Table, Text } from '@radix-ui/themes';
import Link from 'next/link';
import {IssueStatusBadge} from '@/app/components';
import IssuesActions from './IssuesActions';

const IssuesPage = async () => {
  // Fetch issues from the database
  const issues = await prisma.issue.findMany();
  return (
    <div className="space-y-8 p-8 bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] rounded-2xl shadow-xl border border-gray-300">
      {/* Header and Actions Section */}
      <IssuesActions />

      {/* Issues Table */}
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
                key={issue.id}
                className="hover:bg-[#F5CAB3] transition-all duration-150"
              >
                <Table.Cell className="py-4 px-6 font-medium text-gray-900">
                  <Link
                    href={`/issues/${issue.id}`}
                    className="block text-purple-700 font-medium px-3 py-2 rounded-lg transition-transform duration-200 hover:underline hover:text-[#A8D3DA] hover:bg-[#B590CA] hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A8D3DA]"
                  >
                    {issue.title}
                  </Link>
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
        <div className="text-center py-8">
          <Text size="4" className="text-gray-600">
            No issues found. Start by creating a new issue!
          </Text>
        </div>
      )}
    </div>
  );
};

// export const dynamic = 'force-dynamic'
export const revalidate = 0 

export default IssuesPage;

import { IssueStatusBadge } from '@/app/components';
import { Issue } from '@prisma/client';
import ReactMarkdown from 'react-markdown';

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="border-b border-[#B590CA] pb-2">
        <h1 className="text-2xl font-bold text-[#4A4A4A]">{issue.title}</h1>
      </div>

      {/* Metadata */}
      <div className="flex items-center space-x-4 text-sm text-[#4A4A4A]">
        <IssueStatusBadge status={issue.status} />
        <p className="font-medium">{new Date(issue.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Description */}
      <div className="bg-white border border-[#B590CA] rounded-lg p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-[#4A4A4A] mb-2">Description</h2>
        <ReactMarkdown className="prose text-[#4A4A4A]">
          {issue.description || 'No description provided.'}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default IssueDetails;

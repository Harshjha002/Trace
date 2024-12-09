import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const EditIssueButton = ({ issueId }: { issueId: number }) => {
    return (
        <>
            <Button className="w-full bg-[#B590CA] hover:bg-[#A8D3DA] text-white py-2 px-4 rounded-lg">
                <Pencil2Icon className="inline mr-2" />
                <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
            </Button>
        </>
    );
};

export default EditIssueButton;

import { Pencil2Icon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const EditIssueButton = ({ issueId }: { issueId: number }) => {
    return (
        <>
            <Button>
                <Pencil2Icon className="inline mr-2" />
                <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
            </Button>
        </>
    );
};

export default EditIssueButton;

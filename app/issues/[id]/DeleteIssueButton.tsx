"use client"
import { AlertDialog, Button, Flex } from '@radix-ui/themes'

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
        <Button color='red'>
            Delete Issue
        </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
            <AlertDialog.Title>
                Confirm Deletion
            </AlertDialog.Title>
            <AlertDialog.Description>
                Are You Sure you want to delte this issue?This action cannot be undone.
            </AlertDialog.Description>
            <Flex mt="4" gap='4'>
                <AlertDialog.Cancel>
                    <Button color='gray' variant='soft'>Cancle</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                    <Button color='red'>Delete Issue</Button>
                </AlertDialog.Action>
            </Flex>
        </AlertDialog.Content>

        </AlertDialog.Root>
    )
}

export default DeleteIssueButton

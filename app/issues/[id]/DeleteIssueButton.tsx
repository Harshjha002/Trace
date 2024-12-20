"use client"
import { Spinner } from '@/app/components'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
    const [error,setError]= useState(false)
    const [isDeleting,setIsDeleting]= useState(false)
    const router = useRouter()
    const handleDeleteIssue = async () => {
        try {
            setIsDeleting(true)
            await axios.delete(`/api/issues/${issueId}`);
            router.push('/issues');
            router.refresh();
        } catch (error) {
            setIsDeleting(false)
            setError(true)
        }
    }
    return (
        <>
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button color='red' disabled={isDeleting}>
                    Delete Issue
                    {isDeleting && <Spinner/>}
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
                        <Button color='red' onClick={handleDeleteIssue}>
                            Delete Issue
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
        <AlertDialog.Root open={error}>
            <AlertDialog.Content>
                <AlertDialog.Title>
                    Error
                </AlertDialog.Title>
                <AlertDialog.Description>
                    This error could not be deleted
                </AlertDialog.Description>
                <Button color='gray' variant='soft' mt="3" onClick={() => setError(false)}>Ok</Button>
            </AlertDialog.Content>
        </AlertDialog.Root>
        </>
    )
}

export default DeleteIssueButton

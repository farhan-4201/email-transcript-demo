"use server";
import { mockEmails } from '@/data'

export default async function GetAllEmailsAction(): Promise<[]> {
    return mockEmails as []
}
"use server";

import { ClassifyEmailResponse } from "@/types";
import GetAllEmailsAction from "./GetAllEmailsAction";
import issueClassificationService from "@/services/issueClassificationService"
const IssueClassificationService = new issueClassificationService();

export default async function ClassifyIssueAction(emailId: number): Promise<ClassifyEmailResponse | null> {
    const emails = await GetAllEmailsAction();
    const email = emails.find((e: any) => e.id === emailId);
    if (email) {
        const response = await IssueClassificationService.classifyEmail(email);
        return response;
    }
    return null;
}
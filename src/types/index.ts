export type Email = {
    id: number;
    subject: string;
    content: string;
};

export type ClassifyEmailResponse = {
    id?: number;
    issue: Issue | null;
    duration: number;
    model: string;
}

export type Issue = {
    reasoning: string;
    class: string;
    responsible_party: string;
    reason: string;
    details: string;
}
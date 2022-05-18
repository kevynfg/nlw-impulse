export interface FeedbackCreateData {
    type: string
    comment: string
    screenshot?: string
    id?: string
}

export interface FeedbackCreateDatabase {
    type: string
    comment: string
    screenshot?: string
    id?: string
}

export interface FeedbacksRepository {
    create: (feedback: FeedbackCreateData) => Promise<any>
}
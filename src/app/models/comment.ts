export interface Comment {
    id: number,
    parentCommentId: number | null,
    ownerId: number,
    txt: string,
    createdAt: Date | string,
    deletedAt: Date | null
}

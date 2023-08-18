import { AnyObject } from "../base"

export namespace FeedbackService {
	export interface Feedback {
		id: number
		type: string
		data: AnyObject
		creator: AnyObject
		viewed: true
		updated_at: string
		created_at: string
	}
}

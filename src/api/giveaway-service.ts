export namespace GiveawayService {
	export interface Giveaway {
		id: number
		title: string
		description: string
		image: string
		link_to_project: string
		prize_description: string
		link_to_join: string
		start_date: string
		end_date: string
		updated_at: string
		created_at: string
	}

	export interface Params {
		limit: number
		offset: number
	}
}

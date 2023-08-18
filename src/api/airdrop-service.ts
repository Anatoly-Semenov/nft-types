export namespace AirdropService {
	export interface Item {
		createdAt: string
		description: string
		id: number
		image: string
		name: string
		startAt: string
		status: Status
		updatedAt: string
	}

	export type Status = "WHITELIST_STARTS"
}

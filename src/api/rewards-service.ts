export namespace RewardsService {
	export interface Reward {
		id: number
		name: string
		amount: number
		currency?: string
		image?: string
		link?: string
		description?: string
		startedAt: string
		endedAt: string
		createdAt: string
	}

	export interface Response {
		link: string
		date: string
		list: Reward[]
	}

	export interface GetListQuery {
		date?: string
	}

	export interface CreateBody {
		name: string
		amount: number
		currency?: string
		image?: string
		link?: string
		description?: string
		startedAt: string
		endedAt?: string
	}
}

export namespace ReferralService {
	export type Users = User[]

	export interface User {
		user: UserData
		achievements: number
		games: number
		balance: number
		points: number
	}

	export interface UserData {
		id: number
		displayedName: string | null
		walletAddress: string
		avatar: string | null
	}

	export interface Total {
		users: number
		balance: number
		achievements: number
	}
}

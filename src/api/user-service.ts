export namespace UserService {
	export interface SocialProfile {
		id: string
		name?: string
		email?: string
		avatar?: string
	}

	export interface User {
		id: string
		walletAddress: string
		solanaAccount: string | null
		displayedName?: string
		nonce?: string
		roles?: string
		email?: string
		discord?: SocialProfile
		twitter?: SocialProfile
		epicGames?: SocialProfile
		steam?: SocialProfile
		updatedAt?: string
		createdAt?: string
	}

	export interface UserWallet {
		id: string
		wallet: string
		is_verified: boolean
		updatedAt: string
		createdAt: string
		user?: User
	}

	export interface VerifyWalletBody {
		signature: string
		nonce: string
	}

	export interface UserBalance {
		amount: number
	}
}

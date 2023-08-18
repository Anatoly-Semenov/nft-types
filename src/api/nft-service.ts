export namespace NftService {
	export interface Nft {
		chain: string
		count: number
		description: string
		id: number
		image: string
		name: string
		shortDescription: string
		createdAt: string
		expiredAt: string
		updatedAt: string
		claimed?: number
		status?: NftStatus
	}

	export type NftStatus = "locked" | ""

	export interface ValidateBody {
		walletAddress?: string
	}

	export interface ValidateResponse {
		achievementTypeId: number
		collectionId: number
		mintAccount: string
		provider: string
		signature: string
		userProviderId: string
	}
}

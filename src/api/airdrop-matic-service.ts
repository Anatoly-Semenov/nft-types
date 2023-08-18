export namespace AirdropMaticService {
	// Route: /airdrop-matic/send
	export type ResponseSend = {
		transactionHash: string
	}

	// Route: /airdrop-matic/is-allowed
	export type ResponseIsAllowed = {
		isAllowed: boolean
	}
}

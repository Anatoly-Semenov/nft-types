export namespace JobService {
	export interface JobGames {
		gameId: number
		gameTitle: string
		progressStatus: string
	}

	export interface Job {
		progressId: number
		progressStatus: string
		progressStart: number
		progressCurrent: number
		progressEnd: number
		progressLeftMs: number
		progressType: string
		progressReason: string
	}

	export interface Contract {
		id: number
		gameId: number
		address: string
		title: string
		isCoin: boolean
	}
}

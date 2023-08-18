import { AchievementService } from "./achievement-service"
import { GameService } from "./game-service"
import { NftService } from "./nft-service"

export namespace ProfileService {
	// Route: /profile/me
	export interface Me {
		balance: number
		points: number
		level: number
		image: string
	}

	// Route: /profile/game/:id
	export interface GameDetails {
		name: string
		spend: number
		earn: number
		points: number
		roi: number | null
	}

	// Route: /profile/game/:id/nfts
	export type GameNft = NftService.Nft & {
		achievements: AchievementService.Achievement[]
	}

	// Route: /profile/game/:id/achievements
	export type ResponseGameAchievements = {
		game: GameService.Game
		achievements: AchievementService.Achievement[]
	}

	// Route: /profile/achievements
	export type ResponseAchievements = Achievement[]

	export type Achievement = {
		game: GameService.Game
		total_achievements: number
		mint_status: "success" | "fail"
		achievements: ProfileAchievement[]
	}

	export type AchievementStatus = "NOT_CLAIMED" | "CLAIMED" | "DISABLED"

	export type ProfileAchievement = AchievementService.Achievement & {
		status: AchievementStatus
		scores?: number
	}

	export type AvailableAchievement = ProfileAchievement & {
		game: GameService.Game
	}

	export type ResponseAvailableAchievements = AvailableAchievement[]

	// Route: /profile/games
	export interface ResponseGames {
		total: {
			earning: number
			spending: number
		}
		items: Game[]
		count: number
	}

	export interface Game {
		game: GameService.Game
		stats: {
			spend: number
			earn: number
			points: number
			roi: number | null
		}
		isActive: boolean
	}

	export interface GamePreview {
		id: number
		title: string
		logo: string
		players: number
		earnedAchievements: number
		achievements: number
	}

	export type GamePreviewResponse = GamePreview[]

	export interface PublicProfile {
		id: number
		name: string | null
		wallet: string
		total_achievements: number
		total_games: number
		avatar: string | null
	}

	export interface PublicAchievements extends ResponseAchievements {}

	export interface LeaderboardItem {
		user_id: number
		avatar: string | null
		name: string | null
		wallet: string
		earned_achievements: number
		total_achievements: number
		games: number
		points: number
	}

	export type LeaderboardData = LeaderboardItem[]

	export type LeaderboardDays = 1 | 7 | 30 | 360

	export interface LeaderboardFilter {
		by_days: LeaderboardDays
	}

	export interface LeaderboardResponse {
		data: LeaderboardData
		meta: {
			total_items: number
			total_pages: number
			current_page: number
		}
	}
}

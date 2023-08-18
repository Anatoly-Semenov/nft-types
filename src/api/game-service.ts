import { Estimation } from "./base"
import { SocialService } from "./social-service"

export namespace GameService {
	export interface Game {
		id: number
		title: string
		logo: string
		stats: GameStats
	}

	export interface GameDetail extends Game {
		min_investment_token: number
		token_title: string
		release_date: string
		chain_title: string
		chains: string
		description: string
		in_use: true
		site: string
		image: string
		background_image: string
		is_upcoming: boolean
		code: string
		genre: string
		links?: Link[]
	}

	export interface GameStats {
		new_users: number
		profit: number
		avg_roi: number
		risk_level: GameRiskLevel
		players_count?: number
		twitter?: UpcomingGameCommunicate | null
	}

	export type GameRiskLevel = "high" | "medium" | "low"

	export enum GameRiskLevelEnum {
		HIGH = "high",
		MEDIUM = "medium",
		LOW = "low"
	}

	export interface GameDto {
		title: string
		description: string
		genre: string
		logo: string
		site: string
		min_investment_token: number
		token_title: string
		release_date: string
		chain_title: string
		in_use: boolean
		is_upcoming: boolean
		code: string
	}

	export interface UpcomingGame {
		id: number
		communities: {
			twitter: UpcomingGameCommunicate | null
			discord: UpcomingGameCommunicate | null
			telegram: UpcomingGameCommunicate | null
		}
		chains: string /* as Chain[].join(",") */
		ino_date: null | string
		ino_date_estimation: Estimation
		ino_status: "Over" | "Not over" | "Ongoing"
		ido_date: null | string
		ido_status: "Over" | "Not over" | "Ongoing"
		release_status: "Released" | "Not released"
		ido_date_estimation: Estimation
		is_upcoming: true
		links: string[]
		logo: string
		marketplace: null | string
		release_date: string
		release_date_estimation: Estimation
		site: string
		title: string
		token_title: string
		is_on_chain?: boolean
		genre?: string | null
	}

	export interface UpcomingGameDetail {
		id: number
		title: string
		image: string
		chains: string /* as Chain[].join(",") */
		pictures: string[]
		video: string[]
		backers: string
		ido_platforms: string
		release_status: string
		site: string
		is_upcoming: true
		logo: string
		token: string
		ido_date: null
		ido_date_estimation: Estimation
		ido_status: "Over" | "Not over" | "Ongoing"
		marketplace: string
		ino_date: string
		ino_date_estimation: Estimation
		ino_status: "Over" | "Not over" | "Ongoing"
		release_date: null
		release_date_estimation: Estimation
		links: Link[]
		genre?: string | null
	}

	export interface Link {
		id: number
		game_id: number
		channel: string
		service: SocialService.StatsServiceName
	}

	export interface UpcomingGameCommunicate {
		date: string
		members_count: number
		members_growth: number
		members_growth_percentage: number
		members_online_count: number
	}

	export interface Additional {
		pictures: string[]
		video: string[]
		platforms?: string[]
		marketplace?: string
		token?: string
		token_address?: string
		token_price?: string
		backers?: string[]
		ido_date?: string
		ino_date?: string
	}

	export enum GameCode {
		BOMB_CRYPTO = "BOMB_CRYPTO",
		AXIE_INFINITY = "AXIE_INFINITY",
		PEGAXY = "PEGAXY",
		CYBALL = "CYBALL",
		METAGEAR = "METAGEAR",
		DRUNK_ROBOTS = "DRUNK_ROBOTS"
	}

	// Charts
	export interface ChartEarning {
		date: string
		amount: number
	}

	export interface ChartUsers {
		active: string
		date: string
		new: string
	}

	export interface ChartNft {
		buyer_count: string
		date: string
		nft_count: number
	}

	// Tables
	export interface TablePrice {
		class_name: string
		color: string
		price: number
	}

	export interface TableTopHolders {
		address: string
		count: number
	}

	export interface TokenContract {
		id: number
		title: string
		address: string
		market_cap: number
		market_cap_delta: number
		price: number
		price_delta: number
		image: string
		ticker: string
	}

	export interface SpendingAndEarningsItem {
		users_count: number
		avg_roi: number
		percent_in_profit: number
		earnings: number // Сумма заработка
		spending: number // Сумма трат
		started_at: string
		ended_at: string
	}

	export interface PaginationChart<T> {
		daily?: T[]
		weekly?: T[]
		monthly?: T[]
	}

	export type SpendingAndEarnings = PaginationChart<SpendingAndEarningsItem>

	export type AverageEarnings = Record<
		string,
		{ usersCount: number; average: number }
	>

	export type SpendersAndEarners = Record<
		string,
		{ earning: number; spending: number; earners: number; spenders: number }
	>

	export type NftTrades = PaginationChart<NftTradesItem>

	export interface NftTradesItem {
		amount: number
		count: number
		date: string
	}

	export type NtfBurnAndMint = PaginationChart<NftTradesItem>

	export interface NtfBurnAndMintItem {
		burn: number
		mint: number
		date: string
	}

	export type UsersByDate = Record<
		string,
		{ active_users: number; new_users: number }
	>
}

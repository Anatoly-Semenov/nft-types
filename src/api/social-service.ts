export namespace SocialService {
	export type StatsServiceName = "TWITTER" | "DISCORD" | "TELEGRAM" | "UNKNOWN"

	export interface StatsInfo {
		id: number
		game_id: number
		channel_id: number
		members_count: number
		members_online_count: number
		posts_count: number
		reposts_count: number
		likes_count: number
		comments_count: number
		date: string
	}

	export interface Stats extends StatsInfo {
		members_growth: number
		members_growth_percentage: number
		members_online_growth: number
		members_online_growth_percentage: number
		posts_growth: number
		posts_growth_percentage: number
		reposts_growth: number
		reposts_growth_percentage: number
		likes_growth: number
		likes_growth_percentage: number
		comments_growth: number
		comments_growth_percentage: number
	}

	export interface Channel {
		id: number
		game_id: number
		service: ServiceList
		channel: string
	}

	export interface ChannelBody {
		channel: string
		service: ServiceList
	}

	export enum ServiceList {
		TWITTER = "TWITTER",
		DISCORD = "DISCORD",
		TELEGRAM = "TELEGRAM",
		MEDIUM = "MEDIUM",
		EPIC_GAMES = "EPIC_GAMES",
		STEAM = "STEAM",
		UNKNOWN = "UNKNOWN"
	}
}

export type Chain =
	| "BSC"
	| "ETH"
	| "Polygon"
	| "Solana"
	| "AVAX"
	| "Elrond"
	| "Klaytin"
	| "Enjin"
	| "Immutable-X"
	| "Fantom"

export type Estimation = "YEAR" | "QUARTER" | "DAY" | "MONTH"

export interface ResponseList<T> {
	items: T[]
	count: number
}

export type SortType = "DESC" | "ASC"

export interface Meta {
	total_items: number
	total_pages: number
	current_page: number
}

export interface ResponseListMeta<T> {
	data: T[]
	meta: Meta
}

export interface ListQuery<Sort = object, Filter = object> {
	sort?: Filter
	filter?: Sort
	q?: string
	limit?: string
	page?: string
}

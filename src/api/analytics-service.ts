export namespace AnalyticsService {
	export type ScholarType = "text" | "coin" | "percents" | "address"

	export interface ScholarColumn {
		title: string
		currentValue: string
		deltaValue: string
		isVisible: boolean
		id: string
		type: ScholarType
		units: null | string
	}

	export interface Scholar {
		columns: ScholarColumn[]
	}

	export type ScholarResponse = Scholar[]
}

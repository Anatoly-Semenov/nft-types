export namespace AchievementService {
	export enum RuleOperandEnum {
		EQUAL = "eq",
		NOT_EQUAL = "not",
		GT = "gt",
		LT = "lt",
		GTE = "gte",
		LTE = "lte"
	}

	export type RuleOperand = "eq" | "not" | "gt" | "lt" | "gte" | "lte"

	export interface Rule {
		key: string
		operand: RuleOperand
		value: string
		handler: string
	}

	export interface Achievement {
		id: number
		name: string
		description: string
		image: string
		rules: Rule[]
		createdAt: string
		updatedAt: string
	}

	export type StatusValue = "waiting" | "completed" | "failed" | "stopped"

	export enum StatusValueEnum {
		WAITING = "waiting",
		COMPLETED = "completed",
		FAILED = "failed",
		STOPPED = "stopped"
	}

	export interface Status {
		id: number
		userId: number
		status: StatusValue
		startedAt: string
		finishedAt: string
	}

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

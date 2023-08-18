export namespace SettingsService {
	export interface Setting {
		id: number
		key: SettingsKey
		value: string
		createdAt: Date
		updatedAt: Date
	}

	export enum SettingsKey {
		REWARDS_LEARN_MORE_LINK = "REWARDS_LEARN_MORE_LINK"
	}

	export interface CreateSettingBody {
		key: SettingsKey
		value: string
	}

	export interface UpdateSettingBody extends Omit<CreateSettingBody, "key"> {}
}

export interface IAppConfig {
	accesses: string; // Get accesses list
	access: string; // Get specific access informations | {id}
	accessesCategories: string; // Get accesses categories
	accessesCategory: string; // Get specific accesses category informations | {id}
	members: string; // Get members list
	member: string; // Get specific member informations | {uuid}
	memberFind: string; // Find a member by his Discord ID or his SteamID64
	branches: string; // Get branches list
	branch: string; // Get specific branch informations | {id}
	accreditations: string; // Get accreditations list
	accreditation: string; // Get specific accreditation informations | {id}
	platforms: string; // Get platforms list
	platform: string; // Get specific platform informations | {id}
	ranks: string; // Get ranks list
	rank: string; // Get specific rank informations | {id}
	punishments: string; // Get punishments list
	punishment: string; // Get specific punishment informations | {id}
	subscriptions: string; // Get subscriptions list
	subscription: string; // Get specific subscription informations | {id}
}
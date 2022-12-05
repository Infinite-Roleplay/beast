import { IAppConfig } from "./interfaces/app.interface";
import { Configuration } from "./config.util";
import fs from 'fs';

export class API {
	private _appConfig: IAppConfig;
	private _envConfig: Configuration;

	constructor(){
		this._appConfig = JSON.parse(fs.readFileSync('./src/config/app.config.json').toString());
		this._envConfig = new Configuration();
	}

	accessesUrl(): string {
		return this._envConfig.urls.main + this._appConfig.accesses;
	}

	accessUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.access.replace("{id}", id);
	}

	accessesCategoriesUrl(): string {
		return this._envConfig.urls.main + this._appConfig.accessesCategories;
	}

	accessesCategoryUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.accessesCategory.replace("{id}", id);
	}

	membersUrl(): string {
		return this._envConfig.urls.main + this._appConfig.members;
	}

	memberUrl(uuid: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.member.replace("{uuid}", uuid);
	}

	memberFindUrl(): string {
		return this._envConfig.urls.main + this._appConfig.memberFind;
	}

	branchesUrl(): string {
		return this._envConfig.urls.main + this._appConfig.branches;
	}

	branchUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.branch.replace("{id}", id);
	}

	accreditationsUrl(): string {
		return this._envConfig.urls.main + this._appConfig.accreditations;
	}

	accreditationUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.accreditation.replace("{id}", id);
	}

	platformsUrl(): string {
		return this._envConfig.urls.main + this._appConfig.platforms;
	}

	platformUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.platform.replace("{id}", id);
	}

	ranksUrl(): string {
		return this._envConfig.urls.main + this._appConfig.ranks;
	}

	rankUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.rank.replace("{id}", id);
	}

	punishmentsUrl(): string {
		return this._envConfig.urls.main + this._appConfig.punishments;
	}

	punishmentUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.punishment.replace("{id}", id);
	}

	subscriptionsUrl(): string {
		return this._envConfig.urls.main + this._appConfig.subscriptions;
	}

	subscriptionUrl(id: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.subscription.replace("{id}", id);
	}

	authorizationUrl(uuid: string = "NULL"): string {
		return this._envConfig.urls.main + this._appConfig.authorization.replace("{uuid}", uuid);
	}

	formatRole(): string {
		return this._envConfig.urls.main + this._appConfig.formatRole;
	}

	formatChannel(): string {
		return this._envConfig.urls.main + this._appConfig.formatChannel;
	}
}
export type Repository = {
	id: number;
	name: string;
	svn_url: string;
	description: string;
	visibility: string;
	language: string | null;
	stargazers_count: number;
	license: string;
	forks_count: number;
	open_issues_count: number;
	updated_at: string;
};

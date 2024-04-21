export type Experience = {
	company?: string,
	name?: string,
	jobTitle?: string,
	location?: string,
	dates: string,
	description: string[]
	source?: string,
	avatarSource?: string,
	avatar?: string,
};

// export type Experience = {
// 	company: string,
// 	jobTitle: string,
// 	dates: string,
// 	description: string[]
// 	source: string,
// 	avatarSource: string,
// 	avatar: string,
// };

export type Education = {
	name: string,
	location: string,
	dates: string,
	description: string[]
	source: string,
	avatarSource: string,
	avatar: string,
};

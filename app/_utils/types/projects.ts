export type Project = {
	id: string,
	title: string,
	description: (string | string[])[],
	image: string[],
	links: {
		githubLink: string,
		demoLink?: string,
	},
	tags: string[],
	date: string,
	inspiration?: (string | { text: string, link: string })[],
};

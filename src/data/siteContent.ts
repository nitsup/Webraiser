export const projects = [
	{
		title: 'Project title goes here',
		category: 'Concept preview',
		description: 'Replace with a verified client project and an approved description.',
		variant: 'editorial',
	},
	{
		title: 'Project title goes here',
		category: 'Concept preview',
		description: 'Replace with a verified client project and an approved description.',
		variant: 'commerce',
	},
	{
		title: 'Project title goes here',
		category: 'Concept preview',
		description: 'Replace with a verified client project and an approved description.',
		variant: 'portfolio',
	},
] as const;

export const services = [
	{ number: '01', title: 'Business websites', description: 'A clear, confident home for your business, built around what your customers need to know.' },
	{ number: '02', title: 'E-commerce websites', description: 'Considered storefront experiences that make your products easy to explore and understand.' },
	{ number: '03', title: 'Portfolio websites', description: 'A distinctive way to bring your work, practice and point of view together.' },
	{ number: '04', title: 'Landing pages', description: 'Focused pages that give a launch, campaign or single offer the space it deserves.' },
	{ number: '05', title: 'Custom web applications', description: 'Purpose-built digital tools shaped around a specific workflow or customer need.' },
	{ number: '06', title: 'Redesign & customization', description: 'A thoughtful refresh or tailored improvements to a website you already have.' },
] as const;

export const templates = [
	{ number: '01', name: 'The Editorial', description: 'A calm, type-led direction for stories and ideas.', variant: 'editorial' },
	{ number: '02', name: 'The Collection', description: 'A considered starting point for a product-led brand.', variant: 'commerce' },
	{ number: '03', name: 'The Portfolio', description: 'A simple canvas for independent work and practice.', variant: 'portfolio' },
] as const;

export const processSteps = [
	{ number: '01', title: 'Discover', description: 'We learn about your business, your audience and what success should feel like.' },
	{ number: '02', title: 'Plan', description: 'We shape the scope, priorities and structure before moving into design.' },
	{ number: '03', title: 'Design', description: 'We develop a clear visual direction and refine the details together.' },
	{ number: '04', title: 'Develop', description: 'We turn the approved design into a responsive, carefully built website.' },
	{ number: '05', title: 'Deliver', description: 'We review the finished experience and prepare it for its next chapter.' },
] as const;

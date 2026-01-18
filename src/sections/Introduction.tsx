import banner from "../assets/banner.jpeg";

const Introduction = () => {
	return (
		<div>
			<div className='flex flex-col gap-2 p-6 border-2'>
				<p className='text-xs'>README.md</p>
				<p className='text-lg font-semibold'>Hey, this is us 👋</p>
				<img src={banner} alt='banner-image' />
				<p>
					An illustration showing a variety of differently themed
					Octocats. Monuments from different cities are indicated in
					the background like the Space Needle, Berlin Fernsehturm and
					Transamerica Pyramid. Yes, we are building GitHub on GitHub.
					In fact, we’ve been doing this since October 19th, 2007.
					That's when we made our first commit. Since then we pushed
					over 2.5 million commits, opened over 1 million issues,
					submitted roughly 650k pull requests across 4357
					repositories from over 50 countries. 🤯 But that's just us.
					We are proud to be part of the work of millions of
					developers, companies and robots across the solar system. 🪐
					Yes, Robots!
				</p>
				<p>🍿 An interconnected community</p>
				<p>
					The open source community is the 💗 heart of GitHub and
					fundamental to how we build software today. See for
					yourself:
				</p>
				<ul>
					<li>
						GitHub Sponsors helped support more than 5k individuals
						and projects around the world 🌍
					</li>
					<li>
						Open source projects on GitHub received a stunning 218
						million contributions 🚀 in the last year alone
					</li>
					<li>
						Every minute a developer creates a new release 🏄 for a
						public project on GitHub
					</li>
				</ul>
				<p>
					Now that we are talking about the important things, ☝️ are
					you contributing to open source? Yes? Okay, you rock! 🎸 If
					not, we can help you get started! Open source software is
					made by people just like you. Learn more about how to
					contribute.
				</p>
				<p>🦦 Contributing to the ecosystem</p>
				<p>
					We contribute to the tools 🔧 we rely on to build and run
					GitHub, while also maintaining 🧙‍♂️ our own open source
					projects like:
				</p>
				<ul>
					<li>GitHub CLI - A command line tool for GitHub</li>
					<li>
						GitHub Desktop - A visual approach to using Git with
						GitHub
					</li>
					<li>
						Git Large File Storage - A Git extension for versioning
						large files
					</li>
					<li> Primer - The GitHub design system</li>
				</ul>
				<p>👓 Appendix</p>
				<p>
					See what's next on our public roadmap ✨ and let us know if
					you have any suggestions. 🙇‍♂️ Oh, and by the way, we are
					always hiring talented, passionate people to join our team.
					🙌
				</p>
				<p>"Tell me more, I can't get enough!"</p>
			</div>
		</div>
	);
};

export default Introduction;

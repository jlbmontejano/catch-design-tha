import type { Repository } from "../types";
import { FaRegStar } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { SiTrailforks } from "react-icons/si";
import { VscIssues } from "react-icons/vsc";
import Tab from "./Tab";

type RepoCardProps = {
	repo: Repository;
};

const RepoCard = ({ repo }: RepoCardProps) => {
	return (
		<div className='flex flex-col rounded border-2 p-4 gap-2'>
			<div className='flex gap-2 items-center'>
				<a
					className='text-blue-700 font-semibold'
					target='_blank'
					href={repo.svn_url}>
					{repo.name}
				</a>
				<Tab text={repo.visibility} />
			</div>
			<p>{repo.description}</p>
			<div className='flex gap-2'>
				<span>Lang: {repo.language}</span>
				<div className='flex items-center gap-1'>
					<FaRegStar aria-hidden={true} />
					<span>{repo.stargazers_count}</span>
				</div>
				<div className='flex items-center gap-1'>
					<GoLaw aria-hidden={true} />
					<span>{repo.license || "N/A"}</span>
				</div>
				<div className='flex items-center gap-1'>
					<SiTrailforks aria-hidden={true} />
					<span>{repo.forks_count}</span>
				</div>
				<div className='flex items-center gap-1'>
					<VscIssues aria-hidden={true} />
					<span>{repo.open_issues_count}</span>
				</div>
				<span>
					Updated at: {new Date(repo.updated_at).toLocaleDateString()}
				</span>
			</div>
		</div>
	);
};

export default RepoCard;

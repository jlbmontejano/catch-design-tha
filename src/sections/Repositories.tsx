import { useEffect, useState } from "react";
import type { Repository } from "../types";
import RepoCard from "../shared/RepoCard";

const Repositories = () => {
	const [repositories, setRespositories] = useState<Repository[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const fetchRepos = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(
					`https://api.github.com/orgs/github/repos?sort=name&per_page=10&page=${currentPage}`,
				);

				if (!response.ok) {
					setIsError(true);
					console.log("Error in response!");
				}

				const data = await response.json();

				console.log(data[1]);

				const simplifiedData: Repository[] = data.map(
					({
						name,
						svn_url,
						visibility,
						description,
						language,
						stargazers_count,
						license,
						forks_count,
						open_issues_count,
						updated_at,
					}) => ({
						name,
						svn_url,
						description,
						visibility,
						language: language || "N/A",
						stargazers_count,
						license: license?.name || "N/A",
						forks_count,
						open_issues_count,
						updated_at,
					}),
				);

				setRespositories(simplifiedData);
			} catch (error) {
				setIsError(true);
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRepos();
	}, [currentPage]);

	const handlePrevious = () => {
		setCurrentPage(prev => prev - 1);
	};

	const handleNext = () => {
		setCurrentPage(prev => prev + 1);
	};

	if (isError) {
		return (
			<div>
				<p className='text-red-500'>Error, please try again</p>
			</div>
		);
	}

	return (
		<div className='text-gray-400'>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className='flex flex-col gap-6'>
					{repositories.map(repo => (
						<RepoCard repo={repo} />
					))}
				</div>
			)}
			<div className='flex justify-center gap-4 pt-4'>
				<button
					className='disabled:opacity-40'
					disabled={currentPage === 1 || isLoading}
					onClick={handlePrevious}
					type='button'>
					Previous
				</button>
				<button onClick={handleNext} type='button'>
					Next
				</button>
			</div>
		</div>
	);
};

export default Repositories;

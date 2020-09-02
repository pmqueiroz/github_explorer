import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues, RepoLoading } from './styles';

interface RepositoryParams {
	repository: string;
}

interface Repository {
	full_name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	owner: {
		login: string;
		avatar_url: string;
	};
}

interface Issue {
	id: number;
	title: string;
	html_url: string;
	user: {
		login: string;
	};
}

const Repository: React.FunctionComponent = () => {
	const [repository, setRepository] = useState<Repository | null>(null);
	const [issues, setIssues] = useState<Issue[]>([]);
	const { params } = useRouteMatch<RepositoryParams>();

	useEffect(() => {
		api.get(`repos/${params.repository}`).then(response => {
			setRepository(response.data);
		});

		api.get(`repos/${params.repository}/issues`).then(response => {
			setIssues(response.data);
		});
	}, [params.repository]);

	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>

			{repository ? (
				<RepositoryInfo>
					<header>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name.toLowerCase()}</strong>
							<p>{repository.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repository.stargazers_count}</strong>
							<span>Stars</span>
						</li>
						<li>
							<strong>{repository.forks_count}</strong>
							<span>Forks</span>
						</li>
						<li>
							<strong>{repository.open_issues_count}</strong>
							<span>Opened Issues</span>
						</li>
					</ul>
				</RepositoryInfo>
			) : (
				<RepoLoading>
					<header>
						<div className="img" />
						<div>
							<div className="strong" />
							<div className="p" />
						</div>
					</header>
					<ul>
						<li>
							<div className="strong" />
							<span>Stars</span>
						</li>
						<li>
							<div className="strong" />
							<span>Forks</span>
						</li>
						<li>
							<div className="strong" />
							<span>Opened Issues</span>
						</li>
					</ul>
				</RepoLoading>
			)}

			<Issues>
				{issues.map(issue => (
					<a key={issue.id} href={issue.html_url}>
						<div>
							<strong>{issue.title}</strong>
							<p>{issue.user.login}</p>
						</div>

						<FiChevronRight size={30} />
					</a>
				))}
			</Issues>
		</>
	);
};

export default Repository;

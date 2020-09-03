import React, { useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, IssueInfo, Label } from './styles';

interface RepositoryParams {
	repository: string;
	issueId: string;
}

interface IssueResponse {
	number: number;
	title: string;
	html_url: string;
	user: {
		login: string;
		avatar_url: string;
	};
	state: string;
	comments: number;
	labels: [
		{
			name: string;
			color: string;
		},
	];
	body: string;
}

const Issue: React.FunctionComponent = () => {
	const [issue, setIssue] = useState<IssueResponse | null>(null);
	const { params } = useRouteMatch<RepositoryParams>();

	useEffect(() => {
		api.get(`repos/${params.repository}/issues/${params.issueId}`).then(
			response => {
				setIssue(response.data);
			},
		);
	}, [params.repository, params.issueId]);

	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to={`/explorer/${params.repository}`}>
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>

			{issue && (
				<IssueInfo>
					<header>
						<img src={issue.user.avatar_url} alt={issue.user.login} />
						<div>
							<strong>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={issue.html_url}
								>
									{issue.title}
								</a>
							</strong>
							<strong>#{issue.number}</strong>
							<div className="labels">
								{issue.labels.map(label => (
									<Label bgColor={`#${label.color}`}>
										{label.name}
									</Label>
								))}
							</div>
						</div>
					</header>
					<ul>
						<li>
							<strong>{issue.comments}</strong>
							<span>Comments</span>
						</li>
						<li>
							<strong>{issue.state}</strong>
							<span>Status</span>
						</li>
					</ul>
					<div className="issueBody">
						<ReactMarkdown source={issue.body} />
					</div>
				</IssueInfo>
			)}
		</>
	);
};

export default Issue;

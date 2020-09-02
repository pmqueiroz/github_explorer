import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

const Dashboard: React.FunctionComponent = () => {
	const [newRepo, setNewRepo] = useState('');
	const [inputError, setInputError] = useState('');
	const [repositories, setRepositories] = useState<Repository[]>(() => {
		const storagedRepositories = localStorage.getItem(
			'@GithubExplorer:repositories',
		);

		if (storagedRepositories) {
			return JSON.parse(storagedRepositories);
		}

		return [];
	});

	useEffect(() => {
		localStorage.setItem(
			'@GithubExplorer:repositories',
			JSON.stringify(repositories),
		);
	}, [repositories]);

	async function handleAddRepository(
		event: FormEvent<HTMLFormElement>,
	): Promise<void> {
		event.preventDefault();

		if (!newRepo) {
			setInputError('Insert author/repo to find one');
			return;
		}

		try {
			const response = await api.get<Repository>(`repos/${newRepo}`);

			const repository = response.data;

			setRepositories([...repositories, repository]);
			setNewRepo('');
			setInputError('');
		} catch (err) {
			setInputError('Repo not found :/ insert author/repo to find one');
		}
	}

	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore Repos on Github</Title>

			<Form hasError={!!inputError} onSubmit={handleAddRepository}>
				<input
					value={newRepo}
					onChange={e => setNewRepo(e.target.value)}
					placeholder="Insert a repository name eg. pmqueiroz/proffy"
				/>
				<button type="submit">Search</button>
			</Form>

			{inputError && <Error>{inputError}</Error>}

			<Repositories>
				{repositories
					.map(repository => (
						<Link
							key={repository.full_name}
							to={`/explorer/${repository.full_name.toLowerCase()}`}
						>
							<img
								src={repository.owner.avatar_url}
								alt={repository.owner.login}
							/>
							<div>
								<strong>{repository.full_name}</strong>
								<p>{repository.description}</p>
							</div>

							<FiChevronRight size={30} />
						</Link>
					))
					.reverse()}
			</Repositories>
		</>
	);
};

export default Dashboard;

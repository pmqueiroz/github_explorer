import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
	repository: string;
}

const Repository: React.FunctionComponent = () => {
	const { params } = useRouteMatch<RepositoryParams>();
	return (
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>

			<RepositoryInfo>
				<header>
					<img
						src="https://avatars1.githubusercontent.com/u/54639269?s=460&u=9949b9f529f31bf748ddc9148c610462276b5bd2&v=4"
						alt="Perfil"
					/>
					<div>
						<strong>{params.repository}</strong>
						<p>amem</p>
					</div>
				</header>
				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>
					<li>
						<strong>48</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>67</strong>
						<span>Opened Issues</span>
					</li>
				</ul>
			</RepositoryInfo>

			<Issues>
				<Link to="askdj">
					<div>
						<strong>repository.full_name</strong>
						<p>repository.description</p>
					</div>

					<FiChevronRight size={30} />
				</Link>
			</Issues>
		</>
	);
};

export default Repository;

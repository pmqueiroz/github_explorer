import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const url =
	'https://avatars1.githubusercontent.com/u/54639269?s=460&u=9949b9f529f31bf748ddc9148c610462276b5bd2&v=4';

const Dashboard: React.FunctionComponent = () => {
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore Repos on Github</Title>

			<Form>
				<input placeholder="Insert a repository name" />
				<button type="submit">Search</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img src={url} alt="Author" />
					<div>
						<strong>pmqueiroz/proffy</strong>
						<p>
							Online teaching platform made with React.js and React
							Native using Typescript during the NLW (Next Level Week)
							#02
						</p>
					</div>

					<FiChevronRight size={30} />
				</a>
				<a href="teste">
					<img src={url} alt="Author" />
					<div>
						<strong>pmqueiroz/proffy</strong>
						<p>
							Online teaching platform made with React.js and React
							Native using Typescript during the NLW (Next Level Week)
							#02
						</p>
					</div>

					<FiChevronRight size={30} />
				</a>
				<a href="teste">
					<img src={url} alt="Author" />
					<div>
						<strong>pmqueiroz/proffy</strong>
						<p>
							Online teaching platform made with React.js and React
							Native using Typescript during the NLW (Next Level Week)
							#02
						</p>
					</div>

					<FiChevronRight size={30} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;

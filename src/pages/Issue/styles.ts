import styled from 'styled-components';
import { setLightness } from 'polished';

interface LabelProps {
	bgColor: string;
}

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #a8a8b3;
		transition: color 0.2s;

		&:hover {
			color: #666;
		}

		svg {
			margin-right: 4px;
		}
	}
`;

export const IssueInfo = styled.section`
	margin-top: 80px;

	header {
		display: flex;
		align-items: center;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}

		div {
			margin-left: 24px;
			flex: 1;

			strong {
				font-size: 36px;
				a {
					color: #3d3d4d;
					text-decoration: none;
				}

				& + strong {
					margin-left: 10px;
					color: #737380;
				}
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}

			div.labels {
				margin-left: 0;
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin-top: 40px;

		li {
			& + li {
				margin-left: 80px;
			}

			strong {
				display: block;
				font-size: 36px;
				color: #3d3d4d;
				text-transform: capitalize;
			}

			span {
				display: block;
				margin-top: 4px;
				color: #6c6c80;
			}
		}
	}

	div.issueBody {
		margin-top: 80px;
	}
`;

export const RepoLoading = styled.section`
	margin-top: 80px;

	header {
		display: flex;
		align-items: center;

		div.img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
			background: #cbcbd6;
			margin-right: 24px;
		}

		div {
			div.strong {
				width: 400px;
				height: 42px;
				background: #cbcbd6;
				border-radius: 7px;
			}

			div.p {
				width: 560px;
				height: 22px;
				margin-top: 6px;
				background: #cbcbd6;
				border-radius: 4px;
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin-top: 40px;

		li {
			& + li {
				margin-left: 80px;
			}

			div.strong {
				width: 60px;
				height: 43px;
				background: #cbcbd6;
				border-radius: 4px;
			}

			span {
				display: block;
				margin-top: 4px;
				color: #6c6c80;
			}
		}
	}
`;

export const Label = styled.span<LabelProps>`
	display: inline-block;
	margin-top: 5px;
	padding: 4px 8px;
	background: #bdb2ff;
	background: ${props => setLightness(0.8, props.bgColor)};
	border-radius: 15px;

	& + span {
		margin-left: 10px;
	}
`;

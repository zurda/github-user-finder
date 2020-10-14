import React from "react";

const labelStyle = { fontSize: "1.2rem" };
const sortingLocation = {
	display: "block",
	margin: "0 auto",
	marginLeft: "4rem",
};
const Sorting = (props) => {
	return (
		<form className="ui form" style={sortingLocation}>
			<div className="inline fields">
				<label htmlFor="sorting">Sort results by: </label>
				<div className="field" id="sorting">
					<div className="ui radio checkbox">
						<input
							type="radio"
							name="sort by"
							value="stargazers"
							id="stargazers"
							checked={props.sortBy === "stargazers"}
							onChange={props.change}
						/>
						<label style={labelStyle} htmlFor="stargazers">
							Stargazers
						</label>
					</div>
				</div>
				<div className="field">
					<div className="ui radio checkbox">
						<input
							type="radio"
							name="sort by"
							value="followers"
							id="followers"
							checked={props.sortBy === "followers"}
							onChange={props.change}
						/>
						<label style={labelStyle} htmlFor="followers">
							Followers
						</label>
					</div>
				</div>
				<div className="field">
					<div className="ui radio checkbox">
						<input
							type="radio"
							name="sort by"
							value="repos"
							id="repos"
							checked={props.sortBy === "repos"}
							onChange={props.change}
						/>
						<label style={labelStyle} htmlFor="repos" onChange={props.change}>
							Repos
						</label>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Sorting;

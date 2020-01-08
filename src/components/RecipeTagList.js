import React from 'react';
import PropTypes from 'prop-types';

function RecipeTagList(props) {
	const { className, tags } = props;

	return (
		<ul className="recipe-card__tags">
				{ tags.map((tag) => {
						return <li className={`recipe-card__tag ${className}`} key={tag}>{tag}</li>
					})
				}
		</ul>
	);
}

RecipeTagList.defaultProps = {
	className: ''
};

RecipeTagList.propTypes = {
	className: PropTypes.string,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default RecipeTagList;
import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetails(props) {
	const { children, className } = props;

	return (
		<ul className={`recipe-card__details ${className}`}>
			{ children }
		</ul>
	);
}

RecipeDetails.defaultProps = {
	className: ''
};

RecipeDetails.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	className: PropTypes.string
};

export default RecipeDetails;
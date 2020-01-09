import React from 'react';
import PropTypes from 'prop-types';

function RecipeDescription(props) {
	const { children, className } = props;

	return (
		<p className={`recipe-card__description ${className}`}>
			{ children }
		</p>
	);
}

RecipeDescription.defaultProps = {
	className: ''
};

RecipeDescription.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default RecipeDescription;
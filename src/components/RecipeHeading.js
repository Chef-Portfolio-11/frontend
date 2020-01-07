import React from 'react';
import PropTypes from 'prop-types';

function RecipeHeading(props) {
	const { className, recipeName } = props;

	return (
		<h3 className={`recipe-card__heading ${className}`}>{ recipeName }</h3>
	);
}

RecipeHeading.defaultProps = {
	className: ''
};

RecipeHeading.propTypes = {
	className: PropTypes.string,
	recipeName: PropTypes.string.isRequired
};

export default RecipeHeading;
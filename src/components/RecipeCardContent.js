import React from 'react';
import PropTypes from 'prop-types';

function RecipeCardContent(props) {
	const { children, className } = props;

	return (
		<div className={`recipe-card__content ${className}`}>
			{ children }
		</div>
	);
}

RecipeCardContent.defaultProps = {
	className: ''
};

RecipeCardContent.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
	className: PropTypes.string
};

export default RecipeCardContent;
import React from 'react';
import PropTypes from 'prop-types';

function RecipeCardImage(props) {
	const { alt, className, src } = props;

	return (
		<img
			src={src}
			alt={alt}
			className={`recipe-card__image ${className}`}
		/>
	);
}

RecipeCardImage.defaultProps = {
	className: ''
};

RecipeCardImage.propTypes = {
	alt: PropTypes.string.isRequired,
	className: PropTypes.string,
	src: PropTypes.string.isRequired
};

export default RecipeCardImage;
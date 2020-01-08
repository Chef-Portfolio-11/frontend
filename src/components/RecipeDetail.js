import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetail(props) {
	const { className, theme, ...details } = props;

	let { labelText, detailText } = getDetails(details);
	let stars = getStars(details.rating, theme);

	return (
		<li className={`recipe-card__detail ${className}`}>
			<span className="recipe-card__detail-label">{ labelText }</span>

			<p className="recipe-card__detail-text">{ detailText }</p>

			{details.rating && <div className="recipe-card__detail-stars">{ stars }</div>}
		</li>
	);
}

function getDetails(details) {
	const { rating, timeNeeded, difficultyLevel } = details;

	let detailsMap = new Map();
	let labelText;
	let detailText;

	detailsMap.set('rating', {
		label: 'Rating',
		rating
	});
	detailsMap.set('timeNeeded', {
		label: 'Time',
		timeNeeded
	});
	detailsMap.set('difficultyLevel', {
		label: 'Level',
		difficultyLevel
	});

	if (rating) {
		labelText = detailsMap.get('rating').label;
	} else if(timeNeeded) {
		labelText = detailsMap.get('timeNeeded').label;
		detailText = detailsMap.get('timeNeeded').timeNeeded;
	} else if (difficultyLevel) {
		labelText = detailsMap.get('difficultyLevel').label;
		detailText = detailsMap.get('difficultyLevel').difficultyLevel;
	}

	return { labelText, detailText };
}

function getStars(rating, theme) {
	const MAX_STARS = 5;

	let stars = [];
	let emptyStars = MAX_STARS - rating;

	let starColor = theme === 'light' ? 'white' : 'black';

	for (let i = 0; i < rating; i++) {
		stars.push(<img src={`images/star-icon-${starColor}-filled.svg`} key={`filled-star-${i+1}`} alt="Filled star icon" className="recipe-card__detail-star" />);
	}

	for (let j = 0; j < emptyStars; j++) {
		stars.push(<img src={`images/star-icon-${starColor}.svg`} key={`empty-star-${j+1}`} alt="Outlined star icon" className="recipe-card__detail-star" />);
	}

	return stars;
}

RecipeDetail.defaultProps = {
	className: ''
};

RecipeDetail.propTypes = {
	className: PropTypes.string,
	difficultyLevel: PropTypes.string,
	rating: PropTypes.number,
	theme: PropTypes.string,
	timeNeeded: PropTypes.string
};

export default RecipeDetail;
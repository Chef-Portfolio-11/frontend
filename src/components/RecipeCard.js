import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import './css/RecipeCard.css';

import RecipeCardImage from './RecipeCardImage';
import RecipeCardContent from './RecipeCardContent';
import RecipeHeading from './RecipeHeading';
import RecipeTagList from './RecipeTagList';
import RecipeDetails from './RecipeDetails';
import RecipeDetail from './RecipeDetail';


class RecipeCard extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
	}

	render() {
		const { className, recipe, theme } = this.props;

		let iconColor = theme === 'light' ? 'black' : 'white';

		return (
			<div className={`recipe-card recipe-card--${theme} ${className}`}>
				<RecipeCardImage src={recipe.image.src} alt={recipe.image.alt} />
				<RecipeCardContent className={`recipe-card__content--${theme}`}>
					<RecipeTagList tags={recipe.tags} />
	        <RecipeHeading recipeName={recipe.name} />
	        <RecipeDetails>
	        	<RecipeDetail difficultyLevel={recipe.details.difficultyLevel} />
	          <RecipeDetail timeNeeded={recipe.details.timeNeeded} />
	          <RecipeDetail rating={recipe.details.rating} theme={theme} />
	        </RecipeDetails>
        </RecipeCardContent>

        <button className={`recipe-card__button recipe-card__button-share recipe-card__button-share--${theme}`}>
        	<img src={`images/dot-icon-${iconColor}.svg`} alt="Menu icon" className="recipe-card__button-dots" />
        </button>
				<button className={`recipe-card__button recipe-card__button-view recipe-card__button-view--${theme}`} onClick={this.handleClick}>
					Start cooking
					<img src={`images/right-arrow-${iconColor}.svg`} alt="Arrow icon" className="recipe-card__button-arrow" />
				</button>
			</div>
		);
	}
}

RecipeCard.defaultProps = {
	className: '',
	theme: 'light'
};

RecipeCard.propTypes = {
	className: PropTypes.string,
	recipe: PropTypes.object.isRequired,
	theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default RecipeCard;
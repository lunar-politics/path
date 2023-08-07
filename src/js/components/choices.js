console.log('sdfgs');

const element = document.querySelector('.filter__list');
const choices = new Choices(element, {
  searchEnable: false,
  searchChoices: false,
  shouldSort: false,
  itemSelectText: '',
});

// const defaultSelect = () => {
// 	const element = document.querySelector('.filter');
//   const choices = new Choices(element, {
// 		// searchEnabled: false,
// 		noResultsText: 'Ничего не найдено'
// 	});

// 	let ariaLabel = element.getAttribute('aria-label');
// 	element.closest('.choices').setAttribute('aria-label', ariaLabel);
// };

// defaultSelect();

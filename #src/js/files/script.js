window.onload = function () {
	document.addEventListener('click', documentActions);

	// Header
	const headerElement = document.querySelector('.header');

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
};

// Progress

const circles = document.querySelectorAll('.statistic-element__circle');
circles.forEach(el => {
	if (el.dataset.percentage == 'true') {
		let progress = el.querySelector('.progress');
		let valueBlock = el.querySelector('.statistic-element__value');
		let radius = progress.getAttribute('r');
		let circleLength = 2 * Math.PI * radius;
		let full = el.dataset.full;
		let value = el.dataset.value;
		let percentageProgress = Math.floor((value / full) * 100);
		console.log(percentageProgress);
		valueBlock.textContent = value;
		progress.setAttribute('stroke-dasharray', circleLength);
		progress.setAttribute(
			'stroke-dashoffset',
			circleLength - (circleLength * percentageProgress) / 100
		);
	} else {
		let progress = el.querySelector('.progress');
		let valueBlock = el.querySelector('.statistic-element__value');
		let radius = progress.getAttribute('r');
		let circleLength = 2 * Math.PI * radius;
		let percent = el.dataset.percent;
		let percentageProgress = Math.floor(percent);
		valueBlock.textContent = percent + '%';
		progress.setAttribute('stroke-dasharray', circleLength);
		progress.setAttribute(
			'stroke-dashoffset',
			circleLength - (circleLength * percentageProgress) / 100
		);
	}
});

const ls = document.querySelector('#lightToggle');
const lsIcon = ls.querySelectorAll('svg');
const bodyTag = document.querySelector('body');

ls.addEventListener('click', (e) => {
	e.preventDefault();
	if (bodyTag.classList.contains('dark')) {
		bodyTag.classList.remove('dark');
	} else {
		bodyTag.classList.add('dark');
	}
	toggleLSIcon();
});

//togle Dark mode
function toggleLSIcon() {
	lsIcon.forEach((lsi) => {
		if (lsi.classList.contains('hidden')) {
			lsi.classList.remove('hidden');
		} else {
			lsi.classList.add('hidden');
		}
	});
}

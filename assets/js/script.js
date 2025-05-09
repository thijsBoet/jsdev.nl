const hamburgerMenu = document.querySelector('#hamburger-menu');
hamburgerMenu.style.display = 'none';

gsap.registerPlugin(TextPlugin);
const initial = () => {
	return gsap.set('#pre-text-6', {
		visibility: 'hidden',
	});
};
const TEXT_2 = 'cd ~/Documents/Projects/portfolio';
const TEXT_3 = 'Macbook-Pro:~  Documents/Projects/portfolio$ ';
const TEXT_4 = 'npm run dev';
const TEXT_5 = 'building project';
const TEXT_6 = 'project running on http://localhost:5050/';

const displayText_2 = () => {
	return gsap.to('#text-2', {
		duration: 2.2,
		text: TEXT_2,
		ease: 'none',
	});
};
const displayText_3 = () => {
	return gsap.to('#text-3', {
		duration: 0.01,
		text: TEXT_3,
		delimitter: ' ',
		ease: 'none',
	});
};
const displayText_4 = () => {
	return gsap.to('#text-4', {
		duration: 1,
		text: TEXT_4,
		ease: 'none',
	});
};
const displayText_5 = () => {
	return gsap.to('#text-5', {
		duration: 0.01,
		text: TEXT_5,
		delimitter: ' ',
		ease: 'none',
	});
};
const changePercentage = p => {
	return gsap.to('#percentage', {
		duration: 0.2,
		text: p,
		delimitter: ' ',
		ease: 'none',
	});
};

const displayText_6 = () => {
	return gsap.to('#text-6', {
		duration: 0.01,
		text: TEXT_6,
		delimitter: ' ',
		ease: 'none',
	});
};
const displayPreText_6 = () => {
	return gsap.set('#pre-text-6', {
		visibility: 'visible',
	});
};
var master = new gsap.timeline({ repeat: -1, repeatDelay: 1 });
master.add('start');
master.add(initial(), 'start-=0.2');
master.add(displayText_2(), 'start+=1');
master.add('text-2');
master.add(displayText_3(), 'text-2+=0.5');
master.add('text-3');
master.add(displayText_4(), 'text-3+=0.3');
master.add('text-4');
master.add(displayText_5(), 'text-4+=0.5');
master.add('text-5');
master.add(changePercentage('1%'), 'text-5+=0.05');
master.add(changePercentage('27%'));
master.add('p');
master.add(changePercentage('49%', 'p+=1.5'));
master.add(changePercentage('76%'));
master.add(changePercentage('100%'));
master.add('percentage');
master.add(displayPreText_6(), 'percentage+=0.5');
master.add(displayText_6());



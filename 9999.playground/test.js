const countTimes = () => {
	const htmlBody = document.body
    // This will return redundant elements when existing elements like this: <parent><child></child></parent>
    //the child element will be returned twice.
	const elements = htmlBody.querySelectorAll('*');

	const matches = [];
	for (let i = 0; i < elements.length; i++) {
		const elementText = elements[i].textContent;
		if (elementText.toLowerCase().includes('DietPlannerAI'.toLowerCase())) {
			matches.push(elementText);
		}
	}
	return matches.length
}

const result = countTimes();
console.log(result)
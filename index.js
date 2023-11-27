let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)
let count = 0
let res
function increment()
{
	count += 1
	countEl.textContent = count
}

function save()
{
	res = count + " - "
	saveEl.textContent += res
	countEl.textContent = 0
	count = 0
}

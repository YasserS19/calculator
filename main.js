const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".op")
const funs = document.querySelectorAll(".fun")
const result = document.querySelector(".res")
const expression = document.querySelector(".exp")

numbers.forEach((num) => {
	num.addEventListener("click", () => {
		expression.textContent += num.textContent
		operators.forEach((op) => {
			op.disabled = false
		})
	})
})
operators.forEach((op) => {
	op.addEventListener("click", () => {
		operators.forEach((op) => {
			op.disabled = true
		})
		if (op.textContent === "=") {
			result.textContent = expression.textContent
		}
		expression.textContent += ` ${op.textContent} `
	})
})

funs.forEach((fun) => {
	fun.addEventListener("click", () => {
		switch (fun.textContent) {
			case "DEL":
				result.textContent = expression.textContent.slice(0, -1)
				break
			case "AC":
				expression.textContent = ""
				result.textContent = ""
			default:
				break
		}
		console.log(fun.textContent)
	})
})
function evalute(op, a, b) {
	a = Number(a)
	b = Number(b)
	console.log(a, b)
	switch (op) {
		case "+":
			return a + b
		case "-":
			return a - b
		case "x":
			return a * b
		case "÷":
			if (b === 0) return null
			else return a / b
		default:
			return null
	}
}

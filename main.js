const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".op")
const funs = document.querySelectorAll(".fun")
const pt = document.querySelector(".pt")
let result = document.querySelector(".res")
let expression = document.querySelector(".exp")
let eqPressed = false

operators.forEach((op) => {
	op.disabled = true
})
numbers.forEach((num) => {
	num.addEventListener("click", () => {
		result.textContent += num.textContent
		operators.forEach((op) => {
			op.disabled = false
		})
	})
})
pt.addEventListener("click", () => {
	result.textContent += "."
	pt.disabled = true
})
operators.forEach((op) => {
	op.addEventListener("click", () => {
		operators.forEach((op) => {
			op.disabled = true
		})
		if (op.textContent === "=") {
			expression.textContent += `${result.textContent} ${op.textContent} `
			console.log(`On = : ${expression.textContent}`)
			result.textContent = eval(replaceOp(expression.textContent))
			console.log(`= Result : ${result.textContent}`)
			operators.forEach((op) => {
				if (op.textContent !== "=") op.disabled = false
			})
			numbers.forEach((num) => {
				num.disabled = true
			})
			pt.disabled = true
			eqPressed = true
		} else {
			if (eqPressed === true) {
				expression.textContent = `${result.textContent} ${op.textContent} `
				result.textContent = ""
				eqPressed = false
			} else {
				expression.textContent += `${result.textContent} ${op.textContent} `
				result.textContent = ""
			}
			numbers.forEach((num) => {
				num.disabled = false
			})
			pt.disabled = false
		}
	})
})

funs.forEach((fun) => {
	fun.addEventListener("click", () => {
		switch (fun.textContent) {
			case "DEL":
				result.textContent = result.textContent.slice(0, -1)
				break
			case "AC":
				expression.textContent = ""
				result.textContent = ""
				operators.forEach((op) => {
					op.disabled = false
				})
				numbers.forEach((num) => {
					num.disabled = false
				})
			default:
				break
		}
	})
})

// function evalute(op, a, b) {
// 	a = Number(a)
// 	b = Number(b)
// 	switch (op) {
// 		case "+":
// 			return a + b
// 		case "-":
// 			return a - b
// 		case "x":
// 			return a * b
// 		case "":
// 			if (b === 0) return null
// 			else return a / b
// 		default:
// 			return null
// 	}
// }
function replaceOp(exp) {
	exp = exp.replace("x", "*")
	exp = exp.replace("÷", "/")
	exp = exp.replace(" =", "")
	console.log(exp)
	return exp
}

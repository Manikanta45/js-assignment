ask = (question, yes,no) => (confirm(question) ? yes():no());


ask("Do you Agree?",() => alert("You Agreed"),() => alert("You cancelled the execution."))





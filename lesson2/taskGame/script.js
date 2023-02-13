let userName;

do {
  userName = prompt("Привет! Как тебя зовут?");
} while (userName == "");
if (userName === null) {
  alert("Good bye!");
} else {
  alert(`${userName}! Отгадай число от 1 до 100 за меньшее количество попыток`);

  const RND_NUMBER = "42";
  let userNumber = prompt("Enter number");

  while (userNumber != RND_NUMBER) {
    if (userNumber > RND_NUMBER) {
      alert("so big");
      userNumber = prompt("Enter number");
    } else if (userNumber < RND_NUMBER) {
      alert("so smal");
      userNumber = prompt("Enter number");
    }
  }
  alert("You are right!");
}

let question;
let answer;

let selectedTopic = prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math');

// null, ცარიელი სტრინგის შემოწმება

if (selectedTopic === null || selectedTopic.trim() === '') {
  alert('თემა არ აგირჩევიათ.');
} else {
  selectedTopic = selectedTopic.toLowerCase().trim();

 switch (selectedTopic) {
    case '1':
    case 'strings':
      question = 'რა არის typeof(5)? \n(Write your answer in English)';
      answer = prompt(question);

      if (answer && answer.toLowerCase() === 'number') {
        alert('სწორია!');
      } else {
        alert('სამწუხაროდ ვერ გამოიცანით');
      }
      break;

    case '2':
    case 'variable':
      question = 'შეიძლება თუ არა let-ის რედეკლარირება? \n(Answer in English: "yes" or "no")';
      answer = prompt(question);

      if (answer && answer.toLowerCase() === 'yes') {
        alert('სწორია!');
      } else {
        alert('სამწუხაროდ ვერ გამოიცანით');
      }
      break;

    case '3':
    case 'math':
      question = 'რას აბრუნებს console.log(Math.floor(2.1))? \n(Answer in Latin letters, Georgian word )';
      answer = prompt(question);

      if (answer && answer.toLowerCase() === 'ori') {
        alert('სწორია!');
      } else {
        alert('სამწუხაროდ ვერ გამოიცანით');
      }
      break;

    default:
      alert('შეყვანილი თემა არ არსებობს. გთხოვთ სცადოთ ხელახლა ნომრით ან სწორი სახელით.');
 }
}


const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const emails = [
  'joeschmoe@email.com',
  'schmoejoe@email.com',
  'dudeman@email.com',
  'LynchyJoey@email.com',
  'BustinCode@email.com',
  'codeman@email.com',
  'mongobongo@email.com',
  'hellocodo@email.com',
  'lesshomework@email.com',
  'apps@email.com',
  'messages@email.com',
  'spamspamspam@email.com',
  'confusedandlost@email.com',
  'fireflame@email.com',
  'runningjumping@email.com',
  'karencooking@email.com',
  'kittytime@email.com',
  'purringperfection@email.com',
];

const thoughts = [
'Have a nice day',
'Pie is more important than life',
'Where do stars sleep?',
'How come people scream for ice-cream?',
'Homework is boring, but useful',
'Working is not fun',
'How come all developers have cats?',
'What comes after z?',
'Nobody really likes pet fish, they just say they do',
'Painint and mowing are very similar',
'It is not that bad, just rub some dirt on it.',
'This is comment 12 for me',
'There are too many comments in here.',
'There are not enough comments in here.',
'Have a really great day',
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
const usedEmails = [];

const getRandomEmails = () => {
 let newEmail = getRandomArrItem(emails);

 while(usedEmails.includes(newEmail)){
  newEmail = getRandomArrItem(emails);
 }
 usedEmails.push(newEmail);

 return newEmail;
};

const getRandomThought = () => {
  const newThought = getRandomArrItem(thoughts)
  return newThought;
}

module.exports = { getRandomName, getRandomEmails, getRandomThought };

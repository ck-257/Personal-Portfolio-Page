

const skillsContent = document.getElementById('skillsContent');
const skills = [
  { name: 'HTML', details: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages. HTML describes the structure of a web page and consists of a series of elements that label pieces of content such as “this is a heading”, “this is a paragraph”, “this is a link”, etc. With HTML, you can create your own website. ' },
  { name: 'CSS', details: 'I know CSS well' },
  { name: 'JavaScript', details: 'I know JavaScript well' },
  { name: 'C', details: 'I know JavaScript well' },
  { name: 'Python', details: 'I know JavaScript well' },
  { name: 'JAVA', details: 'I know JavaScript well' },
];

skills.forEach(skill => {
  const skillBox = document.createElement('div');
  skillBox.textContent = skill.name;
  skillBox.classList.add('skill-box');
  skillBox.setAttribute('data-details', skill.details);
  skillsContent.appendChild(skillBox);
});



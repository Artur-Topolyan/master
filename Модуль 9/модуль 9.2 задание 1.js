const parser = new DOMParser();

const xmlString = `
  <list>
    <name lang="en">Ivan Ivanov</name>
    <age>35</age>
    <prof>teacher</prof>
    
    <name2 lang="ru">Петр Петров</name2>
    <age2>58</age2>
    <prof2>driver</prof2>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const nameNode = listNode.querySelector("name");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");

const name2Node = listNode.querySelector("name2");
const age2Node = listNode.querySelector("age2");
const prof2Node = listNode.querySelector("prof2");

const langAttr = nameNode.getAttribute('lang');
const langAttr2 = name2Node.getAttribute('lang');

const result = {
  name: nameNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr,
}; 
const result2 = {
  name: name2Node.textContent,
  age: Number(age2Node.textContent),
  prof: prof2Node.textContent,
  lang: langAttr2,
};
console.log('result', result);
console.log('result', result2);
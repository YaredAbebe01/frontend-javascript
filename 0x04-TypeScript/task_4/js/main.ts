import { } from './subjects/Teacher';
import { } from './subjects/Subject';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

// Export constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export teacher with experienceTeachingC = 10
export const cTeacher = {
  firstName: "Yared",
  lastName: "Abebe",
  experienceTeachingC: 10,
};

// ---------- Cpp ----------
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ---------- Java ----------
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ---------- React ----------
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

/*Author: Nicholas Oblitey Commey
Date: 19/2/2014
Purpose : To apply objects, arrays, and functions in JavaScript.
Observation or Comment. Consider using such as feature for my school app and for my final project.*/


const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
    // the user enters the section number it wants to determine which class section to join. Here we have two
    // teachers. So when the user clicks on the add, it adds the user to the class. and displays it as such.
    // else if the user says drop, then it goes into the file and takes of the name. I think that this feature is very useful
    // its similar to what i see during enrolment into block A or block B course of BYU-Idaho. I think i would like to do more with this.
    // take your time to thoroughly understand it.
    enrollStudent: function (sectionNum) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
      }
    },
    dropStudent: function (sectionNum) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
      }
    },
    // this version that I just wrote is the one that combines the twp together.
    // I mean it combines the drop student function with the enroll student function.
    // So it uses a bool to determine what to do.d
    changeEnrollment: function (bool, sectionNum) {// study this style of writing functions well.
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            if (bool)
            {
                this.sections[sectionIndex].enrolled++;
            }

            else 
            {
                this.sections[sectionIndex].enrolled--;
            }
          
          renderSections(this.sections);
        }
      },
  };
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  
  // we listen, when the user clicks on drop or enroll, then action is taken.
  // later I can also set other rules that should take place ones the student enrolls. For example, a 
  // a page account is created for the user to have access to his or her documents, etc.
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(true,sectionNum);
    //aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(false, sectionNum);
    //aCourse.dropStudent(sectionNum);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);
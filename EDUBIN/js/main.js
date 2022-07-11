// hover header menu navbar item
function hoverHeaderMenu(r) {
  let div = r.childNodes[3];
  div.style.display = 'block';
}

let gk = 0

function outHoverHeaderMenu(r) {
  setTimeout(function(){
    let div = r.childNodes[3];
    if(gk == 0) { div.style.display = 'none'; }
  }, 200);
}

function abc() {
  gk = 1;
}

function def() {
  gk = 0;
}

// show menu mobile
let numberMB = 0;
function showMenuMB() {
  if(numberMB === 0) {
    document.getElementById('menuMB').style.display = 'block';
    numberMB = 1;
  } else {
    document.getElementById('menuMB').style.display = 'none';
    numberMB = 0;
  }
}

// hover header menu navbar lv2
function hoverHeaderMenuLv2(r) {
  console.log(r);
  let div = r.childNodes[1];
  div.style.display = 'block';
  console.log(div);
}



// slide s1
var index = 0;
function changeImage() {
    var imgs = ["../img/img_slide1.jpg", "../img/img_slide2.jpg"];

    document.getElementById('img').src = imgs[index];

    if (index == 0) {
        document.getElementById('z1').style.display = 'block';
        document.getElementById('z2').style.display = 'none';
        index ++;
    } else {
        document.getElementById('z1').style.display = 'none';
        document.getElementById('z2').style.display = 'block';
        index = 0;
    }
}
setInterval(changeImage, 5000);

// slide main-slide
$('.filtering').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:300
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });

// hover about-teachers
function hoverTeacher(r) {
  let div = r.childNodes[5];
  div.style.display = 'block';
}

function outHoverTeacher(r) {
  let div = r.childNodes[5];
  div.style.display = 'none';
}

// show feedback
function showFeedbackForStudent(numberFeedback) {
  let comments = ['I recommend these courses to everyone, and wish you, guys, luck with the new studies! Lorem ipsum dolor sit amet consectetur adipisicing.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore Lorem ipsum dolor sit amet.', 'I am grateful for your wonderful course! Your tutors are the best, and I am completely satisfied with the level of professional teaching.'];
  let imageStudents = ['../img/student_1.jpg', '../img/student_2.jpg', '../img/student_3.jpg'];
  let nameStudents = ['Monica Blews', 'James Smith', 'Eleanor Baker'];
  let jobStudents = ['UX Designer', 'Apps Developer', 'CFO Apple Corp'];

  let student1 = {
    img: document.getElementById('img-student-1'),
    cmt: document.getElementById('cmt-student-1'),
    name: document.getElementById('name-student-1'),
    job: document.getElementById('job-student-1')
  }

  let student2 = {
    img: document.getElementById('img-student-2'),
    cmt: document.getElementById('cmt-student-2'),
    name: document.getElementById('name-student-2'),
    job: document.getElementById('job-student-2')
  }

  student1.img.src = imageStudents[numberFeedback];
  student1.cmt.innerHTML = comments[numberFeedback];
  student1.name.innerHTML = nameStudents[numberFeedback];
  student1.job.innerHTML = jobStudents[numberFeedback];


  if(numberFeedback === jobStudents.length-1) {
    student2.img.src = imageStudents[0];
    student2.cmt.innerHTML = comments[0];
    student2.name.innerHTML = nameStudents[0];
    student2.job.innerHTML = jobStudents[0];
  } else {
    student2.img.src = imageStudents[numberFeedback + 1];
    student2.cmt.innerHTML = comments[numberFeedback + 1];
    student2.name.innerHTML = nameStudents[numberFeedback + 1];
    student2.job.innerHTML = jobStudents[numberFeedback + 1];
  }

  if(numberFeedback === 0) {
    document.getElementById('nS1').style.color = '#FFC600';
    document.getElementById('nS2').style.color = '#FFFFFF';
    document.getElementById('nS3').style.color = '#FFFFFF';
  } else if(numberFeedback === 1) {
    document.getElementById('nS1').style.color = '#FFFFFF';
    document.getElementById('nS2').style.color = '#FFC600';
    document.getElementById('nS3').style.color = '#FFFFFF';
  } else {
    document.getElementById('nS1').style.color = '#FFFFFF';
    document.getElementById('nS2').style.color = '#FFFFFF';
    document.getElementById('nS3').style.color = '#FFC600';
  }
}

// hover book
function hoverBookStore(r) {
  let div = r.childNodes[3];
  div.style.display = 'block';
}

function outHoverBookStore(r) {
  let div = r.childNodes[3];
  div.style.display = 'none';
}

// show slide logos
$('.slide-logos-content').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  speed:500
});

var nSLC = false;

$('.js-filter').on('click', function(){
  if (nSLC === false) {
    $('.slide-logos-content').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    nSLC = true;
  } else {
    $('.slide-logos-content').slick('slickUnfilter');
    $(this).text('Filter Slides');
    nSLC = false;
  }
});


// play video
function playvideo() {
  document.getElementById('numPlayVideo').style.display = 'none'
  document.getElementById('video').style.display = 'block';
}

function outplay() {
  document.getElementById('numPlayVideo').style.display = 'block'
  document.getElementById('video').style.display = 'none';
}

// scoll header
document.addEventListener("DOMContentLoaded",function() {
  let sc = document.getElementById('header');
  console.log(sc.scrollingElement.scrollTop);
})

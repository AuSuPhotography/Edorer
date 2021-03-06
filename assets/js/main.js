window.addEventListener('resize', () => {
    if(window.screen.availWidth < 768)removeAnimations();
    else if(window.screen.availWidth > 768){
      addAccordian();
      addTabChange();
    }
  });

function ajax(options) {
  const xhr = new XMLHttpRequest();
  xhr.open(options.method, options.url, options.data);
  xhr.send();
  xhr.onload = () => {
      if(xhr.status !== 200){

      }else{
          options.success(xhr.response);
      }
  }
  xhr.onerror = options.error();
}

function imgUpload(){
  document.getElementById('imgUpload').addEventListener('click', event => {
    console.log(event.currentTarget);
    document.getElementById('selectImg').click();
  });
}


function addTabChange(){
  let lastEleForTab;
  const option = {
    pic1: './assets/img/Group144@3x.svg',
    pic2: './Images/power.png',
    pic3: './Images/Rectangle 230.png',
    pic4: './Images/WAC-Logo-Web 1.png',
    pic5: './Images/Group 150@2x.png',
  };

  document.getElementsByName("divHead").forEach((element, index) => {
    element.style.cursor = 'pointer';
    if(index === 0){
      lastEleForTab = element;
      lastEleForTab.style.borderTop = '4px solid #EC4056';
      lastEleForTab.getElementsByTagName('h6')[0].style.color = '#EC4056';
    }
    element.addEventListener('click', (event) => {
      document.getElementById('showPic').src = option[event.currentTarget.id];
      lastEleForTab.style.borderTop = '4px solid #19071c10';
      lastEleForTab.getElementsByTagName('h6')[0].style.color = '#19071C';

      event.currentTarget.style.borderTop = '4px solid #EC4056';
      event.currentTarget.style.transition = 'all 0.5s ease-out 0s';
      event.currentTarget.getElementsByTagName('h6')[0].style.color = '#EC4056';
      lastEleForTab = event.currentTarget;
    });
  });
}

function addAccordian(){
  let lastEleForDiv;
  document.getElementsByName("graphChange").forEach((element, index) => {
    if(index === 0){
      element.classList.add('accordian-card-height');
      element.getElementsByClassName('heading')[0].childNodes[1].style.color =
      element.getElementsByClassName('heading')[0].getElementsByTagName('h6')[0].getElementsByTagName('span')[0].style.color = '#EC4056';
      element.getElementsByClassName('heading')[0].childNodes[1].style.opacity =
      element.getElementsByClassName('heading')[0].getElementsByTagName('h6')[0].getElementsByTagName('span')[0].style.opacity = 1;
      element.getElementsByClassName('heading')[0].childNodes[1].style.display = 'block';
      element.getElementsByClassName('para')[0].classList.remove('graph-img');
      lastEleForDiv = {
        element,
        c: index + 1
      };
      document.getElementById(`timeline-${lastEleForDiv.c}`).style.display = 'block';

      if(window.screen.availWidth >= 768 && window.screen.availWidth < 1279){
        document.getElementById(`graph${lastEleForDiv.c}`).style.display = 'flex';
      }
    }

    element.addEventListener('click', (event) => {
        const num = index + 1;
        if(lastEleForDiv.c === num) return;
        event.currentTarget.classList.add('accordian-card-height');
        event.currentTarget.getElementsByClassName('heading')[0].childNodes[1].style.color =
        event.currentTarget.getElementsByClassName('heading')[0].getElementsByTagName('h6')[0].getElementsByTagName('span')[0].style.color = '#EC4056';
        event.currentTarget.getElementsByClassName('heading')[0].childNodes[1].style.opacity =
        event.currentTarget.getElementsByClassName('heading')[0].getElementsByTagName('h6')[0].getElementsByTagName('span')[0].style.opacity = 1;
        event.currentTarget.getElementsByClassName('heading')[0].childNodes[1].style.display = 'block';
        event.currentTarget.getElementsByClassName('para')[0].classList.remove('graph-img');

        document.getElementById(`timeline-${lastEleForDiv.c}`).style.display = 'none';
        document.getElementById(`timeline-${num}`).style.display = 'block';

        if(window.screen.availWidth >= 768 && window.screen.availWidth <= 1279){
          document.getElementById(`graph${lastEleForDiv.c}`).style.display = 'none';
          document.getElementById(`graph${num}`).style.display = 'flex';
        }

        lastEleForDiv.element.getElementsByClassName('heading')[0].childNodes[1].style.color =
        lastEleForDiv.element.getElementsByClassName('heading')[0].getElementsByTagName('h6')[0].getElementsByTagName('span')[0].style.color = '#19071C';
        lastEleForDiv.element.getElementsByClassName('heading')[0].childNodes[1].style.opacity = 1;
        lastEleForDiv.element.getElementsByClassName('heading')[0].getElementsByTagName('h6')[0].getElementsByTagName('span')[0].style.opacity = 0.1;
        lastEleForDiv.element.getElementsByClassName('heading')[0].childNodes[1].style.display = 'inline-flex';
        lastEleForDiv.element.getElementsByClassName('para')[0].classList.add('graph-img');
        lastEleForDiv.element.classList.remove('accordian-card-height')
        lastEleForDiv.element = event.currentTarget;
        lastEleForDiv.c = num;
    })
  });
}

function addAnimations(){
  var slideBtn = document.getElementsByClassName('slide-btn');
  var slide = document.getElementById("slide");
  for(let i in slideBtn){
    slideBtn[i].onclick = function(){
      slide.style.transform = `translateX(-${100*i}%)`;
      for(j=0; j<4; j++) {
        slideBtn[j].classList.remove('active');
      } this.classList.add('active');
    };
  }
}


function removeAnimations(){
  document.getElementsByName('graphChange').forEach((element, index) => {
    element.removeEventListener('click', () => {

    });
  });

  document.getElementsByName('divHead').forEach((element, index) => {
    element.removeEventListener('click', () => {
      element.style.border = 'none';
    });
  });
}


(function(){
  imgUpload();
  addAnimations();
  if(window.screen.availWidth < 766) return;
  addAccordian();
  addTabChange();
})();

document.getElementById("myBtn").addEventListener('click', function(event){
  event.preventDefault()
  document.getElementById("myModal").style.display = 'block';
});
console.log(document.getElementById("close"))
document.getElementsById("close").addEventListener('click', function(event){
  event.preventDefault()
  document.getElementById("myModal").style.display = 'none';
});
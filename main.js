const showImg = document.getElementById('set-img');
const reset = document.getElementById('reset-btn');

setImg.addEventListener('click', function() {
  showImg.innerHTML = '';
  const checkEvo = Math.floor(Math.random() * 10);
  const first = document.createElement('div');
  const second = document.createElement('div');
  const third = document.createElement('div');
  const fourth = document.createElement('div');

  first.innerHTML = "<img src='./img/evolution1.png' alt='img_Egasira'  />";
  showImg.appendChild(first);

  if (checkEvo > 3) {
    second.innerHTML = "<img src='./img/evolution2.png' alt='img_Egasira'  />";
    showImg.appendChild(second);
  }
  if (checkEvo > 6) {
    third.innerHTML = "<img src='./img/evolution3.png' alt='img_Egasira'/>";
    showImg.appendChild(third);
  }
  if (checkEvo > 8) {
    fourth.innerHTML = "<img src='./img/evolution4.png' alt='img_Egasira'/>";
    showImg.appendChild(fourth);
  }
});

reset.addEventListener('click', function() {
  showImg.innerHTML = '';
});

//= ============= Popup Window, Dynamic Rendering==============>

let html = '';
const popupArr = [
  {
    id: 0,
    mobileTitle: 'Tonic',
    desktopTitle: 'Tonic',
    detail: ['CANOPY', 'Back End Dev', 2015],
    description: ['This is a Tailor website that Produce Custom-made (bespoke) Suits, Jackets And Coats For Men And Women and other sewing tools.', 'This is a Tailor website that Produce Custom-made (bespoke) Suits, Jackets And Coats For Men And Women and other sewing tools.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/snipp-mob.PNG',
    desktopImage: 'images/snipp2.PNG',
  },
  {
    id: 1,
    mobileTitle: 'Multi-Post Stories',
    desktopTitle: 'Multi-Post Stories',
    detail: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: ['A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/Snapshoot-Portfolio-2.png',
    desktopImage: 'images/Snapshoot-Portfolio-4.png',
  },
  {
    id: 2,
    mobileTitle: 'Tonic',
    desktopTitle: 'FACEBOOK 360',
    detail: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: ['A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/Snapshoot-Portfolio-3.png',
    desktopImage: 'images/Snapshoot-Portfolio-1.png',
  },
  {
    id: 3,
    mobileTitle: 'Multi-Post Stories',
    desktopTitle: 'Uber Navigation',
    detail: ['Uber', 'Lead Developer', 2018],
    description: ['A daily  selection of privately personalized reads; no accounts or sign-ups required.', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'],
    stack: ['html', 'css', 'javaScript'],
    mobileImage: 'images/Snapshoot-Portfolio-4.png',
    desktopImage: 'images/Snapshoot-Portfolio-2.png',
  },
];

popupArr.forEach((card) => {
  html += `
  <div class="work">
  <div class="img-card">
      <img src="${card.mobileImage}" alt="" class="mobile">
      <img src="${card.desktopImage}" alt="" class="desktop">
  </div>
  <div class="card-contents">
      <h2 class="card-title mobile">${card.mobileTitle}</h2>
      <h2 class="card-title desktop">${card.desktopTitle}</h2>
      <div class="counter">
        <span>${card.detail[0]}</span>
        <span class="counters"></span>
        <span>${card.detail[1]}</span>
        <span class="counters"></span>
        <span>${card.detail[2]}</span>
      </div>
      <p class="card-desc mobile">${card.description[0]}</p>
      <p class="card-desc desktop">${card.description[1]}</p>
      <ul class="techs">
          <li class="techs-item"><a href="" class="techs-link">${card.stack[0]}</a></li>
          <li class="techs-item"><a href="" class="techs-link">${card.stack[1]}</a></li>
          <li class="techs-item"><a href="" class="techs-link">${card.stack[2]}</a></li>
      </ul>
      <button type="button" class="work-btn">see project</button>
  </div>
</div>`;
});

const workSection = document.querySelector('.work-section');
workSection.innerHTML = html;

//= ========== Popup Window Section =================>

const workBtn = document.querySelectorAll('.work-btn');
const popupContainer = document.querySelector('.popup-container');

for (let index = 0; index < workBtn.length; index += 1) {
  workBtn[index].addEventListener('click', () => {
    const mobileTitle = popupContainer.querySelector('.mobile-popup-title');
    const desktopPopupTitle = popupContainer.querySelector('.desktop-popup-title');

    const canopyA = popupContainer.querySelector('.canopy');
    const backEndDevA = popupContainer.querySelector('.back-end-dev');
    const dateA = popupContainer.querySelector('.date');

    const mobilePopupDescA = popupContainer.querySelector('.mobile-popup-desc');
    const desktopPopupDescA = popupContainer.querySelector('.desktop-popup-desc');

    // const popupTechsLinkA = popupContainer.querySelector('.popup-techs-linkA');
    // const popupTechsLinkB = popupContainer.querySelector('.popup-techs-linkB');
    // const popupTechsLinkC = popupContainer.querySelector('.popup-techs-linkC');

    const mobilepopupImg = popupContainer.querySelector('.mobile-popup-img');
    const desktoppopupImg = popupContainer.querySelector('.desktop-popup-img');

    mobileTitle.textContent = popupArr[index].mobileTitle;
    desktopPopupTitle.textContent = popupArr[index].desktopTitle;

    //= =============== Using Array Destructuring=================>

    const [canopyB, backEndDevB, dateB] = popupArr[index].detail;
    // const [popupTechsLinkAA, popupTechsLinkBB, popupTechsLinkCC] = popupArr[index].stack;

    const [mobilePopupDescB, desktopPopupDescB] = popupArr[index].description;

    mobilePopupDescA.textContent = mobilePopupDescB;
    desktopPopupDescA.textContent = desktopPopupDescB;

    canopyA.textContent = canopyB;
    backEndDevA.textContent = backEndDevB;
    dateA.textContent = dateB;

    // popupTechsLinkA.textContent = popupTechsLinkAA;
    // popupTechsLinkB.textContent = popupTechsLinkBB;
    // popupTechsLinkC.textContent = popupTechsLinkCC;

    mobilepopupImg.setAttribute('src', popupArr[index].mobileImage);
    desktoppopupImg.setAttribute('src', popupArr[index].desktopImage);

    popupContainer.classList.remove('d-none');
  });
}

//= ============== Popup Close Button ==============>

const closeBtn = document.querySelector('.close-popup');
closeBtn.addEventListener('click', () => {
  popupContainer.classList.add('d-none');
});
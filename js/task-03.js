// Напиши скрипт для создания галереи изображений по массиву данных.
// В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// var 1
// for (let i =  0; i < images.length; i += 1) {
//   const galleryEl = document.querySelector(".gallery");
//   const image = images[i];

//   galleryEl.insertAdjacentHTML(
//     "afterbegin",
//     `<li class = item-galery><img src="${image.url}" alt = "${image.alt}" height = 180px, width = 300px></li>`
//   );

//   galleryEl.style.display = "flex";
//   galleryEl.style.gap = "5px";
//   galleryEl.style.listStyle = "none";
// }

// var 2
const galleryEl = document.querySelector(".gallery");

const elements = images.map((image) => {

   return `<li class = item-galery>
	<img src="${image.url}" alt = "${image.alt}" height = 180px, width = 300px>
	</li>`;

});

galleryEl.insertAdjacentHTML(
	"afterbegin",
	elements.join()
 );

galleryEl.style.display = "flex";
galleryEl.style.gap = "5px";
galleryEl.style.listStyle = "none";
















// Array.prototype.forEach.call(document.images, function (myImg) {
//   myImg.style.height = "180px";
//   myImg.style.width = "300px";
// });

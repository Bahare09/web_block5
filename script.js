
var srcs;


srcs = ['https://insideretail.co.nz/wp-content/uploads/2020/08/oxfam-shop.jpg', 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1180/cached.offlinehbpl.hbpl.co.uk/news/NST/OxfamShop-20190109045222823.jpg', 'https://leap.london/leap-content/uploads/2018/04/oxfam_unicorns1.png'];


document.getElementById('next').addEventListener('click', (event) => {
  srcs.push(srcs.shift());
  let element_pic = document.getElementById('pic');
  element_pic.setAttribute("src", srcs[0]);

});

document.getElementById('pervious').addEventListener('click', (event) => {
  srcs.unshift(srcs.slice(-1)[0]);
  let element_pic2 = document.getElementById('pic');
  element_pic2.setAttribute("src", srcs.pop());

});
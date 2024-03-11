window.localStorage.getItem('name');





async function downloadImage(imageSrc) {
  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
	let name_file=imageSrc.split('/').slice(3).join('-')
  link.download = name_file
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


let count = parseInt(prompt('Введите количество: '))
let number = parseInt(prompt('Укажите номер сета: '))

for (let i=1;i<=count;i++){
	let tmp = (i<10)? '0'+i : i;
	downloadImage(`https://hentaicdn.com/hentai/${number}/1/ccdn00${tmp}.jpg`)
}

let arr=[20, 21, 24, 28, 30, 32, 33, 34, 38, 45, 46, 47, 53, 58, 62, 63, 65, 67, 68, 69, 70, 71, 75, 78, 79, 80, 81, 84, 85, 86, 87, 88, 89, 90, 91, 92]

for (let tmp of arr){
	downloadImage(`https://hentaicdn.com/hentai/${number}/1/ccdn00${tmp}.jpg`)
}
//https://hentaihere.com/directory/staff-pick?page=
console.log('hello')



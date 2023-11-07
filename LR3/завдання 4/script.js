let imagesArray = [ {path: 'images/cat1.jpg',
		title : 'Сіра гламурна киця',
		description : 'Британська короткошерста',
		},
	{	path: 'images/cat2.jpg',
		title : 'Голубоока киця',
		description : 'Сіамська порода'
		},
	{	path: 'images/cat3.jpg',
		title : 'Леопардова киця',
		description : 'Бенгальська кішка'
		}
];
function initPhotoRotator() {
	const block = document.getElementById('blockdown')
    const div = document.createElement('div')
    div.textContent = imagesArray[0].title

    block.prepend(div)
    
    const div1 = document.createElement('div')
    div1.textContent = imagesArray[0].description

    block.append(div1)

    const div2 = document.createElement('div')
    div2.imag = imagesArray[0].path

    block.prepend(div2)

}

initPhotoRotator();
document.addEventListener('DOMContentLoaded', () => {
	let posts = [
		{
			"title": "How to start reading in English",
			"date": "Dec 4, 2023",
			"link": "https://learnenglish.britishcouncil.org/english-levels/improve-your-english-level/how-start-reading-english",
			"image": "images/post-1.jpg",
		},
		{
			"title": "The web at 30",
			"date": "Nov 24, 2023",
			"link": "https://learnenglish.britishcouncil.org/general-english/magazine-zone/web-30",
			"image": "images/post-2.jpg",
		},
		{
			"title": "Bonfire Night",
			"date": "Nov 4, 2023",
			"link": "https://learnenglish.britishcouncil.org/general-english/magazine-zone/bonfire-night",
			"image": "images/post-3.jpg",
		},
		{
			"title": "Delexical verbs",
			"date": "Jul 24, 2023",
			"link": "https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/delexical-verbs-have-take-make-give-go-do",
			"image": "images/post-4.jpg",
		},
		{
			"title": "Writing a good CV",
			"date": "Jul 14, 2023",
			"link": "https://learnenglish.britishcouncil.org/business-english/business-magazine/writing-good-cv",
			"image": "images/post-5.jpg",
		},

	]

	

	if (document.getElementById('blogPage')) {
		posts.forEach((element, index) => {
		  createElement(element, index)
		});
	} else {
		posts.slice(0, 2).forEach((element, index) => {
		  createElement(element, index)
		});
	}

	function createElement(item, index) {
		const postList = document.getElementById('postList')

		const postItem = document.createElement('div')
		postItem.className = 'post-item d-flex'
		postItem.dataset.aos = "fade-right"
		postItem.dataset.aosDuration = `${index + 1}000`

		const postItemImg = document.createElement('div')
		postItemImg.className = 'post-item-img'

		const postImg = document.createElement('img')
		postImg.src = item.image
		postImg.alt = "post image"
		postImg.className = 'fluid'

		const postContent = document.createElement('div')
		postContent.className = 'post-item-content'

		const postTitle = document.createElement('div')
		postTitle.className = 'post-item-title'
		postTitle.textContent = item.title

		const postDate = document.createElement('div')
		postDate.className = 'post-item-date'
		postDate.textContent = item.date

		const postLink = document.createElement('a')
		postLink.className = 'link'
		postLink.href = item.link
		postLink.textContent = 'Read More'


		postContent.append(postTitle, postDate, postLink)
		postItemImg.append(postImg)
		postItem.append(postItemImg, postContent)
		postList.append(postItem)

		if (document.getElementById('blogPage') && posts.length > 3) {
			if (index <= 2) {
				document.getElementById('page-1').append(postItem)
			} else {
				document.getElementById('page-2').append(postItem)

			}
			document.querySelector('.pagination').classList.remove('hide')
		}
	}

})
document.addEventListener('DOMContentLoaded', () => {
	const page1 = document.getElementById('page-1')
	const page2 = document.getElementById('page-2')

	const pag1 = document.getElementById('pag1')
	const pag2 = document.getElementById('pag2')

	pag1.addEventListener('click', function() {
		document.querySelector('.load').classList.remove('hide')
		setTimeout(function(){
      if(page1.classList.contains('hide')){
				page1.classList.toggle('hide')
				page2.classList.toggle('hide')
				document.querySelector('.load').classList.add('hide')
			}
    }, 1000);


	})
	pag2.addEventListener('click', function() {
		document.querySelector('.load').classList.remove('hide')
		setTimeout(function(){
      if(page2.classList.contains('hide')) {
				page1.classList.toggle('hide')
				page2.classList.toggle('hide')
				document.querySelector('.load').classList.add('hide')
			};
    }, 1000);

	})

	const brokenLinks = document.querySelectorAll('a[href="#"]:not(#navbarDropdownMenuLink)')

	function locateToError () {
		window.location.replace("404.html")
	}

	for(let item of brokenLinks) {
		if (item.id !== 'btn') {
			item.addEventListener('click', locateToError)
		}

	}

	function highlightCurrentPage() {
    const currentPageUrl = window.location.href.split("/")
    console.log(currentPageUrl[currentPageUrl.length - 1])

    const menuItem = document.querySelector(`.navbar a[href="${currentPageUrl[currentPageUrl.length - 1]}"]`);
	console.log(menuItem)

		    if (menuItem) {
		        menuItem.classList.add('active');
		    }
		}

		highlightCurrentPage()

	document.getElementById('searchBtn').addEventListener('click', (event) => {
		event.preventDefault()
	})

	
	if (document.getElementById('episodePage')) {
		const commentBtn = document.getElementById('commentSubmit')
		const form = document.getElementById('form')
		const requiredInputs = form.querySelectorAll('[required]')
		

		// for (const input of requiredInputs) {
		// 	input.value = ''
		// }

		form.addEventListener('submit', (event) => {
			event.preventDefault()
		})

		commentBtn.addEventListener('click', () => {

			const comment = document.getElementById('comment')
			const name = document.getElementById('name')
			const email = document.getElementById('email')
			const site = document.getElementById('site')
			const commentList = document.getElementById('commentList')

			for (const input of requiredInputs) {
				if (input.value.length === 0) {
					input.classList.add('error-input')
				} else {
					input.classList.remove('error-input')
				}
			}

			const today = new Date();
			todayMonth=today.getMonth()+1

			const item = document.createElement('div')
			item.className = 'comment-list-item d-flex'
			const avatar = document.createElement('div')
			avatar.className = 'avatar'
			const contentHeader = document.createElement('div')
			contentHeader.className = 'content-header'
			const content = document.createElement('div')
			content.className = 'content'
			const username = document.createElement('span')
			username.className = 'name'
			username.textContent = name.value
			const date = document.createElement('span')
			date.className = 'date'
			date.textContent = `${today.getDate()}.${today.getMonth()+1}.${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`
			const contentText = document.createElement('div')
			contentText.className = 'content-text'
			contentText.textContent = comment.value
			const contentReply = document.createElement('div')
			contentReply.className = 'content-reply'
			const icon = document.createElement('i')
			icon.className = 'fa-solid fa-reply'
			const reply = document.createElement('span')
			reply.textContent = 'Reply'

			contentReply.append(icon, reply)
			contentHeader.append(username, date)
			content.append(contentHeader, contentText, contentReply)
			item.append(avatar, content)


			commentList.append(item)


			console.log(name.value)

		})
	}

	if(document.getElementById('swiper')) {
		console.log('swiper')
		const swiper = new Swiper('.swiper', {
		  // Optional parameters
		  // direction: 'vertical',
		  loop: true,
		  spaceBetween: 40,

		  // If we need pagination
		  pagination: {
		    el: '.swiper-pagination',
		  },

		  // Navigation arrows
		  // navigation: {
		  //   nextEl: '.swiper-button-next',
		  //   prevEl: '.swiper-button-prev',
		  // },

		  // And if we need scrollbar
		  // scrollbar: {
		  //   el: '.swiper-scrollbar',
		  // },
		});
	}
	
})
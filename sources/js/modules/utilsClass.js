'use strict'

// ----------------------------------------------------
//  Utilities
// ----------------------------------------------------

class Utils {
	static checkIfIE11() {
		const isIE11 = !window.ActiveXObject && 'ActiveXObject' in window
		IEIOT.browser = 'ie11'

		if (isIE11) {
			BODY.classList.add('ie11')
		}
	}

	static checkIfFirefox() {
		const firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
		IEIOT.browser = 'firefox'

		if (firefox) {
			BODY.classList.add('firefox')
		}
	}

	static checkIfSafari() {
		const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
		IEIOT.browser = 'safari'

		if (safari) {
			BODY.classList.add('safari')
		}
	}

	static addBodyClass(className = 'is-visible-modal') {
		BODY.classList.add(className)
	}

	static removeBodyClass(className = 'is-visible-modal') {
		BODY.classList.remove(className)
	}

}

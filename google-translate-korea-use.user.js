// ==UserScript==
// @name		Google Translate Korea Use
// @namespace	https://joyfui.wo.tc/
// @version		2
// @author		joyfuI
// @description	대한민국에서 차단된 구글 번역의 URL 번역 기능을 사용할 수 있게 합니다.
// @homepageURL	https://github.com/joyfuI/google-translate-korea-use
// @downloadURL	https://raw.githubusercontent.com/joyfuI/google-translate-korea-use/master/google-translate-korea-use.user.js
// @include		https://translate.google.*/translate*u=*
// @include		https://translate.google.*.*/translate*u=*
// @include		http://translate.google.*/translate*u=*
// @include		http://translate.google.*.*/translate*u=*
// @run-at		document-start
// @grant		none
// ==/UserScript==

(function () {
	"use strict";
	let url = new URL(location.href);
	if (!url.searchParams.get('prev')) {
		url.search += '&prev=search';
		location.replace(url.href);
	}
})();

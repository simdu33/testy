function do_reddit_up(){

	state = _STATE_WAIT_TO_CLOSE;
	wait_time = 10 - Math.floor(Math.random() * 5);
	chrome.storage.local.get('speedTempo', function (result) {
		if (result.speedTempo) {
			if (result.speedTempo == 'slow') {
				wait_time = 15 - Math.floor(Math.random() * 10);
			}
			if (result.speedTempo == 'normal') {
				wait_time = 10 - Math.floor(Math.random() * 5);
			}
			if (result.speedTempo == 'fast') {
				wait_time = 3 - Math.floor(Math.random() * 3);
			}
		}
	})
	try {
		var div = document.querySelector('shreddit-post').shadowRoot.querySelector('[d="M10 19c-.072 0-.145 0-.218-.006A4.1 4.1 0 0 1 6 14.816V11H2.862a1.751 1.751 0 0 1-1.234-2.993L9.41.28a.836.836 0 0 1 1.18 0l7.782 7.727A1.751 1.751 0 0 1 17.139 11H14v3.882a4.134 4.134 0 0 1-.854 2.592A3.99 3.99 0 0 1 10 19Zm0-17.193L2.685 9.071a.251.251 0 0 0 .177.429H7.5v5.316A2.63 2.63 0 0 0 9.864 17.5a2.441 2.441 0 0 0 1.856-.682A2.478 2.478 0 0 0 12.5 15V9.5h4.639a.25.25 0 0 0 .176-.429L10 1.807Z"]').parentElement.parentElement.click()
	} catch (err) { }

	if (!div) {
		console.log("upvote button not found !");
		return;
	}

	div.click();

}

function do_reddit_mem(){

	state = _STATE_WAIT_TO_CLOSE;
	wait_time = 10 - Math.floor(Math.random() * 5);
	chrome.storage.local.get('speedTempo', function (result) {
		if (result.speedTempo) {
			if (result.speedTempo == 'slow') {
				wait_time = 15 - Math.floor(Math.random() * 10);
			}
			if (result.speedTempo == 'normal') {
				wait_time = 10 - Math.floor(Math.random() * 5);
			}
			if (result.speedTempo == 'fast') {
				wait_time = 3 - Math.floor(Math.random() * 3);
			}
		}
	})
	var hostElement = document.querySelector('shreddit-subreddit-header-buttons');
	var shadowRoot = hostElement.shadowRoot;
	try {
		var div = shadowRoot.querySelector('shreddit-join-button').shadowRoot.querySelector('button')
	} catch (err) { }

	if (!div) {
		console.log("join button not found !");
		return;
	}

	div.click();
}

var reddit_done = false;

function do_reddit(){

	// wait for 5 seconds
	if(tick_count < 2) { return; }

	if(tick_count > _TIMEOUT_IN_SECS) {
		// timeout
		window.close();
	}

	if(reddit_done) { return; }
	reddit_done = true;

	console.log("Reddit done");
	console.log("config.actionType = "+config.actionType);

	if (config.actionType === _ACTION_TYPE_REDDIT_MEM) {

		console.log("do_reddit_mem");
		do_reddit_mem();
		return;
	}

	if (config.actionType === _ACTION_TYPE_REDDIT_UP) {
		console.log("do_reddit_up");
		do_reddit_up();
		return;
	}
}
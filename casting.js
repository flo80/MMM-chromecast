/* Magic Mirror
 * Module: MMM-chromecast
 *
 * By flo
 * MIT Licensed
 *
 * Using https://github.com/DeMille/url-cast-receiver as chromecast receiver
 */


var applicationID = '5CB45E5A'
, namespace = 'urn:x-cast:com.url.cast'
, receiverDead = false
, session = null;


function initializeCastApi() {
    var sessionRequest = new chrome.cast.SessionRequest(applicationID);
    var apiConfig = new chrome.cast.ApiConfig(
        sessionRequest,
        sessionListener,
        receiverListener
    );
    chrome.cast.initialize(
        apiConfig,
        onSuccess.bind(this, 'initialized ok'),
        onErr
    );
}

function onErr(err) {
    console.log('Err: ' + JSON.stringify(err));
}

function onSuccess(msg) {
    console.log('Sucess: ' + msg);
}

function sessionListener(newSession) {
    console.log('New session ID:' + newSession.sessionId);
    session = newSession;
    session.addUpdateListener(sessionUpdateListener);
    session.addMessageListener(namespace, receiveMessage);

    sendMessage({type:"loc",url: document.location.href});
}

function receiverListener(e) {
    (e === 'available')
        ? console.log('receiver found')
        : console.log('no receivers found');
}

function sessionUpdateListener(isAlive) {
    if (!isAlive) {
        session = null;
    }
    console.log('Session is alive?: ', isAlive);
}

function receiveMessage(namespace, msg) {
    console.log('Receiver said: ' + msg);
}

function sendMessage(msg) {
    if (receiverDead || !session) return;
    // send msg
    session.sendMessage(
        namespace,
        msg,
        function() {
            console.log('Message sent: ', msg);
            notify('Message sent: ' + JSON.stringify(msg));
        },
        onErr
    );
    if (msg.type === 'loc') {
        receiverDead = true;
    }
}


function notify(msg) {
    var el = document.getElementById('notifications'),
        notice = document.createElement('div');

    if (el == null) return;

    notice.className = 'notification';
    notice.innerHTML = msg;

    el.appendChild(notice);

    // notice self destruct timer
    setTimeout(function () {
        el.removeChild(notice);
    }, 5000);
}

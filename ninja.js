document.addEventListener('DOMContentLoaded', addIFrame, false);
const urls = {
	lefthost: "https://obs.ninja/beta/?room=ASQ&push=ASQLeftHost&password=Watt&webcam&showonly=preview&stereo=0&label=Left%20Host&style=1&tbr=1000&order=1",
	righthost: "https://obs.ninja/beta/?room=ASQ&push=ASQRightHost&password=Watt&webcam&showonly=preview&stereo=0&label=Right%20Host&style=1&tbr=1000&order=2",
	leftplayer: "https://obs.ninja/beta/?room=ASQ&push=ASQLeftPlayer&password=Watt&webcam&stereo=0&label=Left%20Player&style=1&tbr=1000&order=1",
	rightplayer: "https://obs.ninja/beta/?room=ASQ&push=ASQRightPlayer&password=Watt&webcam&stereo=0&label=Right%20Player&style=1&tbr=1000&order=1",
	previewpush: "https://obs.ninja/beta/?room=ASQ&push=preview&password=Watt&webcam&view&videodevice=OBS&audiodevice=0&noap&label=Stream%20Preview&mute&autostart&quality=0&order=10",
	director: "https://obs.ninja/beta/?director=ASQ&password=Watt&push=director&aec=0&denoise=0&cleandirector&label=Director&audiodevice=VoiceMeeter%20Output&videodevice=Camera&rooms=ASQ,ASQHosts,ASQPlayers",
	default: "https://obs.ninja/beta/?room=ASQ&password=Watt&webcam&stereo=0&label={label}&style=1&tbr=1000",
};

function addIFrame() {
  var path = window.location.pathname;
  path = path.replace(/^\//,'');	// strip leading slash
  path = path.replace(/\.html$/, '');	// strip .html extension
  var url = urls[path] || urls['default'];
  url = url.replace(/\{label\}/, path);	// use the path as a label // TODO: url encoding
  // TODO: fix label out of url and set it as document title
  const iframe = document.createElement("iframe");
  iframe.allow = "autoplay;camera;microphone";
  iframe.allowtransparency = "false";
  iframe.src = url;
  document.body.appendChild(iframe);
}

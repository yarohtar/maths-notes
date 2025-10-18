import style from "./styles/requestreview.scss"

export default (() => {
  function RequestReviewButton() {
    return <div>
      <h3 style="display: inline-block; font-size=1.1rem">Something looks off?</h3>
      <button id="requestReviewButton" class="request-review-button">
        <h4>Click me!</h4>
      </button>
      <p>The button will add this page to my log of things to fix.
      Use it for broken links, equations not rendering correctly, etc.<br />
      Submit other issues on <a href="https://github.com/yarohtar/maths-notes/issues" target="_blank">GitHub</a>.
      </p>
    </div>
  }
 
  RequestReviewButton.afterDOMLoaded = `
  
  document.getElementById('requestReviewButton').onclick = async () => {
    let url = "https://script.google.com/macros/s/AKfycbxdHWBYFMv_qWbh5WCyp3MFWGTGgqeO07MvL2XePLGZnSCX1wfwuSSF1CeNp9mw5gbH/exec?error_page=nothing"
    let apilink = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
    const html = await fetch(apilink).then(r=> r.text());
    console.log(html);
    
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }
  `
  RequestReviewButton.css = style
  
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

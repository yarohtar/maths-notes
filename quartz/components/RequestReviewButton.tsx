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
  
  document.getElementById('requestReviewButton').onclick = () => {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxdHWBYFMv_qWbh5WCyp3MFWGTGgqeO07MvL2XePLGZnSCX1wfwuSSF1CeNp9mw5gbH/exec?error_page=nothing", {
    method: "GET",
    mode: "no-cors" // Important — avoids CORS errors but you won’t see response
    }).then(r=> r.text());
    alert(response);

    const container = document.createElement("div");
    container.innerHTML = response;
    document.body.appendChild(container.firstElementChild);
  }
  `
  RequestReviewButton.css = style
  
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

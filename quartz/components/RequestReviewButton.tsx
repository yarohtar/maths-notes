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
    const full_path = window.location.pathname;
    const trim0 = full_path.startsWith('/') ? full_path.slice(1) : full_path;
    const trim1 = trim0.slice(trim0.indexOf('/') + 1);
    let api_url = "https://script.google.com/macros/s/AKfycbxdHWBYFMv_qWbh5WCyp3MFWGTGgqeO07MvL2XePLGZnSCX1wfwuSSF1CeNp9mw5gbH/exec?error_page=" + trim1;
    window.location.href=api_url;
  }
  `
  RequestReviewButton.css = style
  
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

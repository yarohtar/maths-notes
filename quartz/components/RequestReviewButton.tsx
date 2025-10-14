import style from "./styles/requestreview.scss"

export default (() => {
  function RequestReviewButton() {
    return <div>
      <h3>Something looks off?</h3>
      <button id="requestReviewButton" class="request-review-button">
        <h4 style="text-align: center">Click me!</h4>
      </button>
      <p>The button will add this page to my log of things to fix.
      Use it for broken links, equations not rendering correctly, etc.<br />
      Submit other issues on <a href="https://github.com/yarohtar/maths-notes/issues" target="_blank">GitHub</a>.
      </p>
    </div>
  }
 
  RequestReviewButton.afterDOMLoaded = `
  document.getElementById('requestReviewButton').onclick = () => {
    alert('button clicked!')
  }
  `
  RequestReviewButton.css = style
  
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

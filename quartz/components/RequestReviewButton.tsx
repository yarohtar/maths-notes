export default (() => {
  function RequestReviewButton() {
    return <div>
      <h3>Something looks off?</h3>
      <button id="requestReviewButton">Click me!
      </button>
      <p>*This button will add this page to my log of things to fix.
      This includes broken links, equations not rendering correctly, etc.
      If there is a maths mistake, you're better off contacting me directly.<br>
      You can also submit an issue on <a href="https://github.com/yarohtar/maths-notes/issues" target="_blank">GitHub</a>.</p>
    </div>
  }
 
  RequestReviewButton.afterDOMLoaded = `
  document.getElementById('requestReviewButton').onclick = () => {
    alert('button clicked!')
  }
  `
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

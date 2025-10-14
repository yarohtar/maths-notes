export default (() => {
  function RequestReviewButton() {
    return <div>
      <h2>Equation not loading?</h2>
      <h2>Broken link?</h2>
      <button id="requestReviewButton">
        <h3>Click me!</h3>
      </button>
      <p>This button will add this page to my log of things to fix</p>
    </div>
  }
 
  RequestReviewButton.afterDOMLoaded = `
  document.getElementById('requestReviewButton').onclick = () => {
    alert('button clicked!')
  }
  `
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

export default (() => {
  function RequestReviewButton() {
    return <button id="requestReviewButton">
      <h3>Something not loading? Broken link?</h3>
      <h4>Click me!</h4>
    </button>
  }
 
  RequestReviewButton.afterDOMLoaded = `
  document.getElementById('requestReviewButton').onclick = () => {
    alert('button clicked!')
  }
  `
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

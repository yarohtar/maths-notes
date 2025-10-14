export default (() => {
  function RequestReviewButton() {
    return <button id="btn">Click me!</button>
  }
 
  RequestReviewButton.afterDOMLoaded = `
  document.getElementById('btn').onclick = () => {
    alert('button clicked!')
  }
  `
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

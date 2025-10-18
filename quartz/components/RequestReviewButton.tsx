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
    let api_url = "https://script.google.com/macros/s/AKfycbxdHWBYFMv_qWbh5WCyp3MFWGTGgqeO07MvL2XePLGZnSCX1wfwuSSF1CeNp9mw5gbH/exec?error_page=nothing"
    // let external_url = "https://api.allorigins.win/raw?url=" + encodeURIComponent(api_url);
    window.open(api_url, "_blank");
    
/*
    const iframe = document.createElement("iframe");
    iframe.style.display = "none"; // hidden
    iframe.src = api_url; // the HTML that executes
    document.body.appendChild(iframe);
    
    const html = await fetch(external_url).then(r=> r.text());
    console.log(html);

    const iframe = document.createElement("iframe");
    iframe.style.display = "none"; // or visible if you want to show it
    document.body.appendChild(iframe);

    const doc = iframe.contentDocument;
    doc.open();
    doc.write(html);   // browser parses & executes scripts, loads CSS, etc.
    doc.close();
    */
  }
  `
  RequestReviewButton.css = style
  
  return RequestReviewButton
}) satisfies QuartzComponentConstructor

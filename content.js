(function(){
  const MERGE_MESSSAGE = '@appbooster-bot merge'

  const actions = document.querySelector('#partial-pull-merging .mergeability-details')

  function handleButtonClick(event) {
    event.preventDefault()
    document.getElementById('new_comment_field').value = MERGE_MESSSAGE
    setTimeout(() => { 
      document.querySelector('#partial-new-comment-form-actions .btn').click()
    }, 300)
  }

  function addAppboosterButton() {
    actions.innerHTML += `
      <div class="branch-action-item">
        <button type="button" id="js-ask-appbooster-bot-to-merge" class="btn float-right">Ask @appbooster-bot to merge</button>
        <div class="branch-action-item-icon completeness-indicator completeness-indicator-problem" style="background: transparent;">
        <svg width="16px" class="octicon octicon-alert" viewBox="0 0 32 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-2.000000, -1.000000)" fill="#FC3969" fill-rule="nonzero">
                <g id="logo-appbooster-pink-white" transform="translate(2.000000, 1.000000)">
                    <path d="M18.079096,14.5025126 L16.8135593,10.5979899 L6.14689266,37 L0,37 L11.9322034,8.73869347 L8.13559322,10.9698492 L5.78531073,5.94974874 L18.079096,0 L19.8870056,4.46231156 L22.960452,12.6432161 C22.960452,12.6432161 18.079096,14.5025126 18.079096,14.5025126 Z M32,37 L26.0338983,37 L23.5028249,29.7487437 L11.3898305,29.7487437 L13.740113,23.9849246 L21.5141243,23.9849246 L18.8022599,16.5477387 L23.6836158,14.8743719 L32,37 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </svg>
        </div>
        <h3 class="h4 status-heading">Can be merged by @appbooster-bot</h3>
        <span class="status-meta">
          If you don't wont to think about merging stategies just ask <a href="https://github.com/appbooster/probot">@appbooster-bot</a> to merge this PR
        </span>
      </div>
    `
    const button = document.getElementById('js-ask-appbooster-bot-to-merge')
    button.addEventListener('click', handleButtonClick)
  }

  if (actions) {
    console.log('Add appbooster super-button')
    // TODO: check if user currently can merge this PR
    addAppboosterButton()
  } else {
    console.log('no actions available')
  }
}())

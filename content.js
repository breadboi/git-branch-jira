// We're using this embedded html for our popup menu, as a fetch request to a different file causes a CORS error.
const popupHtml = `
<div style="display: none;" id="gitBranchPopup" class="css-q1guze">
    <div class="css-q1guze" style="position: fixed; inset: 0px auto auto 0px; transform: translate(1337px, 180px);">
        <div data-focus-guard="true" tabindex="0"
            style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
        </div>
        <div data-focus-guard="true" tabindex="1"
            style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
        </div>
        <div data-focus-lock-disabled="false">
            <div class=" css-5a7vsu-container"><span aria-live="polite" aria-atomic="false"
                    aria-relevant="additions text" class="css-7pg0cj-a11yText"></span><span class="css-b5o75w">
                    <div class=" css-wjj10o-control">
                        <div class=" css-1b6odlt">
                            <div class=" css-1cgsk15-placeholder">Select...</div><input id="react-select-2-input"
                                readonly="" tabindex="0" aria-autocomplete="list" class="css-62g3xt-dummyInput"
                                value="">
                        </div>
                        <div class=" css-t5ibhw"><span class=" css-1okebmr-indicatorSeparator"></span>
                            <div class="css-9b8552"><span role="img" aria-label="open" class="css-snhnyn"
                                    style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
                                        width="24" height="24" viewBox="0 0 24 24" role="presentation">
                                        <path
                                            d="M14.823 15.883a5.5 5.5 0 111.06-1.06l2.647 2.647c.293.293.53.59 0 1.06-.53.47-.767.293-1.06 0l-2.647-2.647zM11.5 15.5a4 4 0 100-8 4 4 0 000 8z"
                                            fill="currentColor"></path>
                                    </svg></span></div>
                        </div>
                    </div>
                </span>
                <div>
                    <div class=" css-1ljkvdv">
                        <div class=" css-pjezt-option" id="bugfixButton" tabindex="-1">
                            <div data-test-id="issue-field-status.ui.status-view.transition"
                                data-testid="issue-field-status.ui.status-view.transition">
                                <div class="_1e0c1txw"><span class="_16jlkb7n">Bugfix Branch</span><span
                                        class="_1o9zidpf _1e0c1txw">
                                        <div class="_1e0c116y _4cvr1h6o _19pk1kw7 _2hwx1kw7 _otyr1kw7 _18u01kw7"><span
                                                aria-hidden="true" class="css-1wits42"
                                                style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
                                                    width="24" height="24" viewBox="0 0 24 24" role="presentation">
                                                    <path
                                                        d="M11.793 5.793a.999.999 0 000 1.414L15.586 11H6a1 1 0 000 2h9.586l-3.793 3.793a.999.999 0 000 1.414c.39.39 1.024.39 1.415 0l5.499-5.5a.997.997 0 00.293-.679v-.057a.996.996 0 00-.293-.678l-5.499-5.5a1 1 0 00-1.415 0z"
                                                        fill="currentColor" fill-rule="evenodd"></path>
                                                </svg></span></div><span class="sc-1mohigh-0 IKRjp">
                                            <div data-test-id="issue.fields.status.common.ui.status-lozenge.4"
                                                data-testid="issue.fields.status.common.ui.status-lozenge.4"><span
                                                    style="border-radius: 3px; box-sizing: border-box; display: inline-block; font-size: 11px; font-weight: 700; line-height: 1; max-width: 100%; padding: var(--ds-space-025, 2px) 0; text-transform: uppercase; vertical-align: baseline;"><span id="bugfixSpan"
                                                        style="box-sizing: border-box; display: inline-block; max-width: 200px; overflow: hidden; padding: 0 var(--ds-space-050, 4px); text-overflow: ellipsis; vertical-align: top; white-space: nowrap; width: 100%;">bugfix/ADT-7122</span></span>
                                            </div>
                                        </span>
                                    </span></div>
                            </div>
                        </div>
                        <div class=" css-pjezt-option" id="featureButton" tabindex="-1">
                            <div data-test-id="issue-field-status.ui.status-view.transition"
                                data-testid="issue-field-status.ui.status-view.transition">
                                <div class="_1e0c1txw"><span class="_16jlkb7n">Feature Branch</span><span
                                        class="_1o9zidpf _1e0c1txw">
                                        <div class="_1e0c116y _4cvr1h6o _19pk1kw7 _2hwx1kw7 _otyr1kw7 _18u01kw7"><span
                                                aria-hidden="true" class="css-1wits42"
                                                style="--icon-primary-color: currentColor; --icon-secondary-color: var(--ds-surface, #FFFFFF);"><svg
                                                    width="24" height="24" viewBox="0 0 24 24" role="presentation">
                                                    <path
                                                        d="M11.793 5.793a.999.999 0 000 1.414L15.586 11H6a1 1 0 000 2h9.586l-3.793 3.793a.999.999 0 000 1.414c.39.39 1.024.39 1.415 0l5.499-5.5a.997.997 0 00.293-.679v-.057a.996.996 0 00-.293-.678l-5.499-5.5a1 1 0 00-1.415 0z"
                                                        fill="currentColor" fill-rule="evenodd"></path>
                                                </svg></span></div><span class="sc-1mohigh-0 IKRjp">
                                            <div data-test-id="issue.fields.status.common.ui.status-lozenge.4"
                                                data-testid="issue.fields.status.common.ui.status-lozenge.4"><span
                                                    style="border-radius: 3px; box-sizing: border-box; display: inline-block; font-size: 11px; font-weight: 700; line-height: 1; max-width: 100%; padding: var(--ds-space-025, 2px) 0; text-transform: uppercase; vertical-align: baseline;"><span id="featureSpan"
                                                        style="box-sizing: border-box; display: inline-block; max-width: 200px; overflow: hidden; padding: 0 var(--ds-space-050, 4px); text-overflow: ellipsis; vertical-align: top; white-space: nowrap; width: 100%;">feature/ADT-7122</span></span>
                                            </div>
                                        </span>
                                    </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="_4t3ickbl _x3do1on0">
                <div id="githubViewButton" class="_1e0c1txw _16jlkb7n _4t3i1osq"><button aria-busy="false" class="css-1d18jfq"
                        data-testid="issue-field-status.common.ui.view-workflow.button.view-workflow" tabindex="0"
                        type="button"><span class="css-1gd7hga">View on GitHub</span></button></div>
            </div>
        </div>
        <div data-focus-guard="true" tabindex="0"
            style="width: 1px; height: 0px; padding: 0px; overflow: hidden; position: fixed; top: 1px; left: 1px;">
        </div>
    </div>
</div>

<style>
.css-q1guze {
    background-color: var(--ds-surface-overlay, white);
    border-radius: 4px;
    box-shadow: var(--ds-shadow-overlay, 0 0 0 1px rgba(9, 30, 66, 0.13), 0 4px 11px rgba(9, 30, 66, 0.13));
    max-width: 440px;
    min-width: 220px;
    z-index: 510;
}

.css-5a7vsu-container {
    pointer-events: all;
    position: relative;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.css-7pg0cj-a11yText {
    z-index: 9999;
    border: 0px;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    width: 1px;
    position: absolute;
    overflow: hidden;
    padding: 0px;
    white-space: nowrap;
}

.css-b5o75w {
    width: 1px;
    height: 1px;
    padding: 0px;
    position: absolute;
    border: 0px;
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
    white-space: nowrap;
}

.css-wjj10o-control {
    -webkit-box-align: center;
    align-items: center;
    background-color: var(--ds-background-input, #F4F5F7);
    border-color: var(--ds-border-input, #F4F5F7);
    border-radius: 3px;
    border-style: solid;
    border-width: 2px;
    box-shadow: none;
    cursor: default;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    min-height: 40px;
    position: relative;
    transition: background-color 200ms ease-in-out 0s, border-color 200ms ease-in-out 0s;
    box-sizing: border-box;
    padding: 0px;
    outline: 0px !important;
}

.css-1b6odlt {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    flex: 1 1 0%;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    padding: 2px 6px;
}

.css-1cgsk15-placeholder {
    color: var(--ds-text-subtlest, #5E6C84);
    margin-left: 2px;
    margin-right: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
}

.css-62g3xt-dummyInput {
    background: 0px center;
    border: 0px;
    font-size: inherit;
    outline: 0px;
    padding: 0px;
    width: 1px;
    color: transparent;
    left: -100px;
    opacity: 0;
    position: relative;
    transform: scale(0);
}

.css-t5ibhw {
    -webkit-box-align: center;
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
    padding-right: 4px;
}

.css-1okebmr-indicatorSeparator {
    align-self: stretch;
    background-color: rgb(204, 204, 204);
    margin-bottom: 8px;
    margin-top: 8px;
    width: 1px;
    box-sizing: border-box;
}

.css-9b8552 {
    margin-right: 2px;
    text-align: center;
    width: 32px;
}

.css-snhnyn {
    display: inline-block;
    flex-shrink: 0;
    line-height: 1;
}

.css-1ljkvdv {
    max-height: 300px;
    overflow-y: auto;
    padding-bottom: 8px;
    padding-top: 8px;
    position: relative;
    box-sizing: border-box;
}

.css-pjezt-option {
    color: var(--ds-text, #172B4D);
    cursor: default;
    display: block;
    font-size: inherit;
    padding: 6px 12px;
    width: 100%;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
}

.css-pjezt-option:hover {
    background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
    color: var(--ds-text, #172B4D);
    cursor: default;
    display: block;
    font-size: inherit;
    padding: 6px 12px;
    width: 100%;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    box-shadow: inset 2px 0px 0px var(--ds-border-selected, #0052CC);
}

._1e0c1txw, ._jcfo1txw:active, ._1d5x1txw:focus, ._hpcc1txw:hover {
    display: flex;
}

._1e0c1txw {
    display: flex;
}

._16jlkb7n {
    flex-grow: 1;
}

._1e0c1txw, ._jcfo1txw:active, ._1d5x1txw:focus, ._hpcc1txw:hover {
    display: flex;
}

._1o9zidpf {
    flex-shrink: 0;
}

._1e0c1txw {
    display: flex;
}

._4cvr1h6o, ._7yvl1h6o:active, ._1rdj1h6o:focus, ._el681h6o:hover {
    align-items: center;
}

._18u01kw7 {
    margin-left: inherit;
}

._otyr1kw7 {
    margin-bottom: inherit;
}
._2hwx1kw7 {
    margin-right: inherit;
}
._19pk1kw7 {
    margin-top: inherit;
}
._1e0c116y {
    display: inline-flex;
}
._4cvr1h6o {
    align-items: center;
}

.css-1wits42 {
    display: inline-block;
    flex-shrink: 0;
    line-height: 1;
    width: 16px;
    height: 16px;
}

.IKRjp {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.IKRjp > div {
    display: flex;
    line-height: initial;
    outline: 0px;
}

.IKRjp > div > span {
    padding: var(--ds-space-025,2px) 0;
    vertical-align: text-bottom;
    color: var(--ds-text-information,#0747A6);
    background-color: var(--ds-background-information,#DEEBFF);
}

._4t3ickbl {
    height: 3pc;
}
._x3do1on0 {
    border-top: 2px solid var(--ds-border,#dfe1e6);
}

._1e0c1txw, ._jcfo1txw:active, ._1d5x1txw:focus, ._hpcc1txw:hover {
    display: flex;
}
._4t3i1osq {
    height: 100%;
}

._16jlkb7n {
    flex-grow: 1;
}
._1e0c1txw {
    display: flex;
}

.css-1gd7hga {
    opacity: 1;
    transition: opacity 0.3s ease 0s;
    margin: 0px;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.css-1d18jfq{
    -webkit-box-align: center;
    align-items: center;
    border-width: 0px;
    border-radius: var(--ds-border-radius, 3px);
    box-sizing: border-box;
    display: inline-flex;
    font-size: inherit;
    font-style: normal;
    font-family: inherit;
    font-weight: 500;
    max-width: 100%;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    white-space: nowrap;
    background: var(--ds-background-neutral-subtle, none);
    color: var(--ds-text, #091E42);
    cursor: pointer;
    height: auto;
    line-height: inherit;
    padding: 0 var(--ds-space-150, 12px);
    vertical-align: baseline;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    outline: none;
}

.css-1d18jfq:hover, .css-1d18jfq:active, .css-1d18jfq:focus, .css-1d18jfq:focus-visible{
    -webkit-box-align: center;
    align-items: center;
    border-width: 0px;
    border-radius: var(--ds-border-radius, 3px);
    box-sizing: border-box;
    display: inline-flex;
    font-size: inherit;
    font-style: normal;
    font-family: inherit;
    font-weight: 500;
    max-width: 100%;
    position: relative;
    text-align: left;
    text-decoration: inherit;
    transition: background 0s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
    white-space: nowrap;
    background: var(--ds-background-neutral-subtle-hovered, rgba(9, 30, 66, 0.08));
    color: var(--ds-text, #091E42);
    cursor: pointer;
    height: auto;
    line-height: inherit;
    padding: 0 var(--ds-space-150, 12px);
    vertical-align: baseline;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    outline: none;
}
</style>
`;

// Function to create and style the button
function createBranchButton() {
    const button = document.createElement('button');
    button.id = 'gitBranchButton';
    button.innerText = 'Git Branch';
    button.classList.add('ewxv9o41', 'css-1rkyn4i');

    // Event listener to handle showing the menu
    button.addEventListener('click', function () {
        const menu = document.getElementById('gitBranchPopup');
        if (menu && menu.style.display !== 'block') {
            menu.style.display = 'block';
        } else if (menu && menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    });

    return button;
}

// Function to load the content of the popup HTML file
function loadPopupContentAndInsert(menuButton) {
    const issueNumberElement = document.querySelector('a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]');
    const issueNumber = issueNumberElement.innerText.trim();

    const menuContainer = document.createElement('div');
    menuContainer.innerHTML = popupHtml;
    menuButton.insertAdjacentElement('afterend', menuContainer);

    const bugfixText = `bugfix/${issueNumber}`;
    const featureText = `feature/${issueNumber}`;
    const bugfixButton = document.getElementById('bugfixButton');
    const featureButton = document.getElementById('featureButton');
    const bugfixSpan = document.getElementById('bugfixSpan');
    const featureSpan = document.getElementById('featureSpan');

    bugfixButton.addEventListener('click', function () {
        if (issueNumberElement) {
            navigator.clipboard.writeText(bugfixText);

            // Change button text to "Copied!" temporarily
            bugfixSpan.innerText = 'Copied!';

            // Revert back to the original text after 2 seconds (2000 milliseconds)
            setTimeout(function () {
                bugfixSpan.innerText = bugfixText;
            }, 2000);
        }
    });

    featureButton.addEventListener('click', function () {
        if (issueNumberElement) {
            navigator.clipboard.writeText(featureText);

            // Change button text to "Copied!" temporarily
            featureSpan.innerText = 'Copied!';

            // Revert back to the original text after 2 seconds (2000 milliseconds)
            setTimeout(function () {
                featureSpan.innerText = featureText;
            }, 2000);
        }
    });

    // Add event listener to open GitHub in a new tab
    const githubViewButton = document.getElementById('githubViewButton');
    githubViewButton.addEventListener('click', function () {
        const githubUrl = `https://github.com/search?q=${issueNumber}+is%3Aopen&type=pullrequests`;
        window.open(githubUrl, '_blank');
    });

    // TODO: Add event listener to close the menu when clicking outside of it
}

// Function to find and insert the button into the specified HTML element
function insertButtonWhenAvailable() {
    const targetNode = document.querySelector('div._1e0c1txw._1n261g80._ca0qutpp._n3tdn7od._8mocu2gc');
    const copyButton = document.querySelector('#gitBranchButton');
    if (targetNode && !copyButton) {
        const copyButton = createBranchButton();
        targetNode.appendChild(copyButton);

        const gitBranchButton = document.getElementById('gitBranchButton');
        loadPopupContentAndInsert(gitBranchButton);
    }

    setTimeout(insertButtonWhenAvailable, 100); // Poll every 100 milliseconds
}

// Wait for the page to load and insert the button
window.addEventListener('load', function () {
    insertButtonWhenAvailable();
});



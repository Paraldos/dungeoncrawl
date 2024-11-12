export default class PlaybookTitle {
  getPlaybookTitle(title) {
    return `
        <div class="playbook__playbook-title blackbox">
            <h2>${title}</h2>
            <p>Level</p>
            <input></input>
        </div>
    `;
  }
}

Vue.component('terminal', {
  template: `
  <div>
    <div class="terminal-wrapper">
      <div v-if="isShowLogs" class="logs">
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
        <p class="log-item warn">[flow name]: warn</p>
        <p class="log-item error">[flow name]: error</p>
        <p class="log-item success">[flow name]: logs gfdsgfdsgf gfdsg fdgsfdsgf gfdsgfdsg fdgsfds gfdsgfdsg fdsgfdsgfdsg</p>
      </div>
    </div>
    <div class="flow-footer">
      <button v-on:click="isShowLogs = !isShowLogs" class="button-logs">logs</button>
    </div>
  </div>
  `,
  data: function () {
    return {
      isShowLogs: false
    }
  },
});
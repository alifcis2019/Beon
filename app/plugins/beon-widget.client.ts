export default defineNuxtPlugin(() => {
  if (document.getElementById('beon-widget')) return

  const script = document.createElement('script')
  script.id = 'beon-widget'
  script.src = 'https://app.beon.chat/widget.js'
  script.async = true
  script.setAttribute('data-api-key', 'df73436fd31e7c4a42d187e049f746b5')

  document.body.appendChild(script)
})

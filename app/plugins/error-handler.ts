export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        console.error('Global Error Handler:', error)
        console.error('Vue Instance:', instance)
        console.error('Error Info:', info)

        // Check for specific SyntaxError: 10 or payload errors
        if (error instanceof SyntaxError || (error as any)?.message?.includes('10')) {
            console.warn('Caught potential payload parsing error:', error)
        }
    }

    nuxtApp.hook('app:error', (error) => {
        console.error('Nuxt App Error:', error)
    })
})

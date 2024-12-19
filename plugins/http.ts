import type { RuntimeConfig } from 'nuxt/schema'
import type { $Fetch } from 'ofetch'
import { ofetch } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {
    const config: RuntimeConfig = useRuntimeConfig()
    const baseUri: string = config.public.baseURI || ''

    const request: $Fetch = ofetch.create({
        baseURL: baseUri,
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    nuxtApp.provide('request', request as $Fetch)
})

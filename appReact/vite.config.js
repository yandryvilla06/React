import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({

    manifest:{
      name:"Mi app Vite Pwa",
      short_name:"AppPwa",
      theme_color:"#333333",
      background_color:"#160312",
      description:"una app pwa simple ",
      lang:"es",
      icons:[{
        src:"./assets/favicon.17e50649.svg",
        sizes:"144x144",
        type:"image/svg+xml",
        purpose:"any"
      }]
    }

  })]
})

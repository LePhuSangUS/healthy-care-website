import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import path from 'path';
import alias from '@rollup/plugin-alias';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import reactCssModule from "vite-plugin-react-css-modules";
import lessToJS from 'less-vars-to-js'
import fs from 'fs'
import { visualizer } from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs'
import { dependencies } from './package.json';

const __dirname = path.resolve();
const reactDeps = Object.keys(dependencies).filter(key => key === 'react' || key.startsWith('react-'))

const projectRootDir = resolve(__dirname);

const generateScopedName = "[name]__[local]___[hash:base64:5]";




const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/override-antd-variables.less'), 'utf8')
)




// https://vitejs.dev/config/
export default defineConfig(  ({ command, mode }) => {
    console.log(mode);
    console.log(command);
    return {
      plugins: [
        react(),
        alias(),

        viteCommonjs(),
        // commonjs(),
        reactCssModule({
          generateScopedName,
          filetypes: {
            ".scss": {
              syntax: "postcss-scss",
            },
          },
        }),
        
      ],
      css: {
        modules: {
          generateScopedName,
        },
        preprocessorOptions: {
          less: {
            // 支持内联 JavaScript
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': '#000',
              'border-radius-base': "0.313rem",
              // //Button
              "btn-border-radius-base": "1.25rem",
              "table-header-bg":'#000',
              'table-header-color': '#fff',
              'table-header-sort-active-bg': "#000000b0",

            }
  
          }
        }
      },
      resolve: {
        alias: [
          { find: '@', replacement: resolve(projectRootDir, 'src') },
          { find: '@Components', replacement: resolve(projectRootDir, 'src/components') },
          { find: '@Assets', replacement: resolve(projectRootDir, 'src/assets') },
          { find: '@Configs', replacement: resolve(projectRootDir, 'src/configs') },
          { find: '@Pages', replacement: resolve(projectRootDir, 'src/pages') },
          { find: '@Layouts', replacement: resolve(projectRootDir, 'src/layouts') },
          { find: '@Themes', replacement: resolve(projectRootDir, 'src/themes') },
          { find: '@StyleSheets', replacement: resolve(projectRootDir, 'src/stylesheets') },
          { find: '@Types', replacement: resolve(projectRootDir, 'src/types') },
          { find: '@Metas', replacement: resolve(projectRootDir, 'src/metas') },
          { find: '@Helpers', replacement: resolve(projectRootDir, 'src/helpers') },
          { find: '@Utils', replacement: resolve(projectRootDir, 'src/utils') },
          { find: '@Hooks', replacement: resolve(projectRootDir, 'src/hooks') },
          { find: '@Services', replacement: resolve(projectRootDir, 'src/services') },
          { find: '@Consts', replacement: resolve(projectRootDir, 'src/consts') },
          { find: '@Store', replacement: resolve(projectRootDir, 'src/store') },
          { find: '@Common', replacement: resolve(projectRootDir, 'src/components/common') },
          { find: '@Hocs', replacement: resolve(projectRootDir, 'src/hocs') },
      
        ],
      },

      define: {

      },
      build: {
        sourcemap: false,
        cssCodeSplit: true,
        commonjsOptions: {
          ignoreTryCatch: false,
      },

        rollupOptions: {
          output: {
            manualChunks: {
              vendor:reactDeps ,// ['react', 'react-router-dom', 'react-dom'],
              lodash:["lodash"],
              "antd":["antd"],
               
            },
          },
          plugins: [
            (mode === 'analyze' &&
                visualizer({
                  open: true,
                  filename: 'analyze/stats.html',
                  gzipSize: true,
                  brotliSize: true,
                })),
          ],
    
        },
      },
      // envDir: (mode !== 'production') ? "./environments" : "",
      server: {
        port: 9000,
        hmr:{
          overlay:true//Show Error Browser (Default true)
        },
      //   proxy: {
      //     '/api': {
      //         target: 'https://staging.swop.company',
      //         changeOrigin: true,
      //         secure: false
      //     }
      // }
      },      
    }
  
})

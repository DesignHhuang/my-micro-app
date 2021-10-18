import { createApp } from 'vue'
import App from './App.vue'
import microApp from '@micro-zoe/micro-app';
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router';

microApp.start({
    lifeCycles: {
        created() {
            console.log('created 全局监听')
        },
        beforemount() {
            console.log('beforemount 全局监听')
        },
        mounted() {
            console.log('mounted 全局监听')
        },
        unmount() {
            console.log('unmount 全局监听')
        },
        error() {
            console.log('error 全局监听')
        }
    },
    plugins: {
        modules: {
            react16: [{
                loader(code: string, url: string) {
                    if (code.indexOf('sockjs-node') > -1) {
                        console.log('react16插件', url)
                        code = code.replace('window.location.port', '4004')
                    }
                    return code
                }
            }],
            react17: [{
                loader(code: string, url: string) {
                    if (process.env.NODE_ENV === 'development' && code.indexOf('sockjs-node') > -1) {
                        console.log('react17插件', url)
                        code = code.replace('window.location.port', '3002')
                    }
                    return code
                }
            }],
            vite: [{
                loader(code: string) {
                    if (process.env.NODE_ENV === 'development') {
                        code = code.replace(/(from|import)(\s*['"])(\/micro-app\/vite\/)/g, (all) => {
                            return all.replace('/micro-app/vite/', 'http://localhost:7001/micro-app/vite/')
                        })
                    }
                    return code
                }
            }]
        }
    },
    /**
     * 自定义fetch
     * @param url 静态资源地址
     * @param options fetch请求配置项
     * @returns Promise<string>
     */
    fetch(url: string, options: any, appName: string | null) {
        if (url === 'http://localhost:3001/error.js') {
            return Promise.resolve('')
        }

        let config = null
        if (url === 'http://localhost:3001/micro-app/react16/') {
            config = {
                headers: {
                    'custom-head': 'custom-head',
                }
            }
        }
        if (url === 'http://localhost:8080/') {
            config = {
                // micro-app默认不带cookie，如果需要添加cookie需要配置credentials
                credentials: 'include', // 请求时带上cookie
            }
        }
        console.log(url);
        return fetch(url, Object.assign(options, config)).then((res) => {
            console.log(res)
            return res.text()
        })
    }
})

createApp(App).use(router).use(ElementPlus, { locale: zhCn, }).mount('#app')

/**
 * 复制文本到剪贴板
 * @param text 要复制的文本
 * @returns 复制是否成功
 */
export const copyToClipboard = (text: string): Promise<boolean> => {
    return new Promise(resolve => {
        // 创建一个隐藏按钮来触发用户交互
        const button = document.createElement('button')
        button.style.display = 'none'
        document.body.appendChild(button)

        const copyFn = async () => {
            try {
                // 方法1: 使用现代Clipboard API
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text)
                    console.log('Clipboard API复制成功')
                    resolve(true)
                }
                // 方法2: 使用document.execCommand
                else {
                    const textarea = document.createElement('textarea')
                    textarea.value = text

                    // 改进样式，确保在移动设备上也能正常工作
                    textarea.style.position = 'fixed'
                    textarea.style.opacity = '0'
                    textarea.style.pointerEvents = 'none'
                    textarea.style.left = '0'
                    textarea.style.top = '0'
                    textarea.style.width = '1px'
                    textarea.style.height = '1px'

                    document.body.appendChild(textarea)
                    textarea.focus()
                    textarea.select()

                    const success = document.execCommand('copy')
                    document.body.removeChild(textarea)

                    console.log('execCommand复制' + (success ? '成功' : '失败'))
                    resolve(success)
                }
            } catch (err) {
                console.error('复制到剪贴板失败:', err)
                resolve(false)
            } finally {
                // 清理按钮元素
                document.body.removeChild(button)
            }
        }

        // 添加点击事件监听器
        button.addEventListener('click', copyFn, {once: true})

        // 触发点击
        button.click()
    })
}

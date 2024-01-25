const descriptions = {
    en: "Welcome to the Minecraft server in Class 7! Explore our wonderful world. \nVersion 1.20.2 original, username only supports English and numbers.\nBackup Download:",
    zh: "欢迎来到7班的Minecraft服务器！探索我们的精彩世界\n版本号1.20.2原版，用户名仅支持英文及数字\n备用下载：https://ltcat.lanzoum.com/b0aj6gsid（提取码：pcl2）"
};

function switchLanguage(language) {
    document.getElementById('description').innerText = descriptions[language];
}

function downloadServer(url) {
    // Add your download logic here
    alert("Downloading...");
    function downloadServer(url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = '文件名';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

downloadServer('https://gitee.com/xiaomayisjh/mc/raw/master/Plain%20Craft%20Launcher%202.exe');
}
function copyToClipboard() {
    const h2 = document.querySelector('h2');
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(h2);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    alert('服务器地址已复制到剪贴板，请粘贴至多人游戏的"添加服务器"中');
}
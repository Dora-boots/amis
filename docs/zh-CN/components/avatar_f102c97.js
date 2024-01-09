amis.define('docs/zh-CN/components/avatar.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Avatar 头像",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Avatar 头像",
    "icon": null,
    "order": 27,
    "html": "<div class=\"markdown-body\"><p>用来显示用户头像</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"src\": \"https://suda.cdn.bcebos.com/amis/images/alice-macaw.jpg\"\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%96%87%E5%AD%97\" href=\"#%E6%96%87%E5%AD%97\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>文字</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"text\": \"AM\"\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%9B%BE%E6%A0%87\" href=\"#%E5%9B%BE%E6%A0%87\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图标</h2><p>通过 icon 设置图标</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"icon\": \"fa fa-user\"\n}\n</script></div><div class=\"markdown-body\">\n<blockquote>\n<p>如果同时存在 src、text 和 icon，会优先用 src、接着 text、最后 icon</p>\n</blockquote>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87%E6%88%96%E6%96%87%E5%AD%97\" href=\"#%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87%E6%88%96%E6%96%87%E5%AD%97\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动态图片或文字</h2><p>src、text 都支持变量，可以从上下文中动态获取图片或文字，下面的例子中：</p>\n<ul>\n<li>第一个获取到了，显示正常</li>\n<li>第二个没获取到，因此降级为显示 icon</li>\n<li>第三个图片没获取到，由于 text 优先级比 icon 高，所以显示 text</li>\n</ul>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"data\": {\n    \"myAvatar\": \"https://suda.cdn.bcebos.com/amis/images/alice-macaw.jpg\"\n  },\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"avatar\",\n      \"icon\": \"fa fa-user\",\n      \"src\": \"$myAvatar\"\n    },\n    {\n      \"type\": \"avatar\",\n      \"icon\": \"fa fa-user\",\n      \"src\": \"$other\"\n    },\n    {\n      \"type\": \"avatar\",\n      \"src\": \"$other\",\n      \"icon\": \"fa fa-user\",\n      \"text\": \"avatar\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%96%B9%E5%BD%A2%E5%92%8C%E5%9C%86%E8%A7%92%E5%BD%A2\" href=\"#%E6%96%B9%E5%BD%A2%E5%92%8C%E5%9C%86%E8%A7%92%E5%BD%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>方形和圆角形</h2><p>可以通过 shape 改成方形或圆角形</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"avatar\",\n    \"shape\": \"square\",\n    \"text\": \"AM\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"shape\": \"rounded\",\n    \"text\": \"AM\",\n    \"style\": {\n      \"marginLeft\": \"10px\"\n    }\n  }\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%A4%A7%E5%B0%8F\" href=\"#%E5%A4%A7%E5%B0%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>大小</h2><p>通过 size 可以控制头像的大小</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"avatar\",\n    \"size\": 'large',\n    \"icon\": \"fa fa-user\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"size\": 'default',\n    \"icon\": \"fa fa-user\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"size\": 'small',\n    \"icon\": \"fa fa-user\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"size\": 60,\n    \"src\": \"https://suda.cdn.bcebos.com/amis/images/alice-macaw.jpg\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"src\": \"https://suda.cdn.bcebos.com/amis/images/alice-macaw.jpg\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"size\": 20,\n    \"src\": \"https://suda.cdn.bcebos.com/amis/images/alice-macaw.jpg\"\n  },\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6%E7%B1%BB%E5%9E%8B%E8%B7%9D%E7%A6%BB%E5%B7%A6%E5%8F%B3%E4%B8%A4%E4%BE%A7%E8%BE%B9%E7%95%8C%E5%8D%95%E4%BD%8D%E5%83%8F%E7%B4%A0\" href=\"#%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6%E7%B1%BB%E5%9E%8B%E8%B7%9D%E7%A6%BB%E5%B7%A6%E5%8F%B3%E4%B8%A4%E4%BE%A7%E8%BE%B9%E7%95%8C%E5%8D%95%E4%BD%8D%E5%83%8F%E7%B4%A0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>控制字符类型距离左右两侧边界单位像素</h2><p>通过 gap 可以控制字符类型距离左右两侧边界单位像素</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"avatar\",\n    \"text\": 'ejson',\n    \"gap\": 2\n  },\n  {\n    \"type\": \"avatar\",\n    \"text\": \"ejson\",\n    \"gap\": 7\n  }\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%9B%BE%E7%89%87%E6%8B%89%E4%BC%B8%E6%96%B9%E5%BC%8F\" href=\"#%E5%9B%BE%E7%89%87%E6%8B%89%E4%BC%B8%E6%96%B9%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图片拉伸方式</h2><p>通过 <code>fit</code> 可以控制图片拉伸方式，默认是 <code>&#39;cover&#39;</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"avatar\",\n    \"fit\": \"cover\",\n    \"src\": \"https://suda.cdn.bcebos.com/images/amis/plumeria.jpeg\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"fit\": \"fill\",\n    \"src\": \"https://suda.cdn.bcebos.com/images/amis/plumeria.jpeg\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"fit\": \"contain\",\n    \"src\": \"https://suda.cdn.bcebos.com/images/amis/plumeria.jpeg\"\n  },\n  {\n    \"type\": \"avatar\",\n    \"fit\": \"none\",\n    \"src\": \"https://suda.cdn.bcebos.com/images/amis/plumeria.jpeg\"\n  },\n    {\n    \"type\": \"avatar\",\n    \"fit\": \"scale-down\",\n    \"src\": \"https://suda.cdn.bcebos.com/images/amis/plumeria.jpeg\"\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8E%A7%E5%88%B6%E5%9B%BE%E7%89%87%E6%98%AF%E5%90%A6%E5%85%81%E8%AE%B8%E6%8B%96%E5%8A%A8\" href=\"#%E6%8E%A7%E5%88%B6%E5%9B%BE%E7%89%87%E6%98%AF%E5%90%A6%E5%85%81%E8%AE%B8%E6%8B%96%E5%8A%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>控制图片是否允许拖动</h2><p>通过 draggable 可以控制图片是否允许拖动</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"avatar\",\n    \"fit\": \"cover\",\n    \"src\": \"https://suda.cdn.bcebos.com/images/amis/plumeria.jpeg\",\n    \"draggable\": false\n  },\n    {\n    \"type\": \"avatar\",\n    \"fit\": \"cover\",\n    \"src\": \"https://suda.cdn.bcebos.com/images/amis/plumeria.jpeg\",\n    \"draggable\": true\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5%E5%90%8E-%E9%80%9A%E8%BF%87-onerror-%E6%8E%A7%E5%88%B6%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C-text-icon-%E7%BD%AE%E6%8D%A2\" href=\"#%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5%E5%90%8E-%E9%80%9A%E8%BF%87-onerror-%E6%8E%A7%E5%88%B6%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C-text-icon-%E7%BD%AE%E6%8D%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>图片加载失败后，通过 onError 控制是否进行 text、icon 置换</h2><blockquote>\n<p>如果同时存在 text 和 icon，会优先用 text、接着 icon</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"src\": \"empty\",\n  \"text\": \"avatar\",\n  \"onError\": \"return true;\"\n},\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%A0%B7%E5%BC%8F\" href=\"#%E6%A0%B7%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>样式</h2><p>可以通过 style 来控制背景及文字颜色</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"text\": \"AM\",\n  \"style\": {\n    \"background\": \"#DB3E35\",\n    \"color\": \"#FFFFFF\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 dom 的类名</td>\n</tr>\n<tr>\n<td>style</td>\n<td><code>object</code></td>\n<td></td>\n<td>外层 dom 的样式</td>\n</tr>\n<tr>\n<td>fit</td>\n<td><code>&#39;contain&#39;</code> | <code>&#39;cover&#39;</code> | <code>&#39;fill&#39;</code> | <code>&#39;none&#39;</code> | <code>&#39;scale-down&#39;</code></td>\n<td><code>&#39;cover&#39;</code></td>\n<td>具体细节可以参考 MDN <a href=\"https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit\">文档</a></td>\n</tr>\n<tr>\n<td>src</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片地址</td>\n</tr>\n<tr>\n<td>text</td>\n<td><code>string</code></td>\n<td></td>\n<td>文字</td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>string</code></td>\n<td><code>&#39;fa fa-user&#39;</code></td>\n<td>图标</td>\n</tr>\n<tr>\n<td>shape</td>\n<td><code>&#39;circle&#39;</code> | <code>&#39;square&#39;</code> | <code>&#39;rounded&#39;</code></td>\n<td><code>&#39;circle&#39;</code></td>\n<td>形状，有三种 <code>&#39;circle&#39;</code> （圆形）、<code>&#39;square&#39;</code>（正方形）、<code>&#39;rounded&#39;</code>（圆角）</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>number</code> | <code>&#39;default&#39;</code> | <code>&#39;normal&#39;</code> | <code>&#39;small&#39;</code></td>\n<td><code>&#39;default&#39;</code></td>\n<td><code>&#39;default&#39; | &#39;normal&#39; | &#39;small&#39;</code>三种字符串类型代表不同大小（分别是 48、40、32），也可以直接数字表示</td>\n</tr>\n<tr>\n<td>gap</td>\n<td><code>number</code></td>\n<td>4</td>\n<td>控制字符类型距离左右两侧边界单位像素</td>\n</tr>\n<tr>\n<td>alt</td>\n<td><code>number</code></td>\n<td></td>\n<td>图像无法显示时的替代文本</td>\n</tr>\n<tr>\n<td>draggable</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>图片是否允许拖动</td>\n</tr>\n<tr>\n<td>crossOrigin</td>\n<td><code>&#39;anonymous&#39;</code> | <code>&#39;use-credentials&#39;</code> | <code>&#39;&#39;</code></td>\n<td></td>\n<td>图片的 <code>CORS</code> 属性设置</td>\n</tr>\n<tr>\n<td>onError</td>\n<td><code>string</code></td>\n<td></td>\n<td>图片加载失败的字符串，这个字符串是一个 New Function 内部执行的字符串，参数是 event（使用 event.nativeEvent 获取原生 dom 事件），这个字符串需要返回 boolean 值。设置 <code>&quot;return ture;&quot;</code> 会在图片加载失败后，使用 <code>text</code> 或者 <code>icon</code> 代表的信息来进行替换。目前图片加载失败默认是不进行置换。注意：图片加载失败，不包括$获取数据为空情况</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><blockquote>\n<p>6.1.0 及以上版本</p>\n</blockquote>\n<p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>click</td>\n<td>-</td>\n<td>点击时触发</td>\n</tr>\n<tr>\n<td>mouseenter</td>\n<td>-</td>\n<td>鼠标移入时触发</td>\n</tr>\n<tr>\n<td>mouseleave</td>\n<td>-</td>\n<td>鼠标移出时触发</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"click\" href=\"#click\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>click</h3><p>鼠标点击。可以尝试通过<code>${event.context.nativeEvent}</code>获取鼠标事件对象。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"onEvent\": {\n    \"click\": {\n      \"actions\": [\n        {\n          \"actionType\": \"toast\",\n          \"args\": {\n            \"msgType\": \"info\",\n            \"msg\": \"${event.context.nativeEvent.type}\"\n          }\n        }\n      ]\n    }\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"mouseenter\" href=\"#mouseenter\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>mouseenter</h3><p>鼠标移入。可以尝试通过<code>${event.context.nativeEvent}</code>获取鼠标事件对象。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"onEvent\": {\n    \"mouseenter\": {\n      \"actions\": [\n        {\n          \"actionType\": \"toast\",\n          \"args\": {\n            \"msgType\": \"info\",\n            \"msg\": \"${event.context.nativeEvent.type}\"\n          }\n        }\n      ]\n    }\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"mouseleave\" href=\"#mouseleave\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>mouseleave</h3><p>鼠标移出。可以尝试通过<code>${event.context.nativeEvent}</code>获取鼠标事件对象。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"avatar\",\n  \"onEvent\": {\n    \"mouseleave\": {\n      \"actions\": [\n        {\n          \"actionType\": \"toast\",\n          \"args\": {\n            \"msgType\": \"info\",\n            \"msg\": \"${event.context.nativeEvent.type}\"\n          }\n        }\n      ]\n    }\n  }\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "文字",
          "fragment": "%E6%96%87%E5%AD%97",
          "fullPath": "#%E6%96%87%E5%AD%97",
          "level": 2
        },
        {
          "label": "图标",
          "fragment": "%E5%9B%BE%E6%A0%87",
          "fullPath": "#%E5%9B%BE%E6%A0%87",
          "level": 2
        },
        {
          "label": "动态图片或文字",
          "fragment": "%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87%E6%88%96%E6%96%87%E5%AD%97",
          "fullPath": "#%E5%8A%A8%E6%80%81%E5%9B%BE%E7%89%87%E6%88%96%E6%96%87%E5%AD%97",
          "level": 2
        },
        {
          "label": "方形和圆角形",
          "fragment": "%E6%96%B9%E5%BD%A2%E5%92%8C%E5%9C%86%E8%A7%92%E5%BD%A2",
          "fullPath": "#%E6%96%B9%E5%BD%A2%E5%92%8C%E5%9C%86%E8%A7%92%E5%BD%A2",
          "level": 2
        },
        {
          "label": "大小",
          "fragment": "%E5%A4%A7%E5%B0%8F",
          "fullPath": "#%E5%A4%A7%E5%B0%8F",
          "level": 2
        },
        {
          "label": "控制字符类型距离左右两侧边界单位像素",
          "fragment": "%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6%E7%B1%BB%E5%9E%8B%E8%B7%9D%E7%A6%BB%E5%B7%A6%E5%8F%B3%E4%B8%A4%E4%BE%A7%E8%BE%B9%E7%95%8C%E5%8D%95%E4%BD%8D%E5%83%8F%E7%B4%A0",
          "fullPath": "#%E6%8E%A7%E5%88%B6%E5%AD%97%E7%AC%A6%E7%B1%BB%E5%9E%8B%E8%B7%9D%E7%A6%BB%E5%B7%A6%E5%8F%B3%E4%B8%A4%E4%BE%A7%E8%BE%B9%E7%95%8C%E5%8D%95%E4%BD%8D%E5%83%8F%E7%B4%A0",
          "level": 2
        },
        {
          "label": "图片拉伸方式",
          "fragment": "%E5%9B%BE%E7%89%87%E6%8B%89%E4%BC%B8%E6%96%B9%E5%BC%8F",
          "fullPath": "#%E5%9B%BE%E7%89%87%E6%8B%89%E4%BC%B8%E6%96%B9%E5%BC%8F",
          "level": 2
        },
        {
          "label": "控制图片是否允许拖动",
          "fragment": "%E6%8E%A7%E5%88%B6%E5%9B%BE%E7%89%87%E6%98%AF%E5%90%A6%E5%85%81%E8%AE%B8%E6%8B%96%E5%8A%A8",
          "fullPath": "#%E6%8E%A7%E5%88%B6%E5%9B%BE%E7%89%87%E6%98%AF%E5%90%A6%E5%85%81%E8%AE%B8%E6%8B%96%E5%8A%A8",
          "level": 2
        },
        {
          "label": "图片加载失败后，通过 onError 控制是否进行 text、icon 置换",
          "fragment": "%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5%E5%90%8E-%E9%80%9A%E8%BF%87-onerror-%E6%8E%A7%E5%88%B6%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C-text-icon-%E7%BD%AE%E6%8D%A2",
          "fullPath": "#%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5%E5%90%8E-%E9%80%9A%E8%BF%87-onerror-%E6%8E%A7%E5%88%B6%E6%98%AF%E5%90%A6%E8%BF%9B%E8%A1%8C-text-icon-%E7%BD%AE%E6%8D%A2",
          "level": 2
        },
        {
          "label": "样式",
          "fragment": "%E6%A0%B7%E5%BC%8F",
          "fullPath": "#%E6%A0%B7%E5%BC%8F",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "click",
              "fragment": "click",
              "fullPath": "#click",
              "level": 3
            },
            {
              "label": "mouseenter",
              "fragment": "mouseenter",
              "fullPath": "#mouseenter",
              "level": 3
            },
            {
              "label": "mouseleave",
              "fragment": "mouseleave",
              "fullPath": "#mouseleave",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});

amis.define('docs/zh-CN/components/form/input-text.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputText 输入框",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputText 输入框",
    "icon": null,
    "order": 56,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E5%90%8C%E8%BE%B9%E6%A1%86%E9%A3%8E%E6%A0%BC\" href=\"#%E4%B8%8D%E5%90%8C%E8%BE%B9%E6%A1%86%E9%A3%8E%E6%A0%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不同边框风格</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"text-half-border\",\n            \"type\": \"input-text\",\n            \"label\": \"半边框\",\n            \"borderMode\": \"half\",\n            \"inputControlClassName\": \"bg-gray-100\"\n        },\n        {\n            \"name\": \"text-no-border\",\n            \"type\": \"input-text\",\n            \"label\": \"无边框\",\n            \"borderMode\": \"none\",\n            \"nativeInputClassName\": \"focus:text-indigo-700\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B\" href=\"#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不同类型</h2><p>配置<code>type</code>可以支持不同格式的文本输入框</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"input-url\",\n            \"name\": \"url\",\n            \"label\": \"链接\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"input-email\",\n            \"name\": \"email\",\n            \"label\": \"邮箱\"\n        },\n        {\n            \"type\": \"divider\"\n        },\n        {\n            \"type\": \"input-password\",\n            \"name\": \"password\",\n            \"label\": \"密码\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6\" href=\"#%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>附加组件</h2><p>可以配置<code>addOn</code>，附带附加组件，比如 button，还能设置 icon。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"addOn\": {\n                \"type\": \"button\",\n                \"icon\": \"https://suda.cdn.bcebos.com/images%2F2021-01%2Fsearch.svg\",\n                \"label\": \"搜索\"\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AF%E6%B8%85%E9%99%A4\" href=\"#%E5%8F%AF%E6%B8%85%E9%99%A4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>可清除</h2><p>通过 <code>&quot;clearable&quot;: true</code> 可以设置文本可清除</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"clearable\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F\" href=\"#%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选择器模式</h2><p>配置<code>options</code>即可支持选择器模式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"options\": [\n                {\n                    \"label\": \"aa\",\n                    \"value\": \"aa\"\n                },\n                {\n                    \"label\": \"bb\",\n                    \"value\": \"bb\"\n                },\n                {\n                    \"label\": \"cc\",\n                    \"value\": \"cc\"\n                },\n                {\n                    \"label\": \"dd\",\n                    \"value\": \"dd\"\n                }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>选择器模式下，支持部分选择器组件支持的配置项，具体请查看下面的属性表。如：source 和 autoComplete 都支持</p>\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E5%8F%AA%E8%83%BD%E9%80%89%E6%8B%A9%E9%A2%84%E8%AE%BE\" href=\"#%E9%99%90%E5%88%B6%E5%8F%AA%E8%83%BD%E9%80%89%E6%8B%A9%E9%A2%84%E8%AE%BE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制只能选择预设</h2><p>配置 options 并且配置 creatable: false</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"creatable\": false,\n            \"options\": [\n                {\n                    \"label\": \"OptionA\",\n                    \"value\": \"a\"\n                },\n                {\n                    \"label\": \"OptionB\",\n                    \"value\": \"b\"\n                },\n                {\n                    \"label\": \"OptionC\",\n                    \"value\": \"c\"\n                },\n                {\n                    \"label\": \"OptionD\",\n                    \"value\": \"d\"\n                }\n            ]\n\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F\" href=\"#%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>多选模式</h2><p>配置 multiple: true</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"multiple\": true,\n            \"options\": [\n                {\n                    \"label\": \"OptionA\",\n                    \"value\": \"a\"\n                },\n                {\n                    \"label\": \"OptionB (with long suffix for testing ellipsis)\",\n                    \"value\": \"b\"\n                },\n                {\n                    \"label\": \"OptionC\",\n                    \"value\": \"c\"\n                },\n                {\n                    \"label\": \"OptionD\",\n                    \"value\": \"d\"\n                }\n            ]\n\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%89%8D%E7%BC%80%E5%92%8C%E5%90%8E%E7%BC%80\" href=\"#%E5%89%8D%E7%BC%80%E5%92%8C%E5%90%8E%E7%BC%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>前缀和后缀</h2><p><code>prefix</code> 和 <code>suffix</code> 属性支持数据映射。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"data\": {\n        \"unit\": \"MB\"\n    },\n    \"body\": [\n        {\n            \"name\": \"text\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"prefix\": \"￥\",\n            \"suffix\": \"RMB\"\n        },\n        {\n            \"name\": \"prefix\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"prefix\": \"￥\"\n        },\n        {\n            \"name\": \"suffix\",\n            \"type\": \"input-text\",\n            \"label\": \"text\",\n            \"suffix\": \"${unit}\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E8%AE%A1%E6%95%B0%E5%99%A8\" href=\"#%E6%98%BE%E7%A4%BA%E8%AE%A1%E6%95%B0%E5%99%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示计数器</h2><p>配置<code>&quot;showCounter&quot;: true</code>后输入框将显示计数器，一般会配合<code>maxLength</code>属性以限制输入长度，如果不设置<code>maxLength</code>，则仅展示计数器，并不会限制用户的输入长度。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"name\": \"a\",\n            \"type\": \"input-text\",\n            \"label\": \"A\",\n            \"showCounter\": true,\n            \"placeholder\": \"请输入\",\n            \"showCounter\": true,\n            \"options\": [\n                {\n                    \"label\": \"aa\",\n                    \"value\": \"aa\"\n                },\n                {\n                    \"label\": \"bb\",\n                    \"value\": \"bb\"\n                },\n                {\n                    \"label\": \"cc\",\n                    \"value\": \"cc\"\n                },\n                {\n                    \"label\": \"dd\",\n                    \"value\": \"dd\"\n                }\n            ]\n        },\n        {\n            \"name\": \"b\",\n            \"type\": \"input-text\",\n            \"label\": \"B\",\n            \"showCounter\": true,\n            \"maxLength\": 20,\n            \"placeholder\": \"请输入\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%8A%A8%E8%BD%AC%E6%8D%A2%E5%80%BC\" href=\"#%E8%87%AA%E5%8A%A8%E8%BD%AC%E6%8D%A2%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自动转换值</h2><p>可以配置 transform，来自动转换值，支持转小写或大写。</p>\n<blockquote>\n<p>注意下面第一个示例，只有输入的内容才会触发 transform，下拉框选中的值是不会处理的。</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"name\": \"lower\",\n      \"type\": \"input-text\",\n      \"label\": \"转换小写\",\n      \"placeholder\": \"输入的英文自动转为小写\",\n      \"transform\": {\n        \"lowerCase\": true\n      },\n      \"multiple\": true,\n      \"options\": [\"APPLE\", \"ORANGE\", \"WATERMELON\"],\n    },\n    {\n      \"name\": \"upper\",\n      \"type\": \"input-text\",\n      \"label\": \"转换大写\",\n      \"placeholder\": \"输入的英文自动转为大写\",\n      \"transform\": {\n        \"upperCase\": true\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%E4%B8%BA%E7%A9%BA%E6%97%B6%E5%8E%BB%E6%8E%89%E8%BF%99%E4%B8%AA%E5%80%BC\" href=\"#%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%E4%B8%BA%E7%A9%BA%E6%97%B6%E5%8E%BB%E6%8E%89%E8%BF%99%E4%B8%AA%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>文本内容为空时去掉这个值</h2><blockquote>\n<p>2.4.0 及以上版本</p>\n</blockquote>\n<p>如果设置了 <code>&quot;clearValueOnEmpty&quot;: true</code>，当输入框的值清空时，提交的表单项里就不会有这个值</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"name\": \"text\",\n      \"type\": \"input-text\",\n      \"label\": \"内容为空时清理这个表单项\",\n      \"value\": \"v\",\n      \"clearValueOnEmpty\": true\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8\" href=\"#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自动补全</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"name\": \"name\",\n            \"type\": \"input-text\",\n            \"label\": \"自动补全\",\n            \"autoComplete\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/options/autoComplete?term=$term\",\n            \"placeholder\": \"请输入\",\n            \"multiple\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>当做选择器表单项使用时，除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>options</td>\n<td><code>Array&lt;object&gt;</code>或<code>Array&lt;string&gt;</code></td>\n<td></td>\n<td><a href=\"./options#%E9%9D%99%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-options\">选项组</a></td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code>或 <a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-source\">动态选项组</a></td>\n</tr>\n<tr>\n<td>autoComplete</td>\n<td><code>string</code>或 <a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8-autocomplete\">自动补全</a></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td></td>\n<td><a href=\"./options#%E5%A4%9A%E9%80%89-multiple\">是否多选</a></td>\n</tr>\n<tr>\n<td>delimiter</td>\n<td><code>string</code></td>\n<td><code>,</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n</tr>\n<tr>\n<td>labelField</td>\n<td><code>string</code></td>\n<td><code>&quot;label&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield\">选项标签字段</a></td>\n</tr>\n<tr>\n<td>valueField</td>\n<td><code>string</code></td>\n<td><code>&quot;value&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E5%80%BC%E5%AD%97%E6%AE%B5-valuefield\">选项值字段</a></td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n</tr>\n<tr>\n<td>addOn</td>\n<td><code>addOn</code></td>\n<td></td>\n<td>输入框附加组件，比如附带一个提示文字，或者附带一个提交按钮。</td>\n</tr>\n<tr>\n<td>addOn.type</td>\n<td><code>string</code></td>\n<td></td>\n<td>请选择 <code>text</code> 、<code>button</code> 或者 <code>submit</code>。</td>\n</tr>\n<tr>\n<td>addOn.label</td>\n<td><code>string</code></td>\n<td></td>\n<td>文字说明</td>\n</tr>\n<tr>\n<td>addOn.position</td>\n<td><code>&#39;left&#39; | &#39;right&#39;</code></td>\n<td><code>&#39;right&#39;</code></td>\n<td>addOn 位置</td>\n</tr>\n<tr>\n<td>addOn.xxx</td>\n<td><code>string</code></td>\n<td></td>\n<td>其他参数请参考按钮文档</td>\n</tr>\n<tr>\n<td>trimContents</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否去除首尾空白文本。</td>\n</tr>\n<tr>\n<td>clearValueOnEmpty</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>文本内容为空时去掉这个值</td>\n</tr>\n<tr>\n<td>creatable</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否可以创建，默认为可以，除非设置为 false 即只能选择选项中的值</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否可清除</td>\n</tr>\n<tr>\n<td>resetValue</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>清除后设置此配置项给定的值。</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>前缀</td>\n</tr>\n<tr>\n<td>suffix</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>后缀</td>\n</tr>\n<tr>\n<td>showCounter</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否显示计数器</td>\n</tr>\n<tr>\n<td>minLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制最小字数</td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td><code>number</code></td>\n<td></td>\n<td>限制最大字数</td>\n</tr>\n<tr>\n<td>transform</td>\n<td><code>object</code></td>\n<td></td>\n<td>自动转换值，可选 <code>transform: { lowerCase: true, upperCase: true }</code></td>\n</tr>\n<tr>\n<td>borderMode</td>\n<td><code>&quot;full&quot;| &quot;half&quot; | &quot;none&quot;</code></td>\n<td><code>&quot;full&quot;</code></td>\n<td>输入框边框模式，全边框，还是半边框，或者没边框。</td>\n</tr>\n<tr>\n<td>inputControlClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>control 节点的 CSS 类名</td>\n</tr>\n<tr>\n<td>nativeInputClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>原生 input 标签的 CSS 类名</td>\n</tr>\n<tr>\n<td>nativeAutoComplete</td>\n<td><code>string</code></td>\n<td><code>off</code></td>\n<td>原生 input 标签的 <code>autoComplete</code> 属性，比如配置集成 <code>new-password</code></td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>click</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>点击输入框时触发，只针对选择器模式的输入框有效</td>\n</tr>\n<tr>\n<td>enter</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>回车时触发，只针对选择器模式的输入框有效</td>\n</tr>\n<tr>\n<td>focus</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>输入框获取焦点时触发</td>\n</tr>\n<tr>\n<td>blur</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>输入框失去焦点时触发</td>\n</tr>\n<tr>\n<td>change</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>值变化时触发</td>\n</tr>\n<tr>\n<td>clear</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>点击清除按钮时触发</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"enter\" href=\"#enter\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>enter</h3><p>选择器模式下，回车时触发。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n        \"name\": \"text\",\n        \"type\": \"input-text\",\n        \"label\": \"text\",\n        \"options\": [\n          {\n            \"label\": \"aa\",\n            \"value\": \"aa\"\n          },\n          {\n            \"label\": \"bb\",\n            \"value\": \"bb\"\n          }\n        ],\n        \"onEvent\": {\n            \"enter\": {\n                \"actions\": [\n                    {\n                      \"actionType\": \"toast\",\n                      \"args\": {\n                          \"msg\": \"${event.data.value|json}\"\n                      }\n                    }\n                ]\n            }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"focus\" href=\"#focus\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>focus</h3><p>当设置 <code>showInput</code> 为 true 时，输入框获取焦点时触发。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n        \"name\": \"text\",\n        \"type\": \"input-text\",\n        \"label\": \"text\",\n        \"onEvent\": {\n            \"focus\": {\n                \"actions\": [\n                    {\n                      \"actionType\": \"toast\",\n                      \"args\": {\n                          \"msg\": \"${event.data.value|json}\"\n                      }\n                    }\n                ]\n            }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"blur\" href=\"#blur\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>blur</h3><p>当设置 <code>showInput</code> 为 true 时，输入框失去焦点时触发。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n        \"name\": \"text\",\n        \"type\": \"input-text\",\n        \"label\": \"text\",\n        \"onEvent\": {\n            \"blur\": {\n                \"actions\": [\n                    {\n                      \"actionType\": \"toast\",\n                      \"args\": {\n                          \"msg\": \"${event.data.value|json}\"\n                      }\n                    }\n                ]\n            }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"change\" href=\"#change\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>change</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n        \"name\": \"text\",\n        \"type\": \"input-text\",\n        \"label\": \"text\",\n        \"onEvent\": {\n            \"change\": {\n                \"actions\": [\n                    {\n                      \"actionType\": \"toast\",\n                      \"args\": {\n                          \"msg\": \"${event.data.value|json}\"\n                      }\n                    }\n                ]\n            }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"clear\" href=\"#clear\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>clear</h3><p>配置<code>clearable</code>为 true，点击清除按钮时触发。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n      {\n        \"name\": \"text\",\n        \"type\": \"input-text\",\n        \"label\": \"text\",\n        \"clearable\": true,\n        \"onEvent\": {\n            \"clear\": {\n                \"actions\": [\n                    {\n                      \"actionType\": \"toast\",\n                      \"args\": {\n                          \"msg\": \"${event.data.value|json}\"\n                      }\n                    }\n                ]\n            }\n        }\n      }\n    ]\n  }\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>重置</td>\n</tr>\n<tr>\n<td>focus</td>\n<td>-</td>\n<td>获取焦点</td>\n</tr>\n<tr>\n<td>reload</td>\n<td>-</td>\n<td>刷新（重新加载），只针对配置了<code>source</code>的输入框有效</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> 更新的值</td>\n<td>更新数据，开启<code>multiple</code>多选时用<code>,</code>分隔</td>\n</tr>\n</tbody></table>\n</div>",
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
          "label": "不同边框风格",
          "fragment": "%E4%B8%8D%E5%90%8C%E8%BE%B9%E6%A1%86%E9%A3%8E%E6%A0%BC",
          "fullPath": "#%E4%B8%8D%E5%90%8C%E8%BE%B9%E6%A1%86%E9%A3%8E%E6%A0%BC",
          "level": 2
        },
        {
          "label": "不同类型",
          "fragment": "%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B",
          "fullPath": "#%E4%B8%8D%E5%90%8C%E7%B1%BB%E5%9E%8B",
          "level": 2
        },
        {
          "label": "附加组件",
          "fragment": "%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E9%99%84%E5%8A%A0%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "可清除",
          "fragment": "%E5%8F%AF%E6%B8%85%E9%99%A4",
          "fullPath": "#%E5%8F%AF%E6%B8%85%E9%99%A4",
          "level": 2
        },
        {
          "label": "选择器模式",
          "fragment": "%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E9%80%89%E6%8B%A9%E5%99%A8%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "限制只能选择预设",
          "fragment": "%E9%99%90%E5%88%B6%E5%8F%AA%E8%83%BD%E9%80%89%E6%8B%A9%E9%A2%84%E8%AE%BE",
          "fullPath": "#%E9%99%90%E5%88%B6%E5%8F%AA%E8%83%BD%E9%80%89%E6%8B%A9%E9%A2%84%E8%AE%BE",
          "level": 2
        },
        {
          "label": "多选模式",
          "fragment": "%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "前缀和后缀",
          "fragment": "%E5%89%8D%E7%BC%80%E5%92%8C%E5%90%8E%E7%BC%80",
          "fullPath": "#%E5%89%8D%E7%BC%80%E5%92%8C%E5%90%8E%E7%BC%80",
          "level": 2
        },
        {
          "label": "显示计数器",
          "fragment": "%E6%98%BE%E7%A4%BA%E8%AE%A1%E6%95%B0%E5%99%A8",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E8%AE%A1%E6%95%B0%E5%99%A8",
          "level": 2
        },
        {
          "label": "自动转换值",
          "fragment": "%E8%87%AA%E5%8A%A8%E8%BD%AC%E6%8D%A2%E5%80%BC",
          "fullPath": "#%E8%87%AA%E5%8A%A8%E8%BD%AC%E6%8D%A2%E5%80%BC",
          "level": 2
        },
        {
          "label": "文本内容为空时去掉这个值",
          "fragment": "%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%E4%B8%BA%E7%A9%BA%E6%97%B6%E5%8E%BB%E6%8E%89%E8%BF%99%E4%B8%AA%E5%80%BC",
          "fullPath": "#%E6%96%87%E6%9C%AC%E5%86%85%E5%AE%B9%E4%B8%BA%E7%A9%BA%E6%97%B6%E5%8E%BB%E6%8E%89%E8%BF%99%E4%B8%AA%E5%80%BC",
          "level": 2
        },
        {
          "label": "自动补全",
          "fragment": "%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8",
          "fullPath": "#%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8",
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
              "label": "enter",
              "fragment": "enter",
              "fullPath": "#enter",
              "level": 3
            },
            {
              "label": "focus",
              "fragment": "focus",
              "fullPath": "#focus",
              "level": 3
            },
            {
              "label": "blur",
              "fragment": "blur",
              "fullPath": "#blur",
              "level": 3
            },
            {
              "label": "change",
              "fragment": "change",
              "fullPath": "#change",
              "level": 3
            },
            {
              "label": "clear",
              "fragment": "clear",
              "fullPath": "#clear",
              "level": 3
            }
          ]
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});

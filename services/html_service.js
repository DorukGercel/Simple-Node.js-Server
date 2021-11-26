module.exports = {
    pageFormer : (pageName) => {
        return `<head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>${pageName} Sayfadasınız!</h1>
                </body>`
    },
    errorFormer : (code, message) => {
        return `<head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <h1>${code}: ${message}!</h1>
                </body>`
    },
}
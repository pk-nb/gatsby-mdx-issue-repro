// Replacing '/' would result in empty string which is invalid
const replacePath = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    const newPage = Object.assign({}, page)
    newPage.path = replacePath(newPage.path)
    if (page.path !== newPage.path) {
      deletePage(page)
      createPage(newPage)
    }

    resolve()
  })
}

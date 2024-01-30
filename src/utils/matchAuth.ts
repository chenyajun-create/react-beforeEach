import routes from '../router'
function matchRoute(path: String) {
  const findPath = routes.find((val) => val.path === path)
  if (!findPath) {
    return
  }
  return findPath
}
export default matchRoute

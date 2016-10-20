function alternatingSampleFactory(window) {
  var alternatingSample = function(key, items) {
    if (items.length == 0) {
      return null;
    }
    
    var localStorageKey = 'alternating-sample:' + key
    var state = parseInt(window.localStorage[localStorageKey])
    var newState
    if (!isNaN(state) && state < items.length) {
      newState = Math.floor(Math.random() * (items.length - 1))
      if (newState >= state) {
        ++newState
      }
    } else {
      newState = Math.floor(Math.random() * items.length)
    }
    window.localStorage.setItem(localStorageKey, newState)
    return items[newState]
  }
  return alternatingSample
}

module.exports = alternatingSampleFactory

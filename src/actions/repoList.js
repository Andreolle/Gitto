export default {
    list(list) {
         return {
              type: 'POST_ITEM',
              payload: list
         }
    }
}
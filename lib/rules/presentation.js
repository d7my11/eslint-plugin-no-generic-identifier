const FORBIDDEN = [
  'Presentation',
  'presentation',
]

module.exports = {
  meta: {
    type: "suggestion",
    fixable: "code",
  },
  create: function(context) {
    return {
      Identifier(node) {
        if (FORBIDDEN.includes(node.name)) {
          context.report({
            node,
            message: `Avoid using '${node.name}' as an identifier`,
          })
        }
      }
    }
  }
}
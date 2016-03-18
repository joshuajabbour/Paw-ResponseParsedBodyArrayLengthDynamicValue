(function () {
  var ResponseParsedBodyArrayLengthDynamicValue = function () {
    this.title = function () {
      return 'Response Parsed Body'
    }

    this.text = function () {
      return this.request.name + ' ➤ Array Length'
    }

    this.evaluate = function (context) {
      var body = JSON.parse(this.request.getLastExchange().responseBody)
      return Array.isArray(body) ? body.length : 0
    }
  }

  ResponseParsedBodyArrayLengthDynamicValue.identifier = "com.joshuajabbour.PawExtensions.ResponseParsedBodyArrayLengthDynamicValue"

  ResponseParsedBodyArrayLengthDynamicValue.title = "Response Parsed Body - Array Length"

  ResponseParsedBodyArrayLengthDynamicValue.inputs = [
    DynamicValueInput('request', 'Request', 'Request')
  ]

  registerDynamicValueClass(ResponseParsedBodyArrayLengthDynamicValue)
}).call(this)
